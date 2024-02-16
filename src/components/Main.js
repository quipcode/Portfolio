import React from 'react';
import Header from './header/Header'
import Skills from './skills/Skills'
import Projects from './projects/Projects'
import Experience from './experience/Experience'
import Social from './social/Social'
import Greeting from './greeting/Greeting'
import Footer from './footer/Footer'
import Top from './sections/topbutton/Top'



export default function Main(){
    return (
        <React.Fragment>
            <Header  />
            <Greeting/>
            <Skills/>
            {/* <Projects/> */}
            <Experience/>
            <Footer/>
            <Social/>
            <Top/>
            <Header/>
        </React.Fragment>
    )
}