import React from 'react'
import write_us_img from '../assets/write_us_img.png'
const WriteUs = () => {
  return (
    <div className='write-us-section'>
        <img src={write_us_img}/>
        <a style={{textDecoration: 'none', color: 'black'}} href="mailto:hippiepigeons@gmail.com"><p>Have questions?<br/>Write us!</p></a>
    </div>
  )
}

export default WriteUs