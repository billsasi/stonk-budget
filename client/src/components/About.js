import React from 'react';
import '../App.css';
import { NavBar } from '../Utils';

const About = () => {
  return (
    <div className="container">
      <NavBar />
      <div>
        <p>
          The Stonk Budget web app is a personal tool with one goal: to make
          budgeting simple. To meet this goal, Stonk Budget is loaded with
          features which allow users to closely track their expenses and plan
          their monthly budget. Stonk Budget is also as an assistant for stock
          reccomendation to help introduce those who are new to stock trading.
        </p>

        <h2>
          <span>&#9888;</span> Disclaimer
        </h2>
        <p>
          The stock recommendation feature is still in developement and should
          be used at the user's discretion. We are not responsible for any
          monetary loss you may have with your experience in using this feature.
        </p>
      </div>
    </div>
  );
};

export default About;
