import React from 'react'
import FormContainer from '../../../Calculator/components/FormContainer'
import Button from '../../../../components/Button'
import { SlHeart } from "react-icons/sl"

const FormularioVehicular = () => {

  const handleSubmit = (data) => {
    console.log(data)
  }
  const iconElement = <SlHeart color='white' />

  return (
    <FormContainer icon={iconElement} title={'Cotiza tu seguro de accidentes personales'}>
      <div className=' flex-col flex align-end mt-4' onClick={handleSubmit}>
        <div className='pb-4 flex flex-col gap-2'>
          <h3 className="font-bold mb-2">Contacto a whatsapp</h3>
          <div className='mb-2'>  
          </div>  
        </div>
        <Button className='self-end' type="submit" children={'Contactar'} />
      </div>
    </FormContainer>
  )
}

export default FormularioVehicular
