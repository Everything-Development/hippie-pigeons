import React from 'react'
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from '../assets/IMG_3677.PNG'
import image2 from '../assets/IMG_3678.PNG'
import image3 from '../assets/IMG_3679.PNG'
import image4 from '../assets/IMG_3680.JPG'
import image5 from '../assets/IMG_3681.PNG'
import image6 from '../assets/IMG_3682.PNG'

let collection_arr = [
  {
    'id': 1,
    'image': image1,
  },
  {
    'id': 2,
    'image': image2,
  },
  {
    'id': 3,
    'image': image3,
  },
  {
    'id': 4,
    'image': image4,
  },
  {
    'id': 5,
    'image': image5,
  },
  {
    'id': 6,
    'image': image6,
  },
]


const Guaranteed = () => {

  var settings = {
    cssEase: 'linear',
    arrows: true,
    draggable: true,
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplaySpeed: 1,
    autoplay: true,
    slidesPerRow: 1,
    centerMode: true,
    className: 'slider-container-guarantied',
    pauseOnHover: false,
  };
  var settings_mobile = {
    cssEase: 'linear',
    arrows: false,
    draggable: false,
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1,
    autoplay: true,
    slidesPerRow: 1,
    centerMode: true,
    className: 'slider-container-guarantied',
    pauseOnHover: false,
  };

  
  const CollectionSliderItemLeft = ({slide}) => {
    return (
      <img className='guarantied-slide-div' src={slide.image}/>

    )
  }


  return (
    <section className='guaranteed'>
      <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 60, y: 200 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0}}
          viewport={{ once: true }}
          >
          <h3>Guaranteed for Good</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 60, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0}}
          viewport={{ once: true }}
          >
            <p>This is the first social project in our ecosystem that will lay the foundation for the following projects aimed at helping people in different countries!  Next, a DAO will be created, where all our holders will be able to decide what the proceeds from the sale and NFT will go to.</p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 60 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0}}
            viewport={{ once: true }}
          >
            <div className='pcVersion'> 
              <Slider {...settings}>
              {collection_arr?.map((slide, index) => (
                  <CollectionSliderItemLeft key={index} slide={slide}/>
                ))}
              </Slider>
            </div>
            
            <div className='mobileVersion'> 
              <Slider {...settings_mobile}>
              {collection_arr?.map((slide, index) => (
                  <CollectionSliderItemLeft key={index} slide={slide}/>
                ))}
              </Slider>
            </div>
          </motion.div>


          <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 60, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0}}
          viewport={{ once: true }}
          >
            <p>Since many people in the Ukraine have lost their homes and are in desperate need of global support, we will dedicate our first NFT project “Hippie Pigeons” to find jobs for people from the Ukraine who have lost their livelihood and help their families!  </p>
          </motion.div>
    </section>
  )
}

export default Guaranteed