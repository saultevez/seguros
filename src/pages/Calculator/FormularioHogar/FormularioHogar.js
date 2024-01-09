import React from 'react'
import { useForm } from 'react-hook-form'
import FormContainer from '../components/FormContainer'
import Button from '../../../components/Button'
import { SlHome } from "react-icons/sl"
import SumaAsegurada from './components/Suma'
import DocumentoIdentidad from './components/Documento'
import NombresApellidos from './components/NombresYApellidos'
import TipoPropiedadAntiguedad from './components/TipoDePropiedadAntiguedad'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object({
  soles_o_dolares: yup.string().required(),
  nombres: yup.string().required(),
  apellidos: yup.string().required(),
  propiedad_valor: yup.number().positive().required(),
  ruc_o_dni: yup.string().required(),
  numero_documento: yup.number().positive().required(),
  casa_o_depa: yup.string().required(),
  propiedad_antiguedad: yup.number().positive().required(),
  tipo_seguro: yup.string().required()
}).required()
const FormularioHogar = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      soles_o_dolares: 'soles',
      propiedad_valor: 0,
      ruc_o_dni: 'dni',
      numero_documento: 0,
      nombres: '',
      apellidos: '',
      casa_o_depa: 'casa',
      propiedad_antiguedad: 10,
      tipo_seguro: 'hogar'
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }
  const iconElement = <SlHome color='white'/>

  return (
    <FormContainer icon={iconElement} title={'Cotiza tu seguro de hogar'}>
      <form id="cost-calculator-form" className=' flex-col flex align-end' onSubmit={handleSubmit(onSubmit)}>
        <div className='pb-4 flex flex-col gap-2'>
          <SumaAsegurada register={register} errors={errors}/>
          <DocumentoIdentidad register={register} errors={errors}/>
          <NombresApellidos register={register} errors={errors}/> 
          <TipoPropiedadAntiguedad register={register} errors={errors}/>
        </div>
        <Button className=' self-end' type="submit" children={'Cotizar'} />
      </form>
    </FormContainer>
  )
}

export default FormularioHogar
