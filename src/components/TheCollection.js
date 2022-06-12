import React from 'react'
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import nft_1 from '../assets/12_nft.JPG'
import nft_2 from '../assets/2_nft.JPG'
import nft_3 from '../assets/7_nft.JPG'
import nft_4 from '../assets/16_nft.png'
import nft_5 from '../assets/5_nft.JPG'
import nft_6 from '../assets/6_nft.JPG'
import nft_7 from '../assets/3_nft.JPG'
import nft_8 from '../assets/8_nft.JPG'
import nft_9 from '../assets/9_nft.JPG'
import nft_10 from '../assets/15_nft.JPG'
import nft_11 from '../assets/11_nft.JPG'
import nft_12 from '../assets/1_nft.jpg'
import nft_14 from '../assets/14_nft.JPG'
import nft_15 from '../assets/10_nft.JPG'
import nft_16 from '../assets/16_nft.png'







const TheCollection = () => {
  var settings_right_left = {
    cssEase: 'linear',
    arrows: false,
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 1,
    autoplay: true,
    slidesPerRow: 1,
    centerMode: true,
    className: 'slider-container-collection',
    pauseOnHover: false,
    draggable: false,
    swipe: false,


  };
  var settings_left_right = {
    cssEase: 'linear',
    arrows: false,
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 1,
    autoplay: true,
    slidesPerRow: 1,
    centerMode: true,
    className: 'slider-container-collection',
    pauseOnHover: false,
    draggable: false,
    rtl: true,
    swipe: false,

  };


  var settings_right_left_mobile = {
    cssEase: 'linear',
    arrows: false,
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow:2,
    slidesToScroll: 2,
    autoplaySpeed: 1,
    autoplay: true,
    slidesPerRow: 1,
    centerMode: true,
    className: 'slider-container-collection',
    draggable: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
  };
  var settings_left_right_mobile = {
    cssEase: 'linear',
    arrows: false,
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplaySpeed: 1,
    autoplay: true,
    slidesPerRow: 1,
    centerMode: true,
    className: 'slider-container-collection',
    draggable: false,
    pauseOnHover: false,
    rtl: true,
    touchMove: false,
    swipe: false,

  };

  let collection_arr = [
    {
      'id': 1,
      'image': nft_1,
    },
    {
      'id': 2,
      'image': nft_2,
    },
    {
      'id': 3,
      'image': nft_3,
    },
    {
      'id': 4,
      'image': nft_8,
    },
    {
      'id': 5,
      'image': nft_5,
    },
    {
      'id': 6,
      'image': nft_6,
    },
    {
      'id': 7,
      'image': nft_7,
    },
    {
      'id': 8,
      'image': nft_4,
    },
  ]
  let collection_arr_2 = [
    {
      'id': 9,
      'image': nft_9,
    },
    {
      'id': 10,
      'image': nft_10,
    },
    {
      'id': 11,
      'image': nft_11,
    },
    {
      'id': 12,
      'image': nft_12,
    },
    {
      'id': 14,
      'image': nft_14,
    },
    {
      'id': 15,
      'image': nft_15,
    },
  ]


  const CollectionSliderItemLeft = ({slide}) => {
    return (
      <img alt="collection part" src={slide.image} className='collection-slide-div'/>
    )
  }

  const TextDiv = () => {
    return (
      <>
      <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -60, x: -100 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0}}
          viewport={{ once: true }}
          >
          <h3>The Collection</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -60, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0}}
          viewport={{ once: true }}
          >
          <p>The 5555 collection of “Hippie Pigeons” NFTs is an automatically generated collection, each Pigeon is digitally drawn and hand-assembled by our designers.</p>
        </motion.div>     
      </>
    )
  }

  return (
    
    <section className='collection-section'>
        <TextDiv/>
      

        <div className='pcVersion'>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -60 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0}}
              viewport={{ once: true }}
              >
                <Slider {...settings_right_left}>
                {collection_arr?.map((slide, index) => (
                    <CollectionSliderItemLeft key={index} slide={slide}/>
                  ))}
                </Slider>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 60 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0}}
              viewport={{ once: true }}
              >
                <Slider {...settings_left_right}>
                {collection_arr_2?.map((slide, index) => (
                    <CollectionSliderItemLeft key={index} slide={slide}/>
                  ))}
                </Slider>
            </motion.div>
         </div>


      <div className='mobileVersion'>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -60 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0}}
          viewport={{ once: true }}
          >
            <Slider {...settings_right_left_mobile}>
            {collection_arr?.map((slide, index) => (
                <CollectionSliderItemLeft key={index} slide={slide}/>
              ))}
            </Slider>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 60 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0}}
          viewport={{ once: true }}
          >
            <Slider {...settings_left_right_mobile}>
            {collection_arr_2?.map((slide, index) => (
                <CollectionSliderItemLeft key={index} slide={slide}/>
              ))}
            </Slider>
        </motion.div>
      </div>

        
    </section>
  )
}

export default TheCollection