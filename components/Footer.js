import React from 'react'
import logo_small from '../assets/logo_small.png'
import opensea from '../assets/opensea.png'
import twitter from '../assets/twitter.svg'
import discord from '../assets/discord.svg'
import instagram from '../assets/instagram.png'


const Footer = () => {
  return (
    <footer>
        <p className='footer-copyright'>Hippie Pigeons Copyright 2022</p>
        <img className='logo-footer' src={logo_small}/>
        <div className='icon-links-footer'>
            <img src={opensea}/>
            <img src={twitter}/>
            <img src={instagram}/>
            <img src={discord}/>
        </div>
    </footer>
  )
}

export default Footer