import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, useFieldArray, useWatch } from 'react-hook-form';
import FormContainerFancy from '../components/FormContainerFancy';
import Box from '../../../components/common/Box';
import Button from '../../../components/Button';
import { MdHealthAndSafety } from "react-icons/md";
import GeneralInfo from './components/GeneralInfo';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InsuranceInfo from './components/InsuranceInfo';
import DependentsInfo from './components/DependantsInfo';
import useInsuranceCalculator from './hooks/useInsuranceCalculator';

const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 26)).toISOString().slice(0, 10);
const fechaDefault = '1990-01-01';
const schema = yup.object({
  sexo: yup.string().required(),
  descuento: yup.string().required('Por favor seleccione una opción'),
  seguro_gama: yup.string().required('Por favor seleccione una opción'),
  telefono: yup.number('El valor tiene que ser un número').typeError('El valor tiene que ser un número').positive('Número inválido').nullable(true).notRequired().transform((value) => !!value ? value : null),
  fecha_nacimiento_titular: yup.date().required('Fecha de nacimiento es un campo obligatorio'),
  emailAddress: yup.string().email('Por favor introduzca un email válido').required('Email es un campo obligatorio'),
  tipo_seguro: yup.string().required(),
  cobertura_internacional: yup.string().required('Por favor seleccione una opción'),
  compañias: yup.array().required('Por favor seleccione una opción'),
  incluye_dependientes: yup.string(),
  dependientes: yup.array().of(
    yup.object().shape({
      fecha_nacimiento: yup.date()
    })
  ).default([{ fecha_nacimiento: maxDate }]),
}).required();

const defaultFormData = {
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
  dependientes: [{ fecha_nacimiento: maxDate }],
};

const FormularioSalud = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormData,
    resolver: yupResolver(schema),
  });

  const { insurancePrice, calculatePrice } = useInsuranceCalculator();
  const [submitted, setSubmitted] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      await schema.validate(data, { abortEarly: false });
      if (data.cobertura_internacional === 'si') {
        data.seguro_gama = 'gamaSuperAlta';
      }
      const price = await calculatePrice(data);
      console.log(price);
      document.getElementById('form-salud').submit();
      setSubmitted(true);
    } catch (validationErrors) {
      console.error('Validation errors:', validationErrors);
    }
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'dependientes',
  });

  const fechaNacimientoTitular = useWatch({
    control,
    name: 'fecha_nacimiento_titular',
  });

  const iconElement = <MdHealthAndSafety style={{ color: 'rgb(37 41 119)', height: '24px', width: '24px' }} />;

  useEffect(() => {
    let timer;
    if (fechaNacimientoTitular) {
      timer = setTimeout(() => {
        if (new Date().getFullYear() - new Date(fechaNacimientoTitular).getFullYear() >= 65) {
          setShowDisclaimer(true);
        } else {
          setShowDisclaimer(false);
        }
      }, 500); // Delay de 500ms para mostrar el disclaimer
    }

    return () => clearTimeout(timer)
  }, [fechaNacimientoTitular]);

  return (
    <FormContainerFancy icon={iconElement} title={'Cotiza tu seguro de salud'} description={'Cubre los gastos médicos y hospitalarios, garantizando acceso a atención médica y tranquilidad económica para el asegurado.'}>
      <iframe onLoad={() => { if (submitted) { navigate('/formulario-enviado', { state: { price: insurancePrice, showDisclaimer } }) } }} name='submisionHidden' title='submisionHidden' id='submisionHidden' className='hidden' />
      <form
        id="form-salud"
        action="https://docs.google.com/forms/d/e/1FAIpQLSdpsvRvJj7tqcHWw0Wpi4FlBfFHy2SpQwjyTiCQfHzrYQpQhg/formResponse"
        method="post"
        target="submisionHidden"
        className="flex-col flex mt-4 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={`${showDisclaimer ? 'opacity-100 transition-opacity duration-500 h-auto' : ' p-0 m-0 absolute h-0 opacity-0 pointer-events-none'} bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4`}>
          <p className="font-bold">Los seguros para adultos mayores pueden requerir de asesoramiento específico. Por favor no dude en contactarnos por <a target='_blank' rel='noreferrer' className=' underline hover:opacity-80 transition-all duration-100' href="https://api.whatsapp.com/send?phone=51970177742">WhatsApp</a> si tiene dudas.</p>
        </div>
        <Box>
          <GeneralInfo defaultValueDate={fechaDefault} register={register} errors={errors} control={control} />
        </Box>
        <Box>
          <InsuranceInfo register={register} errors={errors} control={control} />
        </Box>
        <Box>
          <DependentsInfo min={maxDate} defaultValueDate={maxDate} register={register} errors={errors} control={control} fields={fields} append={append} remove={remove} />
          <div className='w-full justify-end flex py-4'>
            <Button type="submit" children={'Cotizar'} />
          </div>
        </Box>
      </form>
    </FormContainerFancy>
  );
};

export default FormularioSalud;
