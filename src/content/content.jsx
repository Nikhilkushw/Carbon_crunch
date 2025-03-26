import React from 'react'
import "./content.css"
import hand_icon from "../assets/hand_icon.png"

const content = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "345px", gap: "11px"}}>
        <div className='content1'>
            <img style={{width: "34px", height: "34px", borderRadius: "46px"}} src={hand_icon} alt="hand_icon" />
            <p style={{fontSize: "14px", color: "#AFB0B6"}}>Let's Save our Environment</p>
        </div>
        <div className='content2'>
            <h4>Streamline Your Sustainability</h4>
            <h4>Reporting With <span style={{color: "#28B30E"}}>CARBON CRUNCH</span></h4>
            <p><span style={{color: "#28B30E"}}>95% </span>Accurate Carbon Calculations Trusted by Industry Leaders</p>
        </div>
        <div className='content3'>
            <button className='button1'>Free Calculator</button>
            <button className='button2'>Book Demo</button>
        </div>
    </div>
  )
}

export default content