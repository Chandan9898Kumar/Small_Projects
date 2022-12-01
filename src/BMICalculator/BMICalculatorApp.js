import React, { useState } from "react";
import "./index.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BMICalculatorAPPs = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Here we used Toast to show the messages.
  const HandleOnClick = (e) => {
    e.preventDefault();
    if (weight > 0 && height > 0) {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }

      toast.info("Please Reload the page...");
    } else {
      setMessage("Please type valid number");
      toast.warning("Invalid Number...", { autoClose: 1500 });
    }
  };

  const ReloadFunction = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  //     npm install --save react-toastify
  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={HandleOnClick}>
          <div>
            <label>Weight (lbs)</label>
            <input
              autoFocus
              disabled={message}
              required
              placeholder="Enter Weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>height (in)</label>
            <input
              autoFocus
              disabled={message}
              required
              placeholder="Enter Height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn btn1" type="submit" disabled={message}>
              Submit
            </button>
            <ToastContainer />
            <button
              className="btn btnGrey"
              type="submit"
              onClick={ReloadFunction}
            >
              Reload
            </button>
          </div>
        </form>
        <div className="center">
          <h3 className="center-style">Your BMI is: {bmi}</h3>
          <p>{message && message.length ? message : ""}</p>
          <br />
        </div>
      </div>
    </div>
  );
};
export default BMICalculatorAPPs;
