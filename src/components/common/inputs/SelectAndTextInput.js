import React from 'react'
import TextInput from './TextInput'
import SelectInput from './SelectInput'

const SelectAndTextInput = ({ label, onChange, id, register, options, errors, inputClassname, placeholder }) => {
  return (
    <div>
      <h3 className="font-bold">{label}</h3>
      <div className={'flex items-start py-2'}>
        {options ? (
          <SelectInput
            className={'w-auto flex-1'}
            inputClassname={'bg-neutral-200 h-[40px] w-16 ps-2 rounded-s'}
            id={id}
            options={options}
            errorText={errors?.[id]?.message}
            {...{ register }}
            onChange={onChange}
          />
        ) : null}
        <TextInput
          id={id}
          register={register}
          errorText={errors?.[id]?.message}
          placeholder={placeholder}
          inputClassname={inputClassname}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default SelectAndTextInput
