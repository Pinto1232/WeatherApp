import React from 'react'
import './StyleUI.css'

const UI = (props: any) => {
  const classes = 'card ' + props.className;


  return (
    <div className={classes}>
        {props.children}
    </div>
  )
}

export default UI