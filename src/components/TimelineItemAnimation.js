import { motion } from "framer-motion";
import flower from '../assets/o.png'
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { makeStyles } from '@mui/styles';


const TimelineItemAnimated = ({element}) => {


  return (
          <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector sx={{background: 'black', width: '4px'}}/>
                    {element.icon == 'flower' ?
                        <img className='roadmap-checkpoint' src={flower}/> 
                        :
                        <div className='circle-roadmap'></div>
                    }
                <TimelineConnector sx={{background: 'black', width: '4px'}}/>
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2}}>
                <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 60, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0}}
                viewport={{ once: true }}
                className={`roadmap-elem-${element.type}`}
                >
                    <h2 dangerouslySetInnerHTML={{ __html: element.title }} />
                    <p dangerouslySetInnerHTML={{ __html: element.text }} />
                </motion.div>
            </TimelineContent>
        </TimelineItem>
    
  )
}

export default TimelineItemAnimated