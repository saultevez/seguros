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
                <div className='flex gap-4 items-start mb-2'>
                    <BirthDateFields
                        className={'w-auto flex-1'}
                        register={register}
                        errors={errors}
                        control={'entry.1110320693'}
                        id={'fecha_nacimiento_titular'}
                        label={'Fecha de nacimiento'}
                        defaultValue={defaultValueDate} />
                    <SelectField
                        control={'entry.1019302940'}
                        className={'w-auto flex-1'}
                        register={register}
                        errors={errors}
                        options={sexOptions}
                        id={'sexo'}
                        label={'Sexo'} />
                </div>
                <div className='flex gap-4 items-start w-full mb-2'>
                    <TextFields
                    className={'w-auto flex-1'}
                        control={'entry.503191076'}
                        register={register}
                        errors={errors} id={'telefono'}
                        label={'Telefono'} />
                    <TextFields
                        className={'w-auto flex-1'}
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
