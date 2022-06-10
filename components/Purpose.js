import React from 'react'
import { motion } from "framer-motion";
import purpose_img from '../assets/purpose_img.png'

const Purpose = () => {
  return (
    <section className='purpose-section'>
        <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -60 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0}}
            viewport={{ once: true }}
            className='purpose-text'
            >
            <h3>Our Purpose</h3>
            <div className='mobileVersion'>
              <motion.img
              initial={{ opacity: 0, scale: 0, rotate: 60, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0}}
              viewport={{ once: true }}
              className='purpose-photo'
              src={purpose_img}
              ></motion.img>
            </div>
            
            <p>The idea of donating 30% of sales is a way of reflecting the spirit of unity with Ukraine and saying thank you to those who already helped! 
<br/>
<br/>

With the help of a blockchain technology and NFT, we can change the world for the better! With this first project, we want to utilize new technology to help those in need. 
<br/>
<br/>

Our Pigeons, the same as many years ago are gonna bring the peace, knowledge and chill vibes to our NFT community! </p>
        </motion.div>
        <div className='pcVersion'>
          <motion.img
              src={purpose_img}
              initial={{ opacity: 0, scale: 0, rotate: 60, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0}}
              viewport={{ once: true }}
              className='purpose-photo'
              >
          </motion.img>
        </div>

    </section>
  )
}

export default Purpose