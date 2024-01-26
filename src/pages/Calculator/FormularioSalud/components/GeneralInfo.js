import React from 'react'
import BirthDateFields from '../../components/BirthDateFields'
import TextFields from '../../components/TextField'
import SelectField from '../../components/SelectField'
import sexOptions from '../../components/sexOptions'

const GeneralInfo = ({ register, errors, control, defaultValueDate }) => {
    return (
        <div className='pb-4 flex flex-col gap-2'>
            <h3 className="font-bold mb-2">Información General</h3>
            <div className='mb-2'>
                <div className='flex gap-2 items-start'>
                    <BirthDateFields
                        register={register}
                        errors={errors}
                        control={'entry.1110320693'}
                        id={'fecha_nacimiento_titular'}
                        label={'Fecha de nacimiento'}
                        defaultValue={defaultValueDate} />
                    <SelectField
                        control={'entry.1019302940'}
                        register={register}
                        errors={errors}
                        options={sexOptions}
                        id={'sexo'}
                        label={'Sexo'} />
                </div>
                <div className='flex gap-4 items-start'>
                    <TextFields
                        control={'entry.503191076'}
                        register={register}
                        errors={errors} id={'telefono'}
                        label={'Telefono'} />
                    <TextFields
                        id={'emailAddress'}
                        register={register}
                        errors={errors}
                        name={'emailAddress'}
                        label={'Email'} /></div>
            </div>
        </div>
    )
}

export default GeneralInfo
