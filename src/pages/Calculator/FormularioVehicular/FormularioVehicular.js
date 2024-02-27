import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, useWatch } from 'react-hook-form'
import FormContainer from '../components/FormContainer'
import Button from '../../../components/Button'
import { SlEmotsmile } from 'react-icons/sl'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useVehicularCalculator from './hooks/useVehicularCalculator'
import SelectField from '../components/SelectField'
import vehiculos from './components/vehiculos'
import TextFields from '../components/TextField'

const schema = yup.object({
    emailAddress: yup.string().email('Por favor introduzca un email válido').required('Email es un campo obligatorio'),
    edad_carro: yup.string().required(),
    suma_asegurar: yup.number().required('Por favor seleccione una opción'),
    marca_carro: yup.string().required('Por favor seleccione una opción'),
    modelo_carro: yup.string().required('Por favor seleccione una opción'),
}).required()

const defaultFormData = {
    edad_carro: '0',
    suma_asegurar: '0',
    emailAddress: '',
    marca_carro: 'Hyundai',
    modelo_carro: '',
}

const FormularioVehicular = () => {
    const navigate = useNavigate()
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: defaultFormData,
        resolver: yupResolver(schema),
    })

    const carBrand = useWatch({
        control,
        name: 'marca_carro',
    })

    const getBrands = () => {
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

                if (otroIndex !== -1) {
                    const otroModel = modelList.splice(otroIndex, 1)[0]
                    availableModels = [...modelList, otroModel]
                } else {
                    availableModels = modelList
                }
            }
        })

        return { brands, availableModels }
    }
    const { insurancePrice, calculatePrice } = useVehicularCalculator()

    const [submitted, setSubmitted] = useState(false)

    const onSubmit = async (data, e) => {
        e.preventDefault()

        try {
            await schema.validate(data, { abortEarly: false })
            console.log('Form data:', data)
            const price = await calculatePrice(data)
            console.log('final', price)
            document.getElementById('form-vehicular').submit()
            setSubmitted(true)
        } catch (validationErrors) {
            console.error('Validation errors:', validationErrors)
        }
    }
    const iconElement = <SlEmotsmile color="white" />

    const { brands, availableModels } = useMemo(() => getBrands(), [carBrand])

    return (
        <FormContainer icon={iconElement} title={'Cotiza tu seguro vehicular'}>
            <iframe onLoad={() => { if (submitted) { navigate('/formulario-enviado', { state: { price: insurancePrice } }) } }} name='submisionHidden' title='submisionHidden' id='submisionHidden' className='hidden' />
            <form
                id="form-vehicular"
                action="https://docs.google.com/forms/d/e/1FAIpQLScGe_eDRlUFoigULAF22P1HP244Q9QR5e67vKaWBEX83QlBgg/formResponse"
                method="post"
                target="submisionHidden"
                className="flex-col flex align-end mt-4"
                onSubmit={handleSubmit(onSubmit)}
            >   <h3 className="font-bold mb-2">Información del general</h3>
                <TextFields className={'w-auto flex-1'} register={register} name={'emailAddress'} errors={errors} id={'emailAddress'} label={'Email'} />
                <hr className="mb-2 mt-8" />
                <h3 className="font-bold mb-2">Información del Vehículo</h3>
                <div className='flex gap-4'>
                    <SelectField
                        control={'entry.1030718323'}
                        className={'w-auto flex-1'}
                        register={register}
                        errors={errors}
                        options={brands}
                        id={'marca_carro'}
                        label={'Marca'}
                    />
                    <SelectField
                        control={'entry.1894346779'}
                        className={'w-auto flex-1'}
                        register={register}
                        errors={errors}
                        options={availableModels}
                        id={'modelo_carro'}
                        label={'Modelo'}
                        placeholder={'Selecciona un modelo'}
                    />
                </div>
                <div className='flex gap-2'>
                    <TextFields
                        className={'w-auto flex-1'}
                        register={register}
                        control={'entry.1702484640'}
                        errors={errors}
                        id={'suma_asegurar'}
                        label={'Valor Vehículo'} />

                    <TextFields
                        className={'w-auto flex-1'}
                        register={register}
                        control={'entry.466706583'}
                        errors={errors}
                        id={'edad_carro'}
                        label={'Antiguedad Vehículo'} />
                </div>
                <Button className="self-end mt-4" type="submit" children="Cotizar" />
            </form>
        </FormContainer>
    )
}

export default FormularioVehicular
