import React, { useState } from "react";
import "./App.css";
import loadimg from "./images/giphy.webp";

function CheckPalindrome() {
  const [date, setdate] = useState("");
  const [output, setoutput] = useState("");
  const datesInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let newoutput = "";
  const Check = (e) => {
    e.preventDefault();
    if (!date) {
      setoutput(<p>Please fill date field</p>);
    } else {
      setoutput(<img alt="" style={{ marginTop: "2rem" }} src={loadimg}></img>);
      setTimeout(() => {
        const dateArray = date.split("-");
        const Year = dateArray[0];
        const Month = dateArray[1];
        const Date = dateArray[2];
        let setFlag = Combinations(Year, Month, Date);
        if (setFlag) {
          newoutput = `Whoa!!! Your birthdate in format ${setFlag} is palindrome`;
        } else {
          let [nextdate, difference] = findNextDate(Date, Month, Year);
          newoutput = `Awww! Your birthdate is not palindrome. Nearest palindrome date is ${nextdate} You missed it by ${difference} days.`;
        }
        setoutput(<p>{newoutput}</p>);
      }, 4000);
    }
  };

  function Combinations(yyyy, mm, dd) {
    const dateFormat1 = yyyy + mm + dd;
    const dateFormat2 = dd + mm + yyyy;
    const dateFormat3 = mm + dd + yyyy.substring(2);
    const dateFormat4 = Number(mm) + dd + yyyy;

    if (validatePalindrome(dateFormat1)) {
      return `${yyyy}-${mm}-${dd}`;
    } else if (validatePalindrome(dateFormat2)) {
      return `${dd}-${mm}-${yyyy}`;
    } else if (validatePalindrome(dateFormat3)) {
      return `${mm}-${dd}-${yyyy.substring(2)}`;
    } else if (validatePalindrome(dateFormat4)) {
      return `${Number(mm)}-${dd}-${yyyy}`;
    } else {
      return null;
    }
  }

  function validatePalindrome(date) {
    const len = date.length;
    for (let i = 0; i < len / 2; i++) {
      if (date[i] !== date[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  function findNextDate(date, month, year) {
    let dayForward = Number(date);
    let monthForward = Number(month);
    let yearForward = Number(year);
    let dateBackward = Number(date);
    let monthBackward = Number(month);
    let yearBackward = Number(year);

    for (let i = 1; i > 0; i++) {
      dayForward = dayForward + 1;
      if (dayForward > Number(datesInMonth[monthForward - 1])) {
        dayForward = 1;
        monthForward = monthForward + 1;
        if (monthForward > 12) {
          monthForward = 1;
          yearForward = yearForward + 1;
        }
      }
      let yearString = yearForward.toString();
      let monthString = monthForward.toString();
      let dayString = dayForward.toString();
      if (monthString.length === 1) {
        monthString = "0" + monthString;
      }
      if (dayString.length === 1) {
        dayString = "0" + dayString;
      }
      let setFlagNextDate = Combinations(yearString, monthString, dayString);
      if (setFlagNextDate) {
        return [`${setFlagNextDate}`, i];
      }

      //backward check
      if (yearBackward > 1) {
        dateBackward = dateBackward - 1;
        if (dateBackward < 1) {
          monthBackward = monthBackward - 1;
          if (monthBackward < 1) {
            monthBackward = 12;
            yearBackward = yearBackward - 1;
            if (yearBackward < 1) {
              break;
            }
          }
          dateBackward = datesInMonth[monthBackward - 1];
        }
        let yearString = yearBackward.toString();
        let monthString = monthBackward.toString();
        let dayString = dateBackward.toString();
        if (monthString.length === 1) {
          monthString = "0" + monthString;
        }
        if (dayString.length === 1) {
          dayString = "0" + dayString;
        }
        let setFlagNextDate = Combinations(yearString, monthString, dayString);
        if (setFlagNextDate) {
          return [`${setFlagNextDate}`, i];
        }
      }
    }
  }

  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={(e) => setdate(e.target.value)}
      />
      <button onClick={Check}>Check</button>
      <h2 style={{ color: "red" }}>{output}</h2>
    </div>
  );
}

export default CheckPalindrome;
