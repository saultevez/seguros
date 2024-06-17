import React from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

const SubmisionConfirmation = () => {
  const location = useLocation();
  const { state } = location;
  const price = state && state.price;
  console.log(price)

  return (
    <div className='flex flex-col gap-2 p-4 mx-auto bg-white shadow max-w-[600px] m-12 border rounded-xl text-center'>
      <h1 className='text-3xl font-bold'>¡Gracias!</h1>
      <p className='text-neutral-600'>
        {price ? 'De acuerdo a tus respuestas, tus seguros y precios estimados serían:' : 'Pronto estaremos en contacto'}</p>
      <div className='flex-wrap flex gap-6 p-4 items-center justify-center'>
        {price && price.map((insurance) => (
          <div 
            key={insurance.key} 
            className={classNames(
              'relative bg-blue-100/50 rounded flex flex-col gap-1 p-4 text-left',
              { 'pt-8': insurance.appliedDiscount > 0 }
            )}
          >
            <p className=''>{insurance.key}</p>
            <p className='text-blue-800 font-bold text-3xl'>
              <span className='font-normal text-base text-neutral-800'>{insurance.type !== 'vehicular' ? ' S/.' : ''}</span>
              {Math.round(insurance.predictedFee / (insurance.type !== 'vehicular' ? 12 : 1))}
              <span className='font-normal text-base text-neutral-800'>{insurance.type === 'vehicular' ? ' USD' : ' al mes'}</span>
            </p>
            {insurance.totalDependentsFee > 0 && insurance.type !== 'vehicular' && (
              <p className='text-sm text-neutral-600'>Precio por dependientes: s/. {Math.round(insurance.totalDependentsFee / 12)}</p>
            )}
            {insurance.totalDependentsFee === 0 && insurance.type !== 'vehicular' && (
              <p className='text-sm text-neutral-600'>No incluye dependientes</p>
            )}
            {insurance.appliedDiscount > 0 && (
              <p className='text-xs bg-green-600 font-bold p-2 right-0 rounded rounded-br-0 text-white absolute top-0'>- {insurance.appliedDiscount}% <span className='font-normal opacity-60'>*</span></p>
            )}
          </div>
        ))}
      </div>
      {price && price.some((insurance) => insurance.appliedDiscount > 0) && (
        <p className='text-sm text-neutral-600 italic'>
          *Los descuentos pueden aumentar aún más, dependiendo de la suscripción de cada cliente.
        </p>
      )}
      {price && price.some((insurance) => insurance.key.includes('Mapfre')) && (
              <p className='text-sm text-neutral-600 italic'>**Las primas de Mapfre podrían variar si provienen de otra compañía de seguros.</p>
      )}
    </div>
  );
};

export default SubmisionConfirmation;
