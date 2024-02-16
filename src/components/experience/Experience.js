import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css'
import '../../assets/images/computer-icons-software-developer.png'
import Background1 from  '../../assets/images/computer-icons-software-developer.png';
import Background2 from '../../assets/images/Clipart-Email-9158026.png'
import WorkIcon from '@material-ui/icons/Work';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import CloudIcon from '@material-ui/icons/Cloud';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SchoolIcon from '@material-ui/icons/School';









export default function Experience(){
    return(
        <React.Fragment>
        {/* <br id="experience"/>
        <br/> */}
        <div className="main" id="experience" >
        
            <header></header>
            <div className="heading experience-heading">
            <h1 className="experience-title">Work Experience & Education</h1>
            </div>
        <VerticalTimeline className="timeline-classy" >
        <VerticalTimelineElement
                className="vertical-timeline-element--work "
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<CloudIcon />}
            >
                
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022 - 2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Binti</h4>
                <p>
                Optimize software infrastructure and development workflows, spearhead global expansion initiatives through innovative solutions, streamlined development processes while managing daily operations
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019 - 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Support Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Infosys</h4>
                <p>
                Collaborate with Dynamics 365 developers to identify, mitigate, and resolve Dynamics 365 and Office Product bugs
                </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2017 - 2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title"> Product Specialist</h3>
                <h4 className="vertical-timeline-element-subtitle">CornerStoneOnDemand</h4>
                <p>
                Provide functional and technical software application support to clients
                </p>
            </VerticalTimelineElement>
         
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2016 - 2017"
                iconStyle={{  background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title"> IT Technician</h3>
                <h4 className="vertical-timeline-element-subtitle">Mibura</h4>
                <p>
                Provided technical assistance and support for incoming queries and issues
related to computer systems, software, and hardware 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2016"
                iconStyle={{  background: 'rgb(33, 150, 243)', color: '#fff' }}
                
                // iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">General Assembly</h3>
                <h4 className="vertical-timeline-element-subtitle">Web Development Immersive</h4>
                
            </VerticalTimelineElement>
     
          
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2012"
                iconStyle={{ background: 'rgb(245,186,44)' , color: '#215C9E' }}
                
                // iconStyle={{ background: 'rgb(49,23,1)' , color: '#fff' }}
                // iconStyle={{ background: 'rgb(233, 30, 99)' , color: '#fff' }}
                // contentStyle={{"color": "#fff";}}
                contentStyle={{ "color": 'black'}}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">UCLA</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor of Science in Chemistry</h4>
                {/* <p>
                Creative Direction, Visual Design
                </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
            // rgb(49,23,1)
            iconStyle={{ background: 'rgb(33,92,158)', color: '#F5BA2C' }}
            // iconStyle={{ background: 'rgb(49,23,1)', color: '#fff' }}
                // iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<KeyboardArrowUpIcon />}
            />
        </VerticalTimeline>
       
        </div>
        </React.Fragment>
    )
}
