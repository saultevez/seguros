import React from 'react'
import FormContainer from '../../../Calculator/components/FormContainer'
import Button from '../../../../components/Button'
import { IoConstruct } from "react-icons/io5"

const FormularioCar = () => {

  const handleContactar = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=51970177742'
  }

  const iconElement = <IoConstruct style={{ color: 'rgb(37 41 119)', height:'24px', width:'24px' }} />

  return (
    <FormContainer icon={iconElement} title={'Cotiza tu seguro CAR'} description={'Seguro de Construcción de Todo Riesgo, brinda cobertura integral durante el proceso de construcción de proyectos, protegiendo contra riesgos como daños materiales, robo, vandalismo y responsabilidad civil.'}>
      <div className=' flex-col flex align-end mt-4'>
        <Button className='self-end' onClick={handleContactar} children={'Contacto a WhatsApp'} />
      </div>
    </FormContainer>
  )
}

export default FormularioCar
