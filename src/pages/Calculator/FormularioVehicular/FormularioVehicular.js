import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, useWatch } from 'react-hook-form'
import FormContainerFancy from '../components/FormContainerFancy'
import Box from '../../../components/common/Box'
import Button from '../../../components/Button'
import { FaCarSide } from "react-icons/fa6"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useVehicularCalculator from './hooks/useVehicularCalculator'
import SelectField from '../components/SelectField'
import vehiculos from './components/vehiculos'
import TextFields from '../components/TextField'

const schema = yup.object({
    emailAddress: yup.string().email('Por favor introduzca un email válido').required('Email es un campo obligatorio'),
    edad_carro: yup.number('El valor tiene que ser un número').typeError('El valor tiene que ser un número').positive('Número inválido').min(0, "El valor tiene que ser mayor a 0").max(12, "El valor tiene que ser menor a 12").required('Por favor introduzca un valor'),
    suma_asegurar: yup.number().typeError('El valor tiene que ser un número').positive('Número inválido').min(10000, "El valor tiene que ser mayor a 10,000").required('Por favor introduzca un valor'),
    marca_carro: yup.string().required('Por favor seleccione una opción'),
    modelo_carro: yup.string().required('Por favor seleccione una opción'),
    tipo_seguro: yup.string().required(),
}).required()

const defaultFormData = {
    edad_carro: '0',
    tipo_seguro: 'vehicular',
    suma_asegurar: 20000,
    emailAddress: '',
    marca_carro: 'Hyundai',
    modelo_carro: 'Otro',
}

const FormularioVehicular = () => {
    const navigate = useNavigate()
    const { handleSubmit, register, control, setValue, formState: { errors } } = useForm({
        defaultValues: defaultFormData,
        resolver: yupResolver(schema),
    })
    const carBrand = useWatch({ control, name: 'marca_carro' })
    const carModel = useWatch({ control, name: 'modelo_carro' })
    const { insurancePrice, calculatePrice } = useVehicularCalculator()
    const [submitted, setSubmitted] = useState(false)

    const onSubmit = async (data, e) => {
        e.preventDefault()

        try {
            await schema.validate(data, { abortEarly: false })
            const price = await calculatePrice(data)
            document.getElementById('form-vehicular').submit()
            setSubmitted(true)
        } catch (validationErrors) {
            console.error('Validation errors:', validationErrors)
        }
    }

    const { brands, availableModels } = useMemo(() => {
        const brandNames = Object.keys(vehiculos)
        const brands = brandNames.map((brand) => ({
            label: brand,
            value: brand,
            models: Object.values(vehiculos[brand]).flat(),
        }))

        let availableModels = []
        brands.forEach((group) => {
            if (group.label.includes(carBrand)) {
                const modelList = group.models.map((model) => ({
                    label: model,
                    value: model,
                }))
                const otroIndex = modelList.findIndex((model) => model.label === "Otro")
                availableModels = otroIndex !== -1 ? [...modelList.slice(0, otroIndex), ...modelList.slice(otroIndex)] : modelList
            }
        })
        return { brands, availableModels }
    }, [carBrand])

    React.useEffect(() => {
        setValue('modelo_carro', availableModels.find(model => model.value === carModel)?.label || 'Otro')
    }, [carModel, availableModels, setValue])

    return (
        <FormContainerFancy icon={<FaCarSide style={{ color: 'rgb(37 41 119)', height: '24px', width: '24px' }} />} title={'Cotiza tu seguro vehicular'} description={'Cubre los daños a tu vehículo y a terceros en caso de accidentes, brindando seguridad financiera y cumplimiento legal en la carretera.'}>
            <iframe onLoad={() => { if (submitted) { navigate('/formulario-enviado', { state: { price: insurancePrice } }) } }} name='submisionHidden' title='submisionHidden' id='submisionHidden' className='hidden' />
            <form id="form-vehicular" action="https://docs.google.com/forms/d/e/1FAIpQLScGe_eDRlUFoigULAF22P1HP244Q9QR5e67vKaWBEX83QlBgg/formResponse" method="post" target="submisionHidden" className="flex-col flex gap-4 mt-4 " onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <h3 className="font-bold mb-2">Información del general</h3>
                    <TextFields className={'w-auto flex-1'} register={register} name={'emailAddress'} errors={errors} id={'emailAddress'} label={'Email'} />
                </Box>

                <Box>
                    <h3 className="font-bold mb-2">Información del Vehículo</h3>
                    <div className='flex-col sm:flex-row flex gap-4 mb-6'>
                        <SelectField control={'entry.1030718323'} className={'w-auto flex-1'} register={register} errors={errors} options={brands} id={'marca_carro'} label={'Marca'} />
                        <SelectField control={'entry.1894346779'} className={'w-auto flex-1'} register={register} errors={errors} options={availableModels} id={'modelo_carro'} label={'Modelo'} placeholder={'Selecciona un modelo'} />
                    </div>
                    <div className='flex gap-4 flex-col sm:flex-row items-start'>
                        <div className='flex items-end relative w-full'>
                            <TextFields className={'w-auto flex-1'} register={register} control={'entry.1702484640'} errors={errors} id={'suma_asegurar'} label={'Valor del vehículo'} />
                            <div className='bg-slate-200 absolute top-[32px] rounded-r-lg right-0 p-4 h-[40px] flex items-center'>USD</div>
                        </div>
                        <div className='flex items-end relative w-full'>
                            <TextFields className={'w-auto flex-1'} register={register} control={'entry.466706583'} errors={errors} id={'edad_carro'} label={'Antiguedad del vehículo'} />
                            <div className='bg-slate-200 absolute top-[32px] rounded-r-lg right-0 p-4 h-[40px] flex items-center'>Años</div>
                        </div>
                    </div>
                    <div className='w-full justify-end flex py-4'>
                        <Button type="submit" children={'Cotizar'} />
                    </div>
                </Box>

            </form>
        </FormContainerFancy>
    )
}

export default FormularioVehicular
