import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillHouseFill } from "react-icons/bs"
import { MdHealthAndSafety } from "react-icons/md"
import { FaCarSide } from "react-icons/fa6"
import { FaHeart } from "react-icons/fa6"
import { FaHandSparkles } from "react-icons/fa"

const iconMapping = {
  'Seguro de Salud': <MdHealthAndSafety style={{ height:'20px', width:'20px' }} />,
  'Seguro de Hogar': <BsFillHouseFill style={{ height:'20px', width:'20px' }} />,
  'Seguro de Vida': <FaHeart style={{ height:'20px', width:'20px' }} />,
  'Seguro Vehicular': <FaCarSide style={{ height:'20px', width:'20px' }} />,
  'Otros Seguros': <FaHandSparkles style={{ height:'20px', width:'20px' }} />,
}

const descriptionMapping = {
  'Seguro de Salud': 'Cubre los gastos médicos y hospitalarios, garantizando acceso a atención médica.',
  'Seguro de Hogar': 'Protege tu propiedad y responsabilidad.',
  'Seguro de Vida': 'Proporciona protección financiera a los beneficiarios en caso de fallecimiento del asegurado.',
  'Seguro Vehicular': 'Cubre los daños a tu vehículo y a terceros en caso de accidentes.',
  'Otros Seguros': null
}

const HomeButton = ({ to, label }) => (
  <li className={'duration-300 bg-transparent text-blue-800 hover:bg-blue-100 bg-white shadow rounded-lg h-full w-full'}>
    <Link className=' p-4 flex gap-4 w-full h-full' to={to}>
      <div className='bg-blue-200 h-10 w-10 justify-center p-2 mt-1 flex items-center rounded-lg'>{iconMapping[label]}</div>
      <div>
        {label}
        <p className='font-normal text-neutral-700'>{descriptionMapping[label]}</p>
      </div>
    </Link>
  </li>
)

export default HomeButton
