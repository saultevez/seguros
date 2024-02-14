import React from 'react'
import { useLocation } from 'react-router-dom'

const SubmisionConfirmation = () => {
  const location = useLocation()
  const { state } = location
  const price = state && state.price

  return (
    <div className='flex flex-col gap-2 p-4 border-neutral-300 m-12 border rounded-xl text-center'>
      <h1 className='text-3xl font-bold'>¡Gracias!</h1>
      <p className='text-neutral-600'>
        {price ? 'De acuerdo a tus respuestas, tus seguros y precios estimados serían:' : 'Pronto estaremos en contacto'}</p>
      <div className='flex-wrap flex gap-6 p-4 items-center justify-center'>
        {price && Object.entries(price).map(([insuranceName, insurance]) => (
          <div key={insuranceName} className='bg-blue-100/50 rounded flex flex-col gap-1 p-4 text-left'>
            <p className=''>{insurance.key}</p>
            <p className='text-blue-800 font-bold text-3xl'>
              <span className='font-normal text-base text-neutral-800'>s/.</span>
              {Math.round(insurance.predictedFee / 12)}
              <span className='font-normal text-base text-neutral-800'> al mes</span>
            </p>
            {insurance.totalDependentsFee > 0 ? (
              <p className='text-sm text-neutral-600'>Precio por dependientes: s/. {Math.round(insurance.totalDependentsFee / 12)}</p>
            ) : (
              <p className='text-sm text-neutral-600'>No incluye dependientes</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubmisionConfirmation
