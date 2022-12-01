import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Header = lazy(() => import("./NavLink/Header"));
const TemperatureApp = lazy(() => import("./TemperatureConverter/TempApp"));
const BMICalculatorAPPs = lazy(() =>
  import("./BMICalculator/BMICalculatorApp")
);
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Suspense fallback={<div className="loader"></div>}>
          <Routes>
            <Route exact path="/" element={<Header />} />
            <Route exact path="/Temperature" element={<TemperatureApp />} />
            <Route exact path="/BMICalculator" element={<BMICalculatorAPPs />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
