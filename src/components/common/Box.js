import React from 'react'

const Box = ( {children} ) => {
    return (
        <div className='bg-white shadow p-4 rounded-lg'>
            {children}
        </div>
    )
}

export default Box