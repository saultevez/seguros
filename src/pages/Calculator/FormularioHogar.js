import React from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '../../components/common/inputs/TextInput'
import SelectInput from '../../components/common/inputs/SelectInput'
import Button from '../../components/Button'

const FormularioHogar = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      propiedad_valor: 0,
      identidad_tipo: 1,
      identidad_documento: 0,
      identidad_nombres: '',
      identidad_apellidos: '',
      propiedad_tipo: 1,
      propiedad_antiguedad: 10,
    },
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-[600px] mx-auto">
      <div>
        <h2 className="font-bold text-xl mb-4">Cotiza tu seguro de hogar</h2>
        <hr className="mb-2" />
        <hr className="my-2" />
      </div>
      <form id="cost-calculator-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <h3 className="font-bold">Suma asegurada</h3>
            <TextInput
              className={'flex items-center gap-2 py-2'}
              id={'propiedad_valor'}
              label={'soles'}
              register={register}
            />
          </div>
          <div>
            <h3 className="font-bold">Documento de identidad</h3>
            <div className={'flex items-center gap-2 py-2'}>
              <SelectInput
                id={'identidad_tipo'}
                options={[{ label: 'DNI', value: 1 }, { label: 'RUC', value: 2 }]}
                {...{ register }}
              />
              <TextInput
                id={'identidad_documento'}
                register={register}
              />
            </div>
            <div className={'flex items-center gap-2 py-2'}>
              <TextInput
                id={'identidad_nombres'}
                label={'Nombres'}
                register={register}
              />
              <TextInput
                id={'identidad_apellidos'}
                label={'Apellidos'}
                register={register}
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold">Tipo de propiedad</h3>
            <SelectInput
              id="propiedad_tipo"
              options={[
                { label: 'casa', value: 1 },
                { label: 'departamento', value: 2 },
              ]}
              {...{ register }}
            />
            <h3 className="font-bold">Antiguedad</h3>
            <SelectInput
              id="propiedad_antiguedad"
              options={[
                { label: '10', value: 10 },
                { label: '20', value: 20 },
                { label: '30', value: 30 },
                { label: '40', value: 40 },
                { label: '50+', value: 50 },
              ]}
              {...{ register }}
            />
          </div>
        </div>
        <Button type="submit" children={'Submit'} />
      </form>
    </div>
  )
}

export default FormularioHogar
