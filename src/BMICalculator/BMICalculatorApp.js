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

    //                             Here we used Promise.

    // The promise constructor accepts a callback function that typically performs an asynchronous
    //  operation. This function is often referred to as an executor.

    // In turn, the executor accepts two callback functions with the name resolve and reject.

    //                            Note :
    //   the callback functions passed into the executor are resolve and reject by convention only.

    // If the asynchronous operation completes successfully, the executor will call the resolve() function
    // to change the state of the promise from pending to fulfilled with a value.

    // In case of an error, the executor will call the reject() function to change
    //  the state of the promise from pending to rejected with the error reason.

    return new Promise((resolve, reject) => {
      if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)) * 703;
        resolve(setBmi(bmi.toFixed(1)));
        if (bmi < 25) {
          resolve(setMessage("You are underweight"));
        } else if (bmi >= 25 && bmi < 30) {
          resolve(setMessage("You are a healthy weight"));
        } else {
          resolve(setMessage("You are overweight"));
        }
        toast.info("Please Reload the page...");
      } else {
        reject(
          setMessage("Please type valid number"),
          toast.warning(
            "Invalid number,Please reload the page and type valid number",
            { autoClose: 1500 }
          )
        );
      }
    });

    //           Or We can use Like this as well

    // if (weight > 0 && height > 0) {
    //   let bmi = (weight / (height * height)) * 703;
    //   setBmi(bmi.toFixed(1));
    //   if (bmi < 25) {
    //     setMessage("You are underweight");
    //   } else if (bmi >= 25 && bmi < 30) {
    //     setMessage("You are a healthy weight");
    //   } else {
    //     setMessage("You are overweight");
    //   }

    //   toast.info("Please Reload the page...");
    // } else {
    //   setMessage("Please type valid number");
    //   toast.warning("Invalid Number...", { autoClose: 1500 });
    // }
    
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
