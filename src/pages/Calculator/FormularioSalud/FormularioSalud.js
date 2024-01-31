  import React, { useState, useEffect } from 'react'
  import { useForm, useFieldArray } from 'react-hook-form'
  import FormContainer from '../components/FormContainer'
  import Button from '../../../components/Button'
  import { SlEmotsmile } from "react-icons/sl"
  import GeneralInfo from './components/GeneralInfo'
  import { yupResolver } from '@hookform/resolvers/yup'
  import * as yup from "yup"
  import InsuranceInfo from './components/InsuranceInfo'
  import DependentsInfo from './components/DependantsInfo'

  const calculateInsurance = (formData) => {
    const calculatePrice = () => {
      const numericalValues = Object.values(formData).filter((value) => typeof value === 'number')
    const total = numericalValues.reduce((acc, value) => acc + value, 0)
    const birthdate = new Date(formData.fecha_nacimiento_titular)
    const currentDate = new Date()
    const age = currentDate.getFullYear() - birthdate.getFullYear()

    console.log('Total:', total)
    console.log('Age:', age)

    return total
    }

    return calculatePrice()
  }
  const fechaDefault = '1990-01-01'
  const schema = yup.object({
    sexo: yup.string().required(),
    descuento: yup.string().required('Por favor seleccione una opción'),
    seguro_gama: yup.string().required('Por favor seleccione una opción'),
    telefono: yup.number('El valor tiene que ser un número').typeError('El valor tiene que ser un número').positive('Número inválido').nullable(true).notRequired().transform((value) => !!value ? value : null),
    fecha_nacimiento_titular: yup.date().required('Fecha de nacimiento es un campo obligatorio'),
    emailAddress: yup.string().email('Por favor introduzca un email válido').required('Email es un campo obligatorio'),
    tipo_seguro: yup.string().required(),
    cobertura_internacional: yup.string().required('Por favor seleccione una opción'),
    compañias: yup.array(),
    incluye_dependientes: yup.string(),
    dependientes: yup.array().of(
      yup.object().shape({
        fecha_nacimiento: yup.date().required('Fecha de nacimiento es un campo obligatorio')
      })
    ).default([{ fecha_nacimiento: fechaDefault }]),
  }).required()
  const FormularioSalud = () => {
    const {
      handleSubmit,
      register,
      control,
      formState: { errors },
      reset,
    } = useForm({
      defaultValues: {
        sexo: 'mujer',
        descuento: 'no',
        seguro_gama: 'completo',
        telefono: null,
        fecha_nacimiento_titular: fechaDefault,
        emailAddress: '',
        tipo_seguro: 'salud',
        incluye_dependientes: 'no',
        cobertura_internacional: 'no',
        compañias: null,
        dependientes: [{ fecha_nacimiento: fechaDefault }],
      },
      resolver: yupResolver(schema)
    })
    const [insurancePrice, setInsurancePrice] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    useEffect(() => {
      reset({
        sexo: 'mujer',
        descuento: 'no',
        seguro_gama: 'completo',
        telefono: null,
        fecha_nacimiento_titular: fechaDefault,
        emailAddress: '',
        tipo_seguro: 'salud',
        incluye_dependientes: 'no',
        cobertura_internacional: 'no',
        compañias: null,
        dependientes: [{ fecha_nacimiento: fechaDefault }],
      })
    }, [reset, submitted])
    const onSubmit = async (data, e) => {
      e.preventDefault()

      try {
        await schema.validate(data, { abortEarly: false })
        console.log('Form data:', data)
        const price = calculateInsurance(data)
        setInsurancePrice(price)
        console.log(insurancePrice)
        //document.getElementById('form-salud').submit()
        //setSubmitted(true)
      } catch (validationErrors) {
        console.error('Validation errors:', validationErrors)
      }
    }

    const { fields, append, remove } = useFieldArray({
      control,
      name: 'dependientes',
    })
    const iconElement = <SlEmotsmile color='white' />
    return (
      <FormContainer icon={iconElement} title={'Cotiza tu seguro de salud'}>
        <iframe onLoad={() => { if (submitted) { window.location = '/formulario-enviado' } }} name='submisionHidden' title='submisionHidden' id='submisionHidden' className='hidden' />
        <form
          id="form-salud"
          action="https://docs.google.com/forms/d/e/1FAIpQLSdpsvRvJj7tqcHWw0Wpi4FlBfFHy2SpQwjyTiCQfHzrYQpQhg/formResponse"
          method="post"
          target="submisionHidden"
          className="flex-col flex align-end mt-4"  
          onSubmit={handleSubmit(onSubmit)}
        >
          <GeneralInfo defaultValueDate={fechaDefault} register={register} errors={errors} control={control} />
          <hr className='mb-2'/>
          <InsuranceInfo register={register} errors={errors} control={control} />
          <hr className='mb-2'/>
          <DependentsInfo defaultValueDate={fechaDefault} register={register} errors={errors} control={control} fields={fields} append={append} remove={remove} />
          <Button
            className="self-end"
            type='submit'
            children='Cotizar'
          />
        </form>

      </FormContainer >
    )
  }

  export default FormularioSalud 
