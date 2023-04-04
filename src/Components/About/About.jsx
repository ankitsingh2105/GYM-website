import React from 'react'
import "./About.css";
export default function About(props) {
    const { id } = props;
    return (
        <main id={id} className="About_main">
            <aside className="align2 About_main_aside">
                <aside>
                    {/* Fitness is like a relationship. You can't cheat and expect it to work */}
                    <div className="color1">Fitness</div>  &nbsp;
                    <div>is like a relationship.</div>
                </aside>
                <aside>
                    <div> You can't
                    </div> &nbsp; <div className="color">cheat</div>
                    &nbsp; <div>and expect it to work</div> <div className="color">.</div>
                </aside>
            </aside>
            <div className='align card_main_div'>
                <div className="card align2">
                    <div className="icon">
                        <i class="fa-solid fa-fire"></i>
                    </div>
                    <div className="head color">
                        Burn
                    </div>
                    <div className="text">
                        Burn calories and melt away fat with our high-intensity workouts and expert training programs.
                    </div>
                </div>
                <div className="card align2">
                    <div className="icon">
                        <i class="fa-solid fa-trophy"></i>
                    </div>
                    <div className="head color">
                        Build
                    </div>
                    <div className="text">
                        Build strength and transform your body with our state-of-the-art equipment and personalized training sessions
                    </div>
                </div>
                <div className="card align2">
                    <div className="icon">
                        <i class="fa-solid fa-scale-balanced"></i>
                    </div>
                    <div className="head color">
                        Balance
                    </div>
                    <div className="text">
                        Improve your balance, stability, and coordination with our range of functional training exercises and specialized classes
                    </div>
                </div>
            </div>
        </main>
    )
}
