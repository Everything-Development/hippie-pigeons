import React, {useState, useEffect} from 'react'
import logo_small from '../assets/logo_small.png'
import opensea from '../assets/opensea.png'
import twitter from '../assets/twitter.svg'
import discord from '../assets/discord.svg'
import instagram from '../assets/instagram.png'
import burger_menu from '../assets/burger_menu.png'
import close from '../assets/close.svg'
import { motion } from "framer-motion";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import go_top from '../assets/go_top.png'
import menu_photo from '../assets/menu_photo.png'

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}




const Header = () => {
let [burger, setBurger] = useState([<img src={burger_menu}/>])
let [menuTextStyles, setMenuTextStyles] = useState([])
let [menuOpened, setMenuOpened] = useState(false)

const scrollToElement = (element_name) => {
    openMenu()
    scroller.scrollTo(element_name, {
      duration: 800,
      smooth: true,
    })
  }

  const scrollToTop = (element_name) => {
    scroller.scrollTo(element_name, {
      duration: 800,
      smooth: true,
    })
  }

const openMenu = async () => {
    if (!menuOpened){
        setMenuTextStyles({'opacity': 0, 'margin-top': '-10px'})
    } else {
        setMenuTextStyles({'opacity': 1, 'margin-top': '0px'})
    }
    setBurger([
        <motion.div
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: 360, scale: 0.2 }}
            transition={{
                default: { duration: 0.5 },
              }}
            >
            {menuOpened ? 
                <img src={close}/>  
                :
                <img src={burger_menu}/>
            }
        </motion.div>
    ])
    await sleep(500)
    setBurger([
        <motion.div
            initial={{ rotate: 360, scale: 0.2 }}
            animate={{ rotate: 720, scale: 1 }}
            >
             {menuOpened ? 
                <img src={burger_menu}/>  
                :
                <img src={close}/>
            }
        </motion.div>
    ])
    setMenuOpened(!menuOpened)

}

  return (
      <>
      <div className='header-overflow'><div className='header-filter'></div></div>
    <header>
        <div className="header-div">
            <div className='header-no-blur'>
                <div className='logo-section-header' onClick={() => scrollToTop("headerElement")}>
                    <img src={logo_small}/>
                    <p>Hippie Pigeons</p>
                </div>
                <div className='links-section-header'>
                    <div className='icon-links-header'>
                        <img alt='opensea' src={opensea}/>
                        <img alt='twitter' src={twitter}/>
                        <img alt='instagram' src={instagram}/>
                        <img alt='discord' src={discord}/>
                    </div>
                    <div className='header-open-menu' onClick={openMenu}>
                        {burger}
                        <p style={menuTextStyles}>MENU</p>
                    </div>
                </div>
            </div>
            <div className='blur-block'>
                
            </div>
            
        </div>
       
    </header>

    <div className='go-top-button' onClick={() => scrollToTop('headerElement')}><img src={go_top}/></div>

    { menuOpened ?
        <div>
            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            className='menu-opened'
            >
            </motion.div>
            <motion.div
            initial={{ opacity: 0, rotate: 20}}
            animate={{ opacity: 1, rotate: 0}} 
            className='menu-content'>
                <div className='menu-content-links'>
                    <div className='navigation-links-group'>
                        <h4 onClick={() => scrollToElement('collectionElement')}>Collection</h4>
                        <h4 onClick={() => scrollToElement('roadmapElement')}>Roadmap</h4>
                        <h4 onClick={() => scrollToElement('teamElement')}>Team</h4>
                        <h4 onClick={() => scrollToElement('contractElement')}>Contract</h4>
                        <h4 onClick={() => scrollToElement('profileElement')}>Profile</h4>
                    </div>
                </div>
                <div className='menu-content-mint'>
                    <div className='pigeon-mint-block'>
                        <img className='pigeon-mint-image' src={menu_photo}/>
                        <div className='pigeon-mint-button'><p>MINT A PIGEON</p></div>

                    </div>
                </div>
                <div className='menu-content-socials'>
                    <div className='socials-block'>
                        <img src={opensea}/>
                        <img src={twitter}/>
                        <img src={instagram}/>
                        <img src={discord}/>
                    </div>
                </div>
            </motion.div>
        </div>
    :
        <motion.div
        initial={{ opacity: 1, height: '0%' }}
        animate={{ opacity: 0, height: '0%' }}
        className='menu-opened'
        >
        </motion.div>
    }
    </>
  )
}

export default Header