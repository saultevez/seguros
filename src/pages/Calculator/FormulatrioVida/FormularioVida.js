import React, { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import FormContainerFancy from '../components/FormContainerFancy'
import Button from '../../../components/Button'
import { FaHeart } from "react-icons/fa6"
import MonetaryValueField from '../components/MonetaryValueField'
import BirthDateFields from '../components/BirthDateFields'
import TextFields from '../components/TextField'
import SelectField from '../components/SelectField'
import { yupResolver } from '@hookform/resolvers/yup'
import RadialFields from '../components/RadialFields'
import CollapsibleBox from '../components/CollapsibleBox'
import sexOptions from '../components/sexOptions'
import classNames from 'classnames'
import lifeInsuranceTypeOptions from './components/lifeInsuranceTypeOptions'
import rescueOptions from './components/rescueOptions'
import * as yup from "yup"
import Box from '../../../components/common/Box'

const fechaDefault = '1990-01-01'
const schema = yup.object({
  fecha_nacimiento: yup.date().required(),
  sexo: yup.string().required(),
  emailAddress: yup.string().email(),
  seguro_vida_tipo: yup.string(),
  vida_vida_rescate: yup.string(),
  tipo_de_moneda: yup.string(),
  suma_asegurada: yup.number(),
  fecha_nacimiento_niño: yup.date(),
  años_asegurar: yup.number()
}).required()
const defaultFormData = {
  fecha_nacimiento: fechaDefault,
      sexo: 'mujer',
      emailAddress: '',
      seguro_vida_tipo: 'vida',
      vida_vida_rescate: 'no',
      tipo_de_moneda: 'PEN',
      suma_asegurada: null,
      fecha_nacimiento_niño: fechaDefault,
      años_asegurar: null
}
const FormularioHogar = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormData,
    resolver: yupResolver(schema),
  })
  const [submitted, setSbmitted] = useState(false)

  const onSubmit = async (data) => {
    try {
      await schema.validate(data, { abortEarly: false })
      setSbmitted(true)
      document.getElementById('form-vida').submit()
    } catch (validationErrors) {
      console.error('Validation errors:', validationErrors)
    }
  }

  const seguroVidaTipo = useWatch({
    control,
    name: 'seguro_vida_tipo',
  })
  const iconElement = <FaHeart style={{ color: 'rgb(37 41 119)', height: '24px', width: '24px' }} />
  return (
    <FormContainerFancy icon={iconElement} title={'Cotiza tu seguro de vida'} description={'Proporciona protección financiera a los beneficiarios en caso de fallecimiento del asegurado, ofreciendo tranquilidad y apoyo económico en momentos difíciles.'}>
      <iframe onLoad={() => { if (submitted) { window.location = '/formulario-enviado' } }} name='submisionHidden' title='submisionHidden' id='submisionHidden' className='hidden' />
      <form id="form-vida" className=' flex-col flex gap-4 mt-4' onSubmit={handleSubmit(onSubmit)}
        action="https://docs.google.com/forms/d/e/1FAIpQLSdLqzrB8r1eFEUcd6rljsbA-a7FxiXUZobHqXKTGaQbm7bTgg/formResponse"
        method="post"
        target="submisionHidden">
        <Box>
          <h3 className="font-bold mb-4">Información General</h3>
          <div className='flex flex-col gap-4'>
            <div className='flex-col sm:flex-row flex gap-4 items-start'>
              <BirthDateFields className={'w-full flex-1'} label={'Fecha de nacimiento'} id={'fecha_nacimiento'} register={register} errors={errors} control={'entry.1278227690'} defaultValue={fechaDefault} />
              <SelectField className={'w-full flex-1'} register={register} errors={errors} control={'entry.586574650'} options={sexOptions} id={'sexo'} label={'Sexo'} />
            </div>
            <div className='flex gap-4 items-start'>
              <TextFields className={'w-auto flex-1'} register={register} name={'emailAddress'} errors={errors} id={'emailAddress'} label={'Email'} /></div>
          </div>
        </Box>
        <Box>
          <h3 className="font-bold mb-4">Información del Seguro</h3>
          <div className='flex flex-col gap-4'>
            <RadialFields control={'entry.1051416964'} register={register} errors={errors} id={'seguro_vida_tipo'} label={'Tipo de seguro de vida'} options={lifeInsuranceTypeOptions} />
            <CollapsibleBox show={seguroVidaTipo === 'vida'} children={<RadialFields control={'entry.2086989069'} register={register} errors={errors} id={'vida_vida_rescate'} label={'Rescate'} options={rescueOptions} />} />
            <div className={classNames('flex flex-col gap-4 items-start duration-300', seguroVidaTipo === 'vida' ? 'items-start' : 'flex-col')}>
              <div className='flex items-start w-full gap-4 flex-col sm:flex-row'>
                <MonetaryValueField className={'w-full flex-1'} register={register} idCurrencyAmount={'entry.1452209296'} idCurrency={'entry.1392841856'} errors={errors} id={'suma_asegurada'} />
                {seguroVidaTipo === 'fondo universitario' && (<BirthDateFields className={'w-full flex-1'} label={'Fecha de nacimiento del niño'} id={'fecha_nacimiento_niño'} register={register} errors={errors} control={'entry.354817880'} defaultValue={fechaDefault} />)}
              </div>
              <TextFields className={'w-full'} register={register} control={'entry.1382599764'} errors={errors} id={'años_asegurar'} label={seguroVidaTipo === 'vida' ? 'Años a asegurar' : 'Años a asegurar (en función a la edad del niño)'} />
            </div>
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
