import React from 'react'
import { useForm } from 'react-hook-form'
import FormContainer from '../components/FormContainer'
import Button from '../../../components/Button'
import { SlHome } from "react-icons/sl"
import BirthDateFields from './components/BirthDateFields'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object({
  soles_o_dolares: yup.string().required(),
  propiedad_valor: yup.number().typeError('El valor tiene que ser un número').positive('El valor no puede ser 0').required('Por favor introduzca el valor aproximado de su propiedad'),
  nombres: yup.string().required('Nombres es un campo obligatorio'),
  apellidos: yup.string().required('Apellidos es un campo obligatorio'),
  documento_tipo: yup.string().required(),
  documento_numero: yup.number('El valor tiene que ser un número').typeError('El valor tiene que ser un número').positive('Número inválido').required('Documento de identidad un campo obligatorio'),
  propiedad_tipo: yup.string().required('Tipo de propiedad es un campo obligatorio'),
  fecha_nacimiento: yup.date().required('Antiguedad un campo obligatorio'),
  email: yup.string().email('Por favor introduzca un email válido').required('Email es un campo obligatorio'),
  tipo_seguro: yup.string().required()
}).required()
const FormularioVida = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      soles_o_dolares: 'soles',
      propiedad_valor: 0,
      documento_tipo: 'dni',
      documento_numero: 0,
      nombres: '',
      apellidos: '',
      propiedad_tipo: 'casa',
      propiedad_antiguedad: 10,
      tipo_seguro: 'vida'
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }
  const iconElement = <SlHome color='white' />

  return (
    <FormContainer icon={iconElement} title={'Cotiza tu seguro de hogar'}>
      <form id="cost-calculator-form" className=' flex-col flex align-end mt-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='pb-4 flex flex-col gap-2'>
          <h3 className="font-bold mb-2">Información General</h3>
          <div className='mb-2'>
            <BirthDateFields register={register} errors={errors}/>
          </div>
          <h3 className="font-bold mb-2">Información Propiedad</h3>
          <div >
          </div>
        </div>
        <Button className=' self-end' type="submit" children={'Cotizar'} />
      </form>
    </FormContainer>
  )
}

export default FormularioVida
