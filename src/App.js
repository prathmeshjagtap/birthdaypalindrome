import React from "react";
import "./App.css";
import CheckPalindrome from "./CheckPalindrome";
import datepickerImage from "./images/date.jpg";
import Footer from "./Footer";
import initFontAwesome from "./initFontAwesome";
initFontAwesome();

function App() {
  return (
    <div>
      <div className="banner">
        <h1>Let's Check out if your Birthdate is Palidrome.</h1>
        <h3>
          A palindrome is a word/number which reads the same backward as forward
        </h3>
        <h4>For example 12022021</h4>
        <a className="button" href="#main">
          Let's Check
        </a>
        <img className="datepickerImage" alt="" src={datepickerImage} />
      </div>

      <div id="main" className="main">
        <h2>
          Enter your birthdate and we will tell you if your birthdate is a
          palindrome
        </h2>
        <p>
          This app checks your birthdate in 4 formats
          <i> yyyy-mm-dd, dd-mm-yyyy, mm-dd-yy, m-dd-yyyy .</i> <br /> Example
          if your birthdate is 01 March 2000, then app will check for 20000301,
          01032000, 030100, 1032000.
        </p>
        <CheckPalindrome />
      </div>
      <Footer />
    </div>
  );
}

export default App;
