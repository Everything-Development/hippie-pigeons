import React from 'react'
import pigeon_nowar from '../assets/pigeon_nowar.png'
import o_image from '../assets/o_image.png'
import arrow_anchor from '../assets/arrow-anchor.svg'
import mobile_image from '../assets/IMG_3793.PNG'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { motion } from "framer-motion";


const scrollToElement = () => {
  scroller.scrollTo('collectionElement', {
    duration: 800,
    smooth: true,
  })
}


const TopSection = () => {
  return (
    <section className='top-section'>
        <div className='top-section-flex'>
            <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -60 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0}}
                    viewport={{ once: true }}
                    >
                <img className='top-section-main-image' src={pigeon_nowar}/>
            </motion.div>
            <div className='top-section-main-text'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className='top-section-head-text'
                    >
                        <p>HIPPIE</p>
                        <div className='top-section-pigeimgns'>
                            <p>PIGE</p><img className='o-image' src={o_image}/><p>NS</p>
                        </div>      
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 400 }}
                    whileInView={{ opacity: 1, x: 0}}
                    viewport={{ once: true }}
                    >
                    <p className='top-sectino-sub-text'>Peace, Love, and NFTs</p>
                </motion.div>
            </div>
                <div className="mobileVersion">
                <motion.img
                className='mobile-main-image' src={mobile_image}
                initial={{ opacity: 0, x: 50, rotate: 40 }}
                whileInView={{ opacity: 1, x:0, rotate: 0 }}
                viewport={{ once: true }}
                >

                </motion.img>
                  <motion.div
                      initial={{ opacity: 0, x: 50, rotate: -40 }}
                      whileInView={{ opacity: 1, x:0, rotate: 0 }}
                      viewport={{ once: true }}
                      >
                      <p className='top-sectino-sub-text' style={{fontSize: '24px', marginTop: '50px'}}>Peace, Love, and NFTs</p>
                      <div className='mint-now-mobile'>
                          <p>MINT NOW</p>
                      </div>
                  </motion.div>
                </div>
                
            {/* </motion.div> */}
        </div>
        <div className='arrow-anchor-section'>
          <div onClick={scrollToElement} className='arrow-anchor'>
              <img src={arrow_anchor}/>
          </div>
        </div>
        
    </section>
  )
}

export default TopSection