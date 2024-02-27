import { useState } from 'react'
import seguros from '../components/seguros2'

const useInsuranceCalculator = () => {
  const currentYear = new Date().getFullYear()

  const calculateInsurance = (formData) => {
    const { compañias, seguro_gama, fecha_nacimiento_titular, dependientes } = formData
    const dependientesAges = dependientes.map((dependiente) => {
      const birthdateD = new Date(dependiente.fecha_nacimiento)
      return currentYear - birthdateD.getFullYear()
    })

    const birthdate = new Date(fecha_nacimiento_titular)
    const age = currentYear - birthdate.getFullYear()

    const insurances = findInsurances(compañias, seguro_gama, seguros)
    if (!insurances || insurances.length === 0) {
      console.error('Insurances not found for the selected compañia and gama')
      return null
    }

    const result = []
    insurances.forEach((insurance) => {
      Object.entries(insurance).forEach(([key, value]) => {
        const { Titulares, Dependientes } = value
        let totalDependentsFee = 0
        let titularFee = 0
        let minDependentFee = 0

        if (dependientesAges && Dependientes) {
          dependientesAges.forEach((dependienteAge) => {
            let foundFees = []

            Object.entries(Dependientes).forEach(([maxAge, fee]) => {
              if (dependienteAge <= maxAge) {
                foundFees.push(fee)
              }
            })
            if (foundFees.length > 0) {
              minDependentFee = Math.min(...foundFees)
              totalDependentsFee += minDependentFee
            }
          })
        }
        if (age && Titulares) {
          let maxAge = 0
          let maxFee = 0
        
          for (const [tierAge, fee] of Object.entries(Titulares)) {
            const currentAge = parseInt(tierAge)
            if (currentAge > maxAge) {
              maxAge = currentAge
              maxFee = fee
            }
          }
        
          titularFee = parseInt(age) > maxAge ? maxFee : Titulares[age] || 0
        }
        

        const predictedFee = totalDependentsFee + titularFee

        console.log('Insurance:', key)
        console.log('Predicted Fee:', predictedFee)

        result.push({ key, type: 'salud', predictedFee, totalDependentsFee })

      })
    })
    return result
  }

  const findInsurances = (compañias, gama, seguros) => {
    const selectedCompanies = seguros.filter((seguro) =>
      compañias.includes(seguro.compañia)
    )

    const insurances = []
    selectedCompanies.forEach((company) => {
      const matchingGamas = Object.entries(company.gama).filter(([key]) =>
        key.includes(gama)
      )

      matchingGamas.forEach(([key, values]) => {
        insurances.push(values)
      })
    })
    return insurances
  }


  const [insurancePrice, setInsurancePrice] = useState(null)

  const calculatePrice = (formData) => {
    return new Promise((resolve) => {
      const price = calculateInsurance(formData)
      setInsurancePrice(price)
      resolve(price)
    })
  }

  return { insurancePrice, calculatePrice }
}

export default useInsuranceCalculator
