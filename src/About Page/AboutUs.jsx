import React, { Fragment } from "react";
import TeamCard from "../Components_container/TeamCard";

const AboutUs = ({ pics }) => {
  return (
    <Fragment>
      <div className="">
        <div className="container-fluid mb-4 h-15 ">
          <img
            className="img-responsive"
            src={pics}
            alt="aboutBanner"
          />
        </div>
        <div className="mt-5 py-3 container">
          <p className="mt-2 text-gray-600">
            Are you bored and need fun places to go? Did you have a stressful
            week and need a cool spot to relax and unwind? You've come to the
            right place!
          </p>
          <p className="mt-2 text-gray-600">
            This handy web app was created to make this task smooth, with a
            large collection of recreation centres to choose from and costumer
            reviews to quickly make informed decisions, you can get right into
            relaxing and having a great time.
          </p>
          <p className="mt-2 text-gray-600">
            So go right ahead! Search through our collection of amazing places
            to find cool spots near you!
          </p>
          <TeamCard/>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
