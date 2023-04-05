import React from 'react'
import "./App.css"
import { Suspense } from "react";
import HashLoader from "react-spinners/HashLoader";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Trainers from "./Components/Trainers/Trainer";
import Calculator from "./Components/Calculator/Calculator";
import Contact from "./Components/Contact/Contact";
import Ankit from "./Components/Contact/Ankit";
export default function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="align33" style={{ margin: "250px 0px" }}>
            <HashLoader size={"40px"} color="orangered" className="" />
          </div>
        }
      >
        <Navbar id="home" />
        <Home />
        <About id="about" />
        <Trainers id="trainer" />
        <Calculator />
        <Contact id="contact" />
        <Ankit />
      </Suspense>
    </>
  )
}
