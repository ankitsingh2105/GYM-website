import React from 'react'
import "./Home.css"
export default function Home() {
    ScrollReveal().reveal('.Home_main_div');
    return (
        <main className='Home_main'>
            <div className="Home_main_div">
                <aside className='align'>
                    <div className='color'>Good</div> <div> things come to</div>
                </aside>
                <aside className='align'>
                    <div>those who</div> <div className='color'>SWEAT.</div>
                </aside>
                {/* +91 96909 05066 */}
                <button> <a href='http://wa.me/<+919690906‬>'>Join Us Now</a></button>
            </div>
        </main>
    )
}
