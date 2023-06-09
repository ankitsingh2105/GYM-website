import React from 'react'
import Logo from "./logo.png";
import "./Navbar.css"
export default function Navbar(props) {
  const scroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <main id={props.id} className='Navbar_main'>
        <div className="Navbar_main_div">
          <img src={Logo} alt="" />
          <ul className="Nav_UList">
            <li className="Nav_list one"><a onClick={() => scroll('home')}>Home</a></li>
            <li className="Nav_list"><a onClick={() => scroll('about')}>About Us</a></li>
            <li className="Nav_list"><a onClick={() => scroll('plans')}>Plans</a></li>
            <li className="Nav_list"><a onClick={() => scroll('contact')}>Contact</a></li>
            <li className="Nav_list"> <a href="https://ma.app.goog/4tVQ9gqLm7VymsoD6" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-location-dot"></i></a></li>
          </ul>
        </div>
      </main>
    </>
  )
}
