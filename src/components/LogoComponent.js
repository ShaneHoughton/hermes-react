import React from 'react'


export default function LogoComponent({
  size = 18, // or any default size of your choice
  color = "white" // or any color of your choice
}) {
  return (
    <div className='logo'>
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height="127" viewBox="0 0 399 127">
    <text id="Hermes" transform="translate(0 102)" fill={color} fontSize="110" fontFamily="HossRound-RegularItalic, Hoss Round" fontStyle="italic"><tspan x="0" y="0">Hermes</tspan></text>
    </svg>
    {/* <h6 className='hermes-desc'>A Cross Country/Track Athlete lookup tool</h6> */}
    </div>
  )
}