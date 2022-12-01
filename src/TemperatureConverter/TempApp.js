import React, { useState } from "react";
import "./styles.css";
const TemperatureApp = () => {
  const [celciusValue, setCelciusValue] = useState('');
  const [FahenValue, setFahrenValue] = useState('');

  const ChangeCelcius = (e) => {
    if (e.target.value === "") {
      setCelciusValue("");
      setFahrenValue("");
    } else {
      setCelciusValue(e.target.value);
      let result1 = parseFloat((e.target.value * 9) / 5 + 32).toFixed(3);
      setFahrenValue(result1);
    }
  };

  const ChangeFahren = (e) => {
    if (e.target.value === "") {
      setCelciusValue("");
      setFahrenValue("");
    } else {
      setFahrenValue(e.target.value);
      //  To get only three values after decimal.
      // 👇️ if the value is a string.
      // call parseFloat to convert it to a number first.
      let result2 = parseFloat(((e.target.value - 32) * 5) / 9).toFixed(3);
      setCelciusValue(result2);
    }
  };

  return (
    <>
      <div className="TemppWrapper">
        <label>Temperature App</label>
        <div style={{ marginTop: "80px" }}>
          <label>Celsius </label>
          <input
            style={{
              marginRight: "0px",
              marginLeft: "20px",
              height: "30px",
              borderRadius: "10px",
            }}
            placeholder="Type Value"
            type="number"
            value={celciusValue}
            onChange={(e) => ChangeCelcius(e)}
          />
          <br />
          <br />

          <label>Fahrenheit </label>
          <input
            placeholder="Type Value"
            style={{ height: "30px", borderRadius: "10px" }}
            type="number"
            value={FahenValue}
            onChange={(e) => ChangeFahren(e)}
          />
        </div>
      </div>
    </>
  );
};
export default TemperatureApp;
