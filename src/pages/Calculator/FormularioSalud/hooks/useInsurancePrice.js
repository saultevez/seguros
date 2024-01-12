import { useEffect, useState } from 'react'
const useInsurancePrice = (formData) => {
  const [insurancePrice, setInsurancePrice] = useState(null)

  useEffect(() => {
    const calculatePrice = () => {
      const numericalValues = Object.values(formData).filter((value) => typeof value === 'number')
      const total = numericalValues.reduce((acc, value) => acc + value, 0)
      return total
    }

    const price = calculatePrice()
    setInsurancePrice(price)
  }, [formData])

  return insurancePrice
}

export default useInsurancePrice
