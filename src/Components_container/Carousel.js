import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SearchField from './SearchField';
import './Carousel.css'




let ControlledCarousel = () =>{
   
    return <Carousel>
       
        <Carousel.Item>
            <img
            className="w-100 d-block"
            src="https://res.cloudinary.com/undercover/image/upload/v1584886568/RecreationalApp/Carousel1_wixuu7.png"
            alt="First slide" height='400'
            />
            <Carousel.Caption >
            <p  className="f1-l pa1-l animated fadeInDown" style={{animationDelay: "1s"}}>Wanna Have Fun?</p>
            <p  className="f4-l pa1-l animated slideInLeft" style={{animationDelay: "2s"}}>why not check out popular recreation centres near you</p>
            <SearchField id="1"/>
            </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="w-100 d-block"
            src="https://res.cloudinary.com/undercover/image/upload/v1584886575/RecreationalApp/Carousel2_tiazgv.png"
            alt="Third slide" height='400'
            />

            <Carousel.Caption>
            <h3  className="f1-l pa1-l animated bounceIn" style={{animationDelay: "1s"}}>Take a deep breath, and just enjoy your life</h3>
            <p  className="f4-l pa1-l animated slideInRight" style={{animationDelay: "2s"}}>why not check out popular recreation centres near you</p>
            <SearchField  />
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img style = {{backgroundRepeat:'no-repeat' }}
            className="w-100"
            src="https://res.cloudinary.com/undercover/image/upload/v1584886581/RecreationalApp/Carousel3_qez93u.png"
            alt="Third slide" height='400'
            />

            <Carousel.Caption>
            <h3  className="f1-l pa1-l animated zoomIn" style={{animationDelay: "1s"}}>Check into another plane of existence !!!</h3>
            <p  className="f4-l pa1-l animated slideInLeft" style={{animationDelay: "2s"}}>Thankfully, we've got you covered. Keep scrolling for fun and effortless places to relax .</p>
            <SearchField id="3"/>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}
  export default ControlledCarousel;