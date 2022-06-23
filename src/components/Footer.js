import React from 'react'
import logo_small from '../assets/logo_small.png'
import opensea from '../assets/opensea.png'
import twitter from '../assets/twitter.svg'
import discord from '../assets/discord.svg'
import instagram from '../assets/instagram.png'
import logo_evdev from '../assets/logo_mail_small.png'

const Footer = () => {
  return (
<>
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
    <div>
        <a href='https://www.figma.com/proto/2UCIavg8otRVwnSMfphiFx/EVDEV?node-id=8%3A366&scaling=scale-down-width&page-id=0%3A1' className='evdev-section'>
          <p>developed by</p>
          <a href='https://www.figma.com/proto/2UCIavg8otRVwnSMfphiFx/EVDEV?node-id=8%3A366&scaling=scale-down-width&page-id=0%3A1'><img src={logo_evdev}/></a>
        </a>
    </div>
</>
  )
}

export default Footer