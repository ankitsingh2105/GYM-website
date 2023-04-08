import React from 'react'
import "./App.css"
import { Suspense, lazy } from "react";
import BounceLoader from "react-spinners/BounceLoader";
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Home = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Trainers = lazy(() => import("./Components/Trainers/Trainer"));
const Calculator = lazy(() => import("./Components/Calculator/Calculator"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Ankit = lazy(() => import("./Components/Contact/Ankit"));
const Reviews = lazy(() => import("./Components/Reviews/Reviews"));
export default function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="align33" style={{ margin: "250px 0px" }}>
            <BounceLoader size={"60px"} color="orangered" className="" />
          </div>
        }
      >
        <Navbar id="home" />
        <Home />
        <About id="about" />
        <Trainers id="trainer" />
        <Calculator />
        <Reviews/>
        <Contact id="contact" />
        <Ankit />
      </Suspense>
    </>
  )
}
