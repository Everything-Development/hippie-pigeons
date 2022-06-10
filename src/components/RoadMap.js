import { motion } from "framer-motion";
import flower from '../assets/o.png'
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';


import TimelineItemAnimated from '../components/TimelineItemAnimation'
import TimelineItemAnimatedMobile from '../components/TimelineItemAnimationMobile'



let roadmap_arr = [
    {
        'icon': 'circle',
        'type': 'right',
        'title': 'Mint',
        'text': 'Amount: A collection of 5,555<br/>Hippie Pigeon NFTs<br/>To reward members for helping the project grow and prosper our community, the whitelist mint price will be lower than the public mint price.'
    },
    {
        'icon': 'flower',
        'type': 'left',
        'title': 'Sharing is caring',
        'text': 'When we say we are serious about our community, we mean it. As a part of our roadmap, we’ll donate 30% of our sales to the Ukrainian people who suffered in the recent conflict and took losses in the war. '
    },
    {
        'icon': 'flower',
        'type': 'right',
        'title': 'Keeping a record',
        'text': 'We are doing thorough research on how to donate money safely. We are going to check the charitys name and registration number on the government&apos;s website, their transfer history, list of their founders, etc. <br/>Holders will receive daily reports (photo/video) on how the donated money is spent.'
    },
    {
        'icon': 'flower',
        'type': 'left',
        'title': 'Merch',
        'text': 'Our team will be working with multiple designers and quality clothing manufactures to create a unique limited line of Hippie Pigeons merchandise exclusive for our holders!<br/>Merch shop opening'
    },
    {
        'icon': 'flower',
        'type': 'right',
        'title': 'Community Fund',
        'text': 'A community fund allows us to continue to be community-led and focused. This fund will be used to execute our Roadmap and other community led initiatives (such as donating to people in need) and will be further funded with next projects sales.'
    },
    {
        'icon': 'circle',
        'type': 'left',
        'title': 'Join our Discord <br/>to see more!',
        'text': ''
    },
]


const RoadMap = () => {
  return (
    <section className='section-roadmap'>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 60, y: 200 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0}}
          viewport={{ once: true }}
          >
          <h3>Roadmap</h3>
        </motion.div>
        <div className="pcVersion">
            <Timeline position="alternate">
                {roadmap_arr?.map((element, index) => (
                    <TimelineItemAnimated key={index} element={element}/>
                ))}
            </Timeline>
        </div>
        <div className="mobileVersion">
            <Timeline position="right">
                {roadmap_arr?.map((element, index) => (
                    <TimelineItemAnimatedMobile key={index} element={element}/>
                ))}
            </Timeline>
        </div>
        
    </section>
  )
}

export default RoadMap