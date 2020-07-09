import React, { Fragment } from 'react'
import AboutUs from './AboutUs'
import banner from '../utils/img/AboutusBanner.svg';
// import '../assets/main.css';


const AboutPage = () => {
    return ( 
        <Fragment>
            <AboutUs pics={banner} />
        </Fragment>
     );
}
 
export default AboutPage;