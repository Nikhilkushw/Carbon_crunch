import React from 'react'
import "./extra_content.css"

const extra_content = () => {
  return (
    <div style={{width: "100%", height: "100%", backgroundColor: "black", display: "flex", justifyContent: "center"}}>
        <div className="div_content1">
        </div>
        <div className='div_content2'>
            <div className='div_content2_1'>
                <div className='div1'>
                    <h1>3X</h1>
                    <p>ESG high performers deliver a higher total shareholder return</p>
                </div>
                <div className='div2'>
                    <h1>98%</h1>
                    <p>Of CEOs agree sustainability is their responsibility</p>
                </div>
                <div className='div3'>
                    <h1>18%</h1>
                    <p>of companies are cutting emissions fast enough to reach net zero by 2050</p>
                </div>
                <div className='div4'>
                    <h1>37%</h1>
                    <p>of the world's largest companies have a public net zero target. Nearly all are off track</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default extra_content