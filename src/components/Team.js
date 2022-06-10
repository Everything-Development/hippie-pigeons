import React from 'react'
import { motion } from "framer-motion";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ivan_solomatin from '../assets/ivan_solomatin.jpg'
import natalitta from '../assets/natalitta.jpg'
import seva_vsevolod1 from '../assets/seva_vsevolod1.jpg'
import stas_tyrnavskyi from '../assets/stas_tyrnavskyi.jpg'
import viktoria_lubimaya from '../assets/viktoria_lubimaya.jpg'
import evgeniy_weissberg from '../assets/evgeniy_weissberg.jpg'
import denis_krava from '../assets/denis_krava.jpg'
import bilemo from '../assets/bilemo.jpg'



let team_arr = [
  {
    'image': stas_tyrnavskyi,
    'name': 'Stas Tyrnavskyi',
    'description': 'FOUNDER'
  },
  {
    'image': natalitta,
    'name': 'Natalitta',
    'description': 'DESIGNER'
  },
  {
    'image': evgeniy_weissberg,
    'name': 'Evgeniy Weissberg',
    'description': 'DESIGNER'
  },
  {
    'image': viktoria_lubimaya,
    'name': 'Viktoria Lubimaya',
    'description': 'VOLUNTEER'
  },
  {
    'image': denis_krava,
    'name': 'Denis Krava',
    'description': 'MARKETING'
  },
  {
    'image': ivan_solomatin,
    'name': 'Ivan Solomatin',
    'description': 'SOCIAL MEDIA MARKETING'
  },
  {
    'image': seva_vsevolod1,
    'name': 'Seva Vsevolod',
    'description': 'SOCIAL MEDIA MARKETING'
  },
  {
    'image': bilemo,
    'name': 'Biliemo',
    'description': 'ADVISOR'
  }
]

const TeamItem = ({team_item}) => {
  return (
    <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -60, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0}}
          viewport={{ once: true }}
          className='team-item'
          >
        <img src={team_item.image} className='team-item-img'/>
        <h4>{team_item.name}</h4>
        <p>{team_item.description}</p>
    </motion.div>
  )
}


const Team = () => {
  return (
    <section className='team-section'>
        <h3>Meet the Team</h3>
        <div className='team-block'>
          {team_arr?.map((team_item, index) => (
            <TeamItem key={index} team_item={team_item}/>
          ))}
        </div>
    </section>
  )
}

export default Team