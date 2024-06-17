import React from 'react'
import FormContainer from '../../Calculator/components/FormContainer'
import Button from '../../../components/Button'
import { MdLocalPolice } from "react-icons/md"

const FormularioResponsabilidad = () => {
 
  const handleContactar = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=51970177742'
  }

  const iconElement = <MdLocalPolice  style={{ color: 'rgb(37 41 119)', height:'24px', width:'24px' }} />

  return (
    <FormContainer icon={iconElement} title={'Cotiza tu seguro de responsabilidad social'} description={'Cobertura de seguro que protege a los asegurados contra reclamaciones de terceros por daños personales o materiales causados accidentalmente por ellos o por sus propiedades, brindando compensación financiera y cubriendo costos legales asociados.'}>
      <div className=' flex-col flex align-end mt-4'>
        <Button className='self-end' onClick={handleContactar} children={'Contacto a WhatsApp'} />
      </div>
    </FormContainer>
  )
}

export default FormularioResponsabilidad
