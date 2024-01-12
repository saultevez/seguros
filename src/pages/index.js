
import HomeButtons from '../components/homeButtons'
import React from 'react';

const Home = () => {
    return (
        <section className='flex flex-col p-4 gap-4 items-center'>
            <div class="w-full flex flex-col items-center p-4 gap-2">
                <h1 className='font-bold text-3xl'>Calcula tu seguro(?)</h1>
                <p className='text-md text-neutral-500'>Alguna descripción de algún tipo</p>
            </div>
                <HomeButtons />
        </section>

    );
};

export default Home;