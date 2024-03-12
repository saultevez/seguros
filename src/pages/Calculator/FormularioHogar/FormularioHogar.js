import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormContainerFancy from '../components/FormContainerFancy'
import Button from '../../../components/Button'
import { BsFillHouseFill } from "react-icons/bs"
import MonetaryValueField from '../components/MonetaryValueField'
import DocumentFields from './components/DocumentField'
import NameFields from './components/NameFields'
import TextFields from '../components/TextField'
import PropertyCharacteristcsFields from './components/PropertyCharacteristicsFields'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import Box from '../../../components/common/Box'

const schema = yup.object({
  tipo_de_moneda: yup.string().required(),
  propiedad_valor: yup.number().typeError('El valor tiene que ser un número').positive('El valor no puede ser 0').required('Por favor introduzca el valor aproximado de su propiedad'),
  nombres: yup.string().required('Nombres es un campo obligatorio'),
  apellidos: yup.string().required('Apellidos es un campo obligatorio'),
  documento_tipo: yup.string().required(),
  documento_numero: yup.number('El valor tiene que ser un número').typeError('El valor tiene que ser un número').positive('Número inválido').required('Documento de identidad un campo obligatorio'),
  propiedad_tipo: yup.string().required('Tipo de propiedad es un campo obligatorio'),
  propiedad_antiguedad: yup.string().required('Antiguedad un campo obligatorio'),
  propiedad_direccion: yup.string().required('Por favor introduzca el distrito donde se ubica su propiedad'),
  emailAddress: yup.string().email('Por favor introduzca un email válido').required('Email es un campo obligatorio'),
  tipo_seguro: yup.string().required()
}).required()
const FormularioHogar = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tipo_de_moneda: 'PEN',
      propiedad_valor: null,
      documento_tipo: 'DNI',
      documento_numero: null,
      nombres: '',
      apellidos: '',
      seguro_gama: 'completo',
      propiedad_tipo: 'casa',
      propiedad_antiguedad: '0-10',
      tipo_seguro: 'hogar',
      propiedad_direccion: ''
    },
    resolver: yupResolver(schema),
  })
  const [submitted, setSbmitted] = useState(false)

  const onSubmit = async (data) => {
    try {
      await schema.validate(data, { abortEarly: false })
      console.log('Form data:', data)
      setSbmitted(true)
      console.log(submitted)
      document.getElementById('form-hogar').submit()
    } catch (validationErrors) {
      console.error('Validation errors:', validationErrors)
    }
  }
  const iconElement = <BsFillHouseFill style={{ color: 'rgb(37 41 119)', height: '24px', width: '24px' }} />

  return (
    <FormContainerFancy icon={iconElement} title={'Cotiza tu seguro de hogar'} description={'Protege tu propiedad y responsabilidad, ofreciendo seguridad financiera.'}>
      <iframe onLoad={() => { if (submitted) { window.location = '/formulario-enviado' } }} name='submisionHidden' title='submisionHidden' id='submisionHidden' className='hidden' />
      <form onSubmit={handleSubmit(onSubmit)} id="form-hogar" action='https://docs.google.com/forms/d/e/1FAIpQLSfDFQFZ1SycfxGZqPqj118g_RJcUSzbI1ClP2eqsckbKW5KKg/formResponse' method='post' target='submisionHidden' className=' flex-col flex gap-4 mt-4' >
        <Box>
          <h3 className="font-bold mb-2">Información General</h3>
          <div className='mb-2 flex flex-col gap-4'>
            <NameFields
              idApellidos='entry.1379726771'
              idNombres='entry.1469407066'
              register={register}
              errors={errors}
            />
            <div className=' flex-col sm:flex-row flex gap-4 items-start'>
              <div className='w-full flex-1'>
                <DocumentFields
                  idDocumentNumber={'entry.941896185'}
                  idDocumentType={'entry.1591173920'}
                  register={register}
                  errors={errors}
                /></div>

              <TextFields
                className={'w-full flex-1'}
                register={register}
                errors={errors}
                id={'emailAddress'}
                label={'Email'}
                name={'emailAddress'}
              />
            </div>
          </div>
        </Box>

        <Box>
          <h3 className="font-bold mb-2">Información de la propiedad</h3>
          <div className='flex flex-col gap-4'>
            <MonetaryValueField
              register={register}
              errors={errors}
              idCurrency={'entry.956630619'}
              idCurrencyAmount={'entry.438678515'}
              id={'propiedad_valor'}
            />
            <PropertyCharacteristcsFields
              idPropertyAdress={'entry.1675024963'}
              idPropertyAge={'entry.1982586812'}
              idPropertyType={'entry.1598932309'}
              register={register}
              errors={errors}
            />
          </div>

          <div className='w-full justify-end flex py-4'>
            <Button type="submit" children={'Cotizar'} />
          </div>
        </Box>

      </form>
    </FormContainerFancy>
  )
}

export default FormularioHogar
