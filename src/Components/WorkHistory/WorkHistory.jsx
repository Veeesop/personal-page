import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import {GiFarmTractor, GiHammerNails} from 'react-icons/gi'
import { IoIosBrush } from 'react-icons/io'
import './WorkHistory.css'

export default function WorkTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize: 'x-large' }}
          align="right"
          variant="body1"
          color="text.secondary"
        >
          Aloha Farms
          <Typography sx={{fontStyle: 'italic'}}>
            September 2020 - December 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: 'green'}}>
            <GiFarmTractor size='25px'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Orchard Manager
          </Typography>
            <ul>
              <li>
                Managing harvest and workers
              </li>
              <li>
                Transporting avocados to various farmers markets around the Big Island
              </li>
              <li>
                Moved to Hawaii during the pandemic and learned organic farming techniques
              </li>
              <li>
                Learning new skills comes easy for me although it is much easier on a tropical island
              </li>
            </ul>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize: 'x-large' }}
          align="right"
          variant="body1"
          color="text.secondary"
        >
          SignMinds
          <Typography sx={{fontStyle: 'italic'}}>
          May 2016 - April 2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{bgcolor: 'darkred'}}>
            <GiHammerNails size='25px'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Night shift lead fabricator
          </Typography>
            <ul className='opposite-ul'>
              <li>
                Reading and understanding product schematics and assembly instructions
              </li>
              <li>
                Communicating with the engineers to verify dimensions and product specifications
              </li>
              <li>
                Delegation of tasks to the other fabricators in the shop
              </li>
              <li>
                Checking the final product details and packaging for installation 
              </li>
            </ul>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize: 'x-large' }}
          align="right"
          variant="body1"
          color="text.secondary"
        >
          SignMinds
          <Typography sx={{fontStyle: 'italic'}}>
          May 2014 - May 2016
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: 'darkred'}}>
            <GiHammerNails size='25px'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Assistant Fabricator
          </Typography>
            <ul>
              <li>
                Assisted the lead fabricator building large scale commercial signage
              </li>
              <li>
              Ensuring that all required parts for assembly are present
              </li>
              <li>
              Responsible for forklift operation and safety during material unloading and during delivery of the final product
              </li>
            </ul>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize: 'x-large' }}
          align="right"
          variant="body1"
          color="text.secondary"
        >
            James Breener
          <Typography sx={{fontStyle: 'italic'}}>
            November 2012 - May 2014
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: 'purple'}}>
            <IoIosBrush size='25px'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Production Assistant
          </Typography>
            <ul className='opposite-ul'>
              <li>
                Adapted frequently to various locations, roles and responsibilities
              </li>
              <li>
                Responsible for assisting the lead fabricator and shop maintenance 
              </li>
              <li>
              Multitasking was paramount in this role, as was keeping pace to complete projects on time.
              </li>
            </ul>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export const WorkHistory = () => {
    return (
        <div className='work-history-display'>
            <div className='work-history-title'>
                <Typography sx={{ fontSize: 40, m:5 }} color="text.secondary" gutterBottom>
                    Work History
                </Typography>
            </div>
            <div className='work-history-timeline'>
                <WorkTimeline/>
            </div>
        </div>
        
    )
}

export const JobCard = () => {
    return (
        <h3>Job</h3>
    )
}