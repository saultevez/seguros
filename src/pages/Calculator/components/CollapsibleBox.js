import React from "react"
import "../../../App.css"
import { useSpring, animated } from "react-spring"
import { Transition } from "react-spring/renderprops"
import { useMediaQuery } from "react-responsive"
import { useState, useEffect } from 'react'

function CollapsibleBox({show, children}) {
  return (
    <Transition items={show} from={{ height: 0, overflow: "hidden" }} enter={{ height: 170 }} leave={{ height: 0 }}>
      {(show) =>
        show &&
        ((props) => (
          <div className='no-float' style={props}>
            {children}
          </div>
        ))
      }
    </Transition>
  )
}


export default CollapsibleBox
