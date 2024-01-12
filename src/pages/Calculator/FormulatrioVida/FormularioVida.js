import React from 'react'
import { useForm, useWatch } from 'react-hook-form'
import FormContainer from '../components/FormContainer'
import Button from '../../../components/Button'
import { SlHeart } from "react-icons/sl"
import BirthDateFields from '../components/BirthDateFields'
import TextFields from '../components/TextField'
import RadialFields from '../components/RadialFields'
import SelectField from '../components/SelectField'
import MonetaryValueField from '../components/MonetaryValueField'
import CollapsibleBox from '../components/CollapsibleBox'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import classNames from 'classnames'
import sexOptions from '../components/sexOptions'
import lifeInsuranceTypeOptions from './components/lifeInsuranceTypeOptions'
import rescueOptions from './components/rescueOptions'

const schema = yup.object({
  sexo: yup.string().required(),
  suma_asegurada: yup.number().typeError('El valor tiene que ser un número').positive('El valor no puede ser 0').required('Por favor introduzca el valor aproximado de su propiedad'),
  años_asegurar: yup.number().typeError('El valor tiene que ser un número').positive('El valor no puede ser 0').required('Por favor introduzca el valor aproximado de su propiedad'),
  telefono: yup.number('El valor tiene que ser un número').typeError('El valor tiene que ser un número').positive('Número inválido').nullable(true).notRequired().transform((value) => !!value ? value : null),
  fecha_nacimiento: yup.date().required('Antiguedad un campo obligatorio'),
  email: yup.string().email('Por favor introduzca un email válido').required('Email es un campo obligatorio'),
  tipo_seguro: yup.string().required(),
  seguro_vida_tipo: yup.string().required('Por favor seleccione un tipo de seguro'),
  vida_vida_rescate: yup.string().required('Por favor seleccione un tipo de rescate')
}).required()
const FormularioVida = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sexo: 'mujer',
      suma_asegurada: null,
      años_asegurar: 0,
      telefono: null,
      fecha_nacimiento: '1990-01-01',
      email: '',
      tipo_seguro: 'vida',
      seguro_vida_tipo: 'vida',
      vida_vida_rescate: 'con'
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }
  const seguroVidaTipo = useWatch({
    control,
    name: 'seguro_vida_tipo',
  })
  const iconElement = <SlHeart color='white' />
  return (
    <FormContainer icon={iconElement} title={'Cotiza tu seguro de vida'}>
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
          <h3 className="font-bold mb-2">Información Seguro</h3>
          <div className='mb-2'>
            <div className='flex flex-col gap-2 mb-4'>
            <RadialFields register={register} errors={errors} id={'seguro_vida_tipo'} label={'Tipo de seguro de vida'} options={lifeInsuranceTypeOptions} />
            <CollapsibleBox show={seguroVidaTipo === 'vida'} children={<RadialFields register={register} errors={errors} id={'vida_vida_rescate'} label={'Rescate'} options={rescueOptions} />} />
            </div>
            <div className={classNames('flex gap-2 items-start duration-300', seguroVidaTipo === 'vida' ? 'items-start' : 'flex-col')}>
            <MonetaryValueField register={register} errors={errors} id={'suma_asegurada'} />
            <TextFields register={register} errors={errors} id={'años_asegurar'} label={seguroVidaTipo === 'vida' ? 'Años a asegurar' : 'Años a asegurar (en función a la edad del niño)'} />
          </div>
          </div>
        </div>
        <Button className='self-end' type="submit" children={'Cotizar'} />
      </form>
    </FormContainer>
  )
}

export default FormularioVida
