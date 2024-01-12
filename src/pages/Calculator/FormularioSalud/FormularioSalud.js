import React , { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import FormContainer from '../components/FormContainer'
import Button from '../../../components/Button'
import { SlEmotsmile } from "react-icons/sl"
import BirthDateFields from '../components/BirthDateFields'
import TextFields from '../components/TextField'
import RadialFields from '../components/RadialFields'
import SelectField from '../components/SelectField'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import CollapsibleBox from '../components/CollapsibleBox'
import insuranceOptions from './components/insuranceOptions'
import CheckFields from '../components/CheckFields'
import compañias from '../../../compañias'
import discountOptions from './components/discountOptions'
import sexOptions from '../components/sexOptions'

const calculateInsurance = (formData) => {
  const calculatePrice = () => {
    const numericalValues = Object.values(formData).filter((value) => typeof value === 'number');
    const total = numericalValues.reduce((acc, value) => acc + value, 0);
    return total;
  };

  return calculatePrice();
};
const schema = yup.object({
  sexo: yup.string().required(),
  descuento: yup.string().required('Por favor seleccione una opción'),
  seguro_gama: yup.string().required('Por favor seleccione una opción'),
  telefono: yup.number('El valor tiene que ser un número').typeError('El valor tiene que ser un número').positive('Número inválido').nullable(true).notRequired().transform((value) => !!value ? value : null),
  fecha_nacimiento: yup.date().required('Antiguedad un campo obligatorio'),
  email: yup.string().email('Por favor introduzca un email válido').required('Email es un campo obligatorio'),
  tipo_seguro: yup.string().required(),
  cobertura_internacional: yup.string().required('Por favor seleccione una opción'),
  compañias: yup.array()
}).required()
const FormularioSalud = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sexo: 'mujer',
      descuento: 'no',
      seguro_gama: 'completo',
      telefono: null,
      fecha_nacimiento: '1990-01-01',
      email: '',
      tipo_seguro: 'salud',
      cobertura_internacional: 'no',
      compañias: null
    },
    resolver: yupResolver(schema)
  })
  const [insurancePrice, setInsurancePrice] = useState(null)

  const onSubmit = (data) => {
    // Calculate insurance price when the form is submitted
    const price = calculateInsurance(data);
    setInsurancePrice(price);

    console.log(data);
    console.log('Estimated Insurance Price:', price);
  };
  
  const seguroGama = useWatch({
    control,
    name: 'seguro_gama',
  })
  const iconElement = <SlEmotsmile color='white' />
  return (
    <FormContainer icon={iconElement} title={'Cotiza tu seguro de salud'}>
      <form id="cost-calculator-form" className=' flex-col flex align-end mt-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='pb-4 flex flex-col gap-2'>
          <h3 className="font-bold mb-2">Información General</h3>
          <div className='mb-2'>
            <div className='flex gap-2 items-start'>
              <BirthDateFields register={register} errors={errors} />
              <SelectField register={register} errors={errors} options={sexOptions} id={'sexo'} label={'Sexo'} />
            </div>
            <div className='flex gap-4 items-start'>
              <TextFields register={register} errors={errors} id={'telefono'} label={'Telefono'} />
              <TextFields register={register} errors={errors} id={'email'} label={'Email'} /></div>
          </div>
          <div className='mb-2'>
            <h3 className="font-bold mb-2">¿Tienes actualmente seguro de Salud o Eps?</h3>
            <RadialFields register={register} errors={errors} id={'descuento'} options={discountOptions} />
          </div>
          <h3 className="font-bold mb-2">Información Seguro</h3>
          <div className='mb-2'>
            <div className='flex flex-col gap-2 mb-4'>
              <RadialFields inputClassname={'items-start flex-col'} boxSelect label={'¿Qué tipo de seguro estás buscando?'} register={register} errors={errors} id={'seguro_gama'} options={insuranceOptions} />
              <CollapsibleBox show={seguroGama === 'gama-alta'} children={<RadialFields register={register} errors={errors} id={'cobertura_internacional'} label={'¿Quieres Cobertura Internacional?'} options={[{ id: 1_1, label: 'si', value: 'si' }, { id: 2_2, label: 'no', value: 'no' }]} />} />
            </div>
            <CheckFields label={'¿Qué compañías de seguro preferirías?'} register={register} errors={errors} id={'compañias'} options={compañias} />
          </div>
        </div>
        <Button className='self-end' type="submit" children={'Cotizar'} />
      </form>
    </FormContainer>
  )
}

export default FormularioSalud 
