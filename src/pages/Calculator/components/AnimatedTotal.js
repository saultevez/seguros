import React from "react"
import "../../../App.css"
import { useSpring, animated } from "react-spring"


function Animatedtotal(props) {
  const animateProps = useSpring({ config: { duration: 530 }, number: props.totalAfter, from: { number: props.totalBefore } })
  return (
    <animated.span className='total-font'>
      {animateProps.number.interpolate((number) => number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","))}
    </animated.span>
  )
}

export default Animatedtotal
