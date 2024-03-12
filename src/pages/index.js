
import HomeButtons from '../components/homeButtons'
import React from 'react'

const Home = () => {
    return (
        <section className='flex flex-col p-4 gap-4 items-center justify-center mt-10'>
            <div className="w-full flex flex-col items-center p-4 gap-2 max-w-[600px]">
                <h1 className='font-bold text-3xl'>Encuentra la mejor protección para ti</h1>
                <p className='text-md text-slate-500 text-center'>Encuentra tu seguro ideal con nuestra calculadora en línea. Obtén cotizaciones personalizadas para hogar, salud, vida y vehículos.</p>
            </div>
                <HomeButtons />
        </section>

    )
}

export default Home