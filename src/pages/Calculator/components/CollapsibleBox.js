import React from "react";
import { animated, useSpring } from "react-spring";
import { Transition } from "react-spring/renderprops";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from 'react';

function CollapsibleBox({ show, children }) {
  const props = useSpring({
    overflow: "hidden",
    height: show ? 'auto' : 0,
    opacity: show ? 1 : 0,
  })

  return (
    <animated.div style={props}>
      {children}
    </animated.div>
  )
}

export default CollapsibleBox;
