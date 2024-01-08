import React, { useState, useEffect } from "react"
import "../../../App.css"
import { Transition } from "react-spring/renderprops"
import Animatedtotal from "./AnimatedTotal"
import { useMediaQuery } from "react-responsive"

const TotalContainer = (props) => {
  const [total, setTotal] = useState({
    previousTotal: 0,
    currentTotal: 0,
  })

  useEffect(() => {
    if (
      props.agePrice !== total.previousTotal ||
      props.sexPrice !== total.previousTotal ||
      props.nicotinePrice !== total.previousTotal
    ) {
      const previous =
        Number(props.agePrice) +
        Number(props.sexPrice) +
        Number(props.nicotinePrice)
      const current =
        Number(props.agePrice) +
        Number(props.sexPrice) +
        Number(props.nicotinePrice)
      setTotal({ previousTotal: previous, currentTotal: current })
    }
  }, [props.agePrice, props.sexPrice, props.nicotinePrice])

  return (
    <div className="flex flex-col gap-2 py-4" aria-live="polite">
      <div>
        <h3 className="text-neutral-500 font-bold text-sm">TOTAL</h3>
        <p className="text-blue-500 font-bold text-4xl">
          s/.
          <Animatedtotal
            totalBefore={total.previousTotal}
            totalAfter={total.currentTotal}
          />
          <span className="text-neutral-700 text-sm"> /mes </span>
        </p>
      </div>
      <p className="text-neutral-500 text-sm">
        *Este total es un costo estimado basado en las respuestas a este
        cuestionario. <br></br> El costo final puede variar.
      </p>
    </div>
  )
}

export default TotalContainer