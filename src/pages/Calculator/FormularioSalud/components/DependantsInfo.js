import React from 'react'
import Button from '../../../../components/Button'
import BirthDateFields from '../../components/BirthDateFields'
import CollapsibleBox from '../../components/CollapsibleBox'
import { useWatch } from 'react-hook-form'
import { SlTrash } from "react-icons/sl"
import { AiOutlinePlus } from "react-icons/ai"
import dependantsOptions from './dependantsOptions'
import RadialFields from '../../components/RadialFields'

const DependentsInfo = ({ register, errors, control, fields, append, remove, defaultValueDate, min }) => {
    const controls = [
        'entry.1086872286',
        'entry.1792008461',
        'entry.388503916',
        'entry.789557463',
    ]
    const seguroDependientes = useWatch({
        control,
        name: 'incluye_dependientes',
    })

    return (
        <div className="mb-2 flex flex-col gap-4'">
            <div className='mb-2'>
                <h3 className="font-bold mb-4 mt-2">Dependientes</h3>
                <RadialFields
                    control='entry.667287887'
                    label={'¿Incluirías dependientes en tu seguro?'}
                    register={register}
                    errors={errors}
                    id={'incluye_dependientes'}
                    options={dependantsOptions}
                    defaultValue={'no'} />
            </div>
            <CollapsibleBox
                show={seguroDependientes === 'si'}
                children={<div className='mb-2 flex flex-col gap-4 rounded-lg bg-slate-100/50 p-4'>
                    <h3 className='mb-2'>Fechas de nacimiento de dependientes</h3>
                    {fields.map((item, index) => (
                        <div key={item.id} className='flex items-center gap-2 mb-4'>
                            <h1>{` ${index + 1} .`}</h1>
                            <div className='flex w-auto flex-1 gap-0 items-center'>
                                <BirthDateFields
                                    className={'w-full'}
                                    key={item.id}
                                    inputClassname={'rounded-e-none border-slate-200 border border-e-0'}
                                    register={register}
                                    errors={errors}
                                    min={min}
                                    id={`dependientes[${index}].fecha_nacimiento`}
                                    control={controls[index]}
                                    defaultValue={seguroDependientes === 'si' ? defaultValueDate : ''}
                                />
                                {fields.length > 1 ? (
                                    <Button
                                        type="button"
                                        className={'h-[40px] rounded-s-none slate-200 border-s-0 border bg-slate-100 text-red-600 hover:text-red-600 hover:bg-slate-200'}
                                        onClick={() => remove(index)}
                                        children={<SlTrash />}
                                    />
                                ) : (
                                    <Button
                                        type="button"
                                        className={'h-[40px] rounded-s-none slate-200 border-s-0 border bg-slate-100 text-gray-400 cursor-not-allowed'}
                                        disabled={true}
                                        children={<SlTrash />}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                    {fields.length < 4 && (
                        <Button
                            type="button"
                            className={'bg-transparent border border-blue-500 text-blue-800 hover:bg-blue-100'}
                            onClick={() => append({ fecha_nacimiento: min })}
                            children={<p className='flex gap-2 items-center justify-center'>Agregar dependiente<AiOutlinePlus /></p> }
                        />
                    )}
                </div>} />
        </div>
    )
}

export default DependentsInfo
