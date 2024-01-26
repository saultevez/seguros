import React from 'react'
import RadialFields from '../../components/RadialFields'
import discountOptions from './discountOptions'
import CollapsibleBox from '../../components/CollapsibleBox'
import CheckFields from '../../components/CheckFields'
import compañias from '../../../../compañias'
import insuranceOptions from './insuranceOptions'
import { useWatch } from 'react-hook-form'

const InsuranceInfo = ({ register, errors, control, defaultValue }) => {
    const seguroGama = useWatch({
        control,
        name: 'seguro_gama',
    })

    return (
        <div className="mb-2 flex flex-col gap-4">
            <h3 className="font-bold mb-2">Información Seguro</h3>
            <div className='mb-4'>
                <RadialFields
                    control='entry.906748024'
                    register={register}
                    label={'¿Tienes actualmente seguro de Salud o Eps?'}
                    errors={errors}
                    id={'descuento'}
                    options={discountOptions}
                    defaultValue='no' />
            </div>
            <div className='mb-2'>
                <div className='flex flex-col gap-2 mb-4'>
                    <RadialFields
                        boxSelect
                        control={'entry.1919370701'}
                        inputClassname={'items-start flex-col'}
                        label={'¿Qué tipo de seguro estás buscando?'}
                        register={register}
                        errors={errors}
                        id={'seguro_gama'}
                        options={insuranceOptions}
                        defaultValue='completo' />
                    <CollapsibleBox
                        show={seguroGama === 'gama alta'}
                        children={<RadialFields
                            control={'entry.937800926'}
                            register={register}
                            errors={errors}
                            id={'cobertura_internacional'}
                            label={'¿Quieres Cobertura Internacional?'}
                            defaultValue='no'
                            options={[{ id: 'sinCobertura', label: 'si', value: 'si' }, { id: 'conCobertura', label: 'no', value: 'no' }]} />} />
                </div>
                <CheckFields label={'¿Qué compañías de seguro preferirías?'}
                    register={register}
                    errors={errors}
                    id={'compañias'}
                    options={compañias}
                    control='entry.551609928' />
            </div>
        </div>
    )
}

export default InsuranceInfo
