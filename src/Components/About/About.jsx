import React from 'react'
import { Link } from 'react-router-dom';
import "./About.css";
import Topics from "./Topics/Topics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function About(props) {
    const { id } = props;
    return (
        <BrowserRouter>
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

                {/*  second part using react routers */}
                {/*  making a vertical nav */}
            </main>
            <div className="secondDiv">

            <nav className="About_nav">
                <div></div>
                <ul className="about_nav_ul">
                    <Link style={{ textDecoration: 'none' }} to="/"><li>Fitness Programs</li></Link>

                    <Link style={{ textDecoration: 'none' }} to="/about/weightLoss"><li>Weight Loss</li></Link>

                    <Link style={{ textDecoration: 'none' }} to="/about/recovery"><li>Recovery</li></Link>

                    <Link style={{ textDecoration: 'none' }} to="/about/fit&healthy"><li>Fit & Healthy</li></Link>

                    <Link style={{ textDecoration: 'none' }} to="/about/groupfitness"><li>Group Fitness</li></Link>

                    <Link style={{ textDecoration: 'none' }} to="/about/performance"><li> Performance</li></Link>

                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Topics heading="Fitness Programs" para={`Our fitness program is designed to help you reach your goals, whatever they may be. Whether you're looking to lose weight, build muscle, or improve your overall fitness level, we have a program that can help. <br/> <br/> Our expert trainers will work with you to create a personalized workout plan tailored to your specific needs and goals. We offer a variety of group fitness classes and individual training options, so you can find the program that works best for you. `} />}></Route>

                <Route path="about/weightLoss" element={<Topics heading="Weight Loss" para="Losing weight can be a challenge, but with our weight loss program, it's easier than ever. Our program is designed to help you shed pounds and achieve a healthier, more active lifestyle. <br/> <br/> We offer a variety of cardio and strength training equipment, as well as nutrition coaching and support to help you achieve your goals. Our expert trainers will work with you to create a personalized workout plan that targets your trouble spots and helps you burn fat. With our weight loss program, you'll not only look great, but you'll feel great too." />} />

                <Route path="about/recovery" element={<Topics heading="Recovery" para={`Injuries can be frustrating, but with our recovery and rehabilitation program, you can get back to your regular workouts faster. Our program is designed to help you recover from injuries and prevent future ones. <br/><br/>We offer a variety of recovery and rehabilitation equipment, as well as personalized coaching to help you regain your strength and mobility. Whether you're recovering from a minor injury or a major surgery, our recovery and rehabilitation program can help you get back on track.`} />} />

                <Route path="about/fit&healthy" element={<Topics heading="Fit & Healthy" para={`At our gym, we believe that fitness is more than just working out – it's a way of life. Our Fit & Healthy program is designed to help you achieve your fitness goals while also promoting overall health and wellness.<br/><br/> We offer a variety of services and resources to help you live a healthy lifestyle, including nutrition coaching, wellness seminars, and access to state-of-the-art fitness equipment. With our Fit & Healthy program, you'll not only look great, but you'll feel great too.`} />} />

                <Route path="about/groupfitness" element={<Topics heading="Group Fitness" para={`Group fitness classes are a great way to stay motivated and meet new people. At our gym, we offer a wide range of group fitness classes, including yoga, Pilates, spin, and more. <br/><br/> Our expert instructors will guide you through each workout, ensuring that you get a safe and effective workout while having fun. Group fitness is a great way to try new exercises and push yourself to achieve your fitness goals.`} />} />

                <Route path="about/performance" element={<Topics heading="Performance" para={`If you're an athlete looking to improve your performance, our gym is the perfect place for you. Our athletic performance program is designed to help you improve your speed, agility, power, and endurance. <br/><br/> We offer a variety of strength and conditioning equipment, as well as personalized coaching to help you achieve your goals. Whether you're a weekend warrior or a serious athlete, our athletic performance program will help you take your game to the next level.`} />} />

            </Routes>
            </div>
        </BrowserRouter>
    )
}
