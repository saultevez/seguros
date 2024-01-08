import React, { useState, useEffect } from "react"
import "../../App.css"
import { Transition } from "react-spring/renderprops"
import Animatedtotal from "./components/AnimatedTotal"
import { useMediaQuery } from "react-responsive"
import CollapsibleBox from "./components/CollapsibleBox"
import TotalContainer from "./components/TotalContainer"
import TextInput from "../../components/common/inputs/TextInput"
import SelectInput from "../../components/common/inputs/SelectInput"


const FormularioHogar = () => {
  const [show, setShow] = useState(0)
  const [state, setState] = useState({
    ageBaseMultiplier: 6.18,
    ageAddPerYear: 0.19,
    ageMin: 18,
    age: 0,
    agePrice: 0,
    sex: "",
    sexPrice: 0,
    nicotine: 0,
    nicotineMultiplier: 40,
    nicotineUseYears: 0,
    nicotinePrice: 0,
    costInitial: 0,
    addedCost: 0,
  })

  const [timer, setTimer] = useState(null)

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [timer])

  const setAgePrice = () => {
    if (state.age >= state.ageMin) {
      setState({
        ...state,
        agePrice:
          state.age *
          (state.ageBaseMultiplier +
            (state.age - state.ageMin) * state.ageAddPerYear),
      })
    } else {
      setState({
        ...state,
        agePrice: 0,
      })
    }
  }

  const setSexPrice = () => {
    if (state.sex === "hombre") {
      setState({ ...state, sexPrice: 1 })
    } else {
      setState({ ...state, sexPrice: 0 })
    }
  }

  const setNicotinePrice = () => {
    setState({
      ...state,
      nicotinePrice:
        state.nicotineMultiplier * state.nicotineUseYears * state.nicotine,
    })
  }

  const handleCheck = () => {
    clearTimeout(timer)
    setTimer(
      setTimeout(() => {
        setAgePrice()
      }, 1000)
    )
  }

  const handleAge = (e) => {
    setState({
      ...state,
      age: e.target.value,
    })
  }

  const handleSex = (e) => {
    setState({ ...state, sex: e.target.value })
  }

  const handleNicotine = (e) => {
    setShow(e.target.value)
    console.log(show)
  }

  const handleNicotineUse = (e) => {
    setState({ ...state, nicotineUseYears: e.target.value })
  }

  useEffect(() => {
    if (state.age !== 0) {
      handleCheck()
    }
  }, [state.age])

  useEffect(() => {
    setSexPrice()
  }, [state.sex])

  useEffect(() => {
    setNicotinePrice()
  }, [state.nicotineUseYears, state.nicotine])

  return (
    <div className="container slim card">
      <div className="nav"></div>
      <div className="title-container">
        <h2>Calcula tu seguro de hogar</h2>
        <TotalContainer
          agePrice={state.agePrice}
          sexPrice={state.sexPrice}
          nicotinePrice={state.nicotinePrice}
        />
        <hr />
      </div>
      <form id="cost-calculator-form">
        <div className="section-one">
          <div
            className="input-container"
            role="group"
            aria-labelledby="edad"
          >
            <h3 id="edad">Suma asegurada</h3>
            <TextInput
              id={"suma"}
              label={"soles"}
              name={"suma"}
              change={handleAge}
            />
          </div>
          <CollapsibleBox show={show} children={<div>sdsdsdsdsd</div>} />
          <div
            className="input-container"
            role="group"
            aria-labelledby="id"
          >
            <h3 id="id">Documento de identidad</h3>
            <div className="input-options">
              <SelectInput
                id="id_type"
                options={[{ label: 'DNI', value: 1 }, { label: 'RUC', value: 2 }]}
                onChange={handleSex} />
              <TextInput
                id={"id_number"}
                change={handleAge}
              />
              <div>
                <TextInput
                id={"nombres"}
                label={'Nombres'}
                change={handleAge}
              />
              <TextInput
                id={"apellidos"}
                label={'Apellidos'}
                change={handleAge}
              />
              </div>
            </div>
          </div>
          <div
            className="input-container"
            role="group"
            aria-labelledby="propiedad"
          >
            <h3 id="propiedad">
              Tipo de propiedad
            </h3>
            <div className="input-options">
              <SelectInput
                id="propiedad_type"
                options={[{ label: 'casa', value: 1 }, { label: 'departamento', value: 2 }]}
                onChange={handleSex} />
              <SelectInput
                id="propiedad_antiguedad"
                options={[{ label: '10', value: 10 }, { label: '20', value: 20 }, { label: '30', value: 30 }, { label: '40', value: 40 }, { label: '50+', value: 50 }]}
                onChange={handleSex} />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormularioHogar
