import React from 'react'
import FormContainer from '../../../Calculator/components/FormContainer'
import Button from '../../../../components/Button'
import { FaExplosion } from "react-icons/fa6"

const FormularioAccidentes = () => {

  const handleContactar = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=51970177742'
  }

  const iconElement = <FaExplosion style={{ color: 'rgb(37 41 119)', height:'24px', width:'24px' }} />

  return (
    <FormContainer icon={iconElement} title={'Cotiza tu seguro de accidentes personales'} description={'Cubre lesiones y fallecimiento por accidentes, ofreciendo compensación financiera.'}>
      <div className=' flex-col flex align-end mt-4'>
        <Button className='self-end' onClick={handleContactar} children={'Contacto a WhatsApp'} />
      </div>
    </FormContainer>
  )
}

export default FormularioAccidentes
