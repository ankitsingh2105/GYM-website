import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About"
import Trainers from "./Components/Trainers/Trainer"
import Calculator from './Components/Calculator/Calculator';
import Contact from "./Components/Contact/Contact";
import Ankit from "./Components/Contact/Ankit"
export default function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Trainers/>
      <Calculator/>
      <Contact/>
      <Ankit/>
    </>
  )
}
