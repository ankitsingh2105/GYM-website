import React from 'react'
import Logo from "./divinelogo.png";
import "./Navbar.css"
export default function Navbar() {
  return (
    <>
    <main className='Navbar_main'>
        <div className="Navbar_main_div">
            <img src={Logo} alt="" />
            <ul className="Nav_UList">
                <li className="Nav_list one">Home</li>
                <li className="Nav_list">About Us</li>
                <li className="Nav_list">Contact Us</li>
                <li className="Nav_list"><i class="fa-solid fa-location-dot"></i></li>
            </ul>
        </div>
    </main>
    </>
  )
}
