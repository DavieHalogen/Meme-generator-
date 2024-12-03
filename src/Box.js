import React from 'react'

export default function Box(props) {
  const styles = {backgroundColor: props.on ? 'black' : 'transparent'}
  return(
     <div 
         className = 'box'
         style = {styles}
         onClick = {props.toggle}
     ></div>
    )
}
