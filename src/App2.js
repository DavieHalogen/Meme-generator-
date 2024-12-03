
import Box from './Box';
import React from "react"
import './style2.css'
import boxes from './boxes.js'


export default function App2() {
  const [squares, setSquares] = React.useState(boxes)
  
  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return (
    square.id === id ? {...square, on: !square.on} : square
    )
    
      })
    })
    
  }
  
  const squareElements = squares.map(square => {
    return <Box
            key = {square.id}
            on = {square.on}
            toggle = {()=> toggle(square.id)}
       />
  })
  return(
    <main>
        {squareElements}
    </main>
    )
}
