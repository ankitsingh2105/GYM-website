import React from 'react'
import { useRef } from 'react'
import "./Calculator.css"
export default function Calculator() {
    const age1 = useRef(null);
    const height1 = useRef(null);
    const weight1 = useRef(null);
    const value1 = useRef(null);
    const answer1 = useRef(null);
    const age2 = useRef(null);
    const height2 = useRef(null);
    const weight2 = useRef(null);
    const value2 = useRef(null);
    const answer2 = useRef(null);
    const MenCalc1 = () => {
        let age = parseInt(age1.current.value);
        let height = parseInt(height1.current.value);
        let weight = parseInt(weight1.current.value);
        let finalAns = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        let value = value1.current.value;
        let intvalue;
        if (value == "volvo") {
            intvalue = 1.3;
        }
        else if (value == "saab") {
            intvalue = 1.375
        }
        else if (value == "mercedes") {
            intvalue = 1.55;
        }
        else {
            intvalue = 1.9;
        }
        console.log("shit - > ", intvalue);
        answer1.current.value = (finalAns * intvalue).toFixed(2) + " calories/day";

    }
    const MenCalc2 = () => {
        let age = parseInt(age2.current.value);
        let height = parseInt(height2.current.value);
        let weight = parseInt(weight2.current.value);
        let finalAns = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        let value = value1.current.value;
        let intvalue;
        if (value == "volvo") {
            intvalue = 1.3;
        }
        else if (value == "saab") {
            intvalue = 1.375
        }
        else if (value == "mercedes") {
            intvalue = 1.55;
        }
        else {
            intvalue = 1.9;
        }
        console.log("shit - > ", intvalue);
        answer2.current.value = (finalAns * intvalue).toFixed(2) + " calories/day";
    }
    return (
        <>
            <main className="Calc_main">
                <div className="align2 Calc_main_div">
                    <aside className="align" >
                        <div className="color2">Calorie Calculator</div>
                        &nbsp;
                        <div>Daily Caloric Needs</div>
                    </aside>
                    <div className="text3">
                        Knowing your daily caloric needs is important for maintaining a healthy
                        weight and lifestyle. It involves estimating the number of calories your body requires each day based on your gender, age, weight, height, and activity level.
                    </div>
                    <div className="align Calories_card">
                        <div className="Calc_card align2">
                            <div className="text12">Male</div>
                            <div className="Calc_section">
                                <div className="age">Age - </div>
                                <input ref={age1} type="text" placeholder="in years" className='height_input' />
                            </div>
                            <div className="Calc_section align">
                                <div className="weight">
                                    Weight -
                                </div>
                                <input ref={weight1} type="text" placeholder="in kgs" className='height_input' />
                            </div>
                            <div className="Calc_section align">
                                <div className="height">
                                    Height -
                                </div>
                                <input ref={height1} type="text" placeholder="in centimeters" className='height_input' />
                            </div>
                            <div className="Calc_section align">
                                <div className="height">
                                    Factor -
                                </div>
                                <select ref={value1} name="cars" id="cars">
                                    <option value="volvo">little or no exercise</option>
                                    <option value="saab">exercise 1-3 times per week</option>
                                    <option value="mercedes">exercise 6-7 times per week</option>
                                    <option value="audi">very hard exercise or physical job</option>
                                </select>
                            </div>
                            <button onClick={MenCalc1} className='Calculate'>Calculate</button>
                            <input ref={answer1} type="text" placeholder='result' className="input1" />
                        </div>


                        <div className="Calc_card align2">
                            <div className="text12">Female</div>
                            <div className="Calc_section align">
                                <div className="age">Age - </div>
                                <input ref={age2} type="text" placeholder="in years" className='height_input' />
                            </div>
                            <div className="Calc_section align">
                                <div className="weight">
                                    Weight -
                                </div>
                                <input ref={weight2} type="text" placeholder="in kgs" className='height_input' />
                            </div>
                            <div className="Calc_section align">
                                <div className="height">
                                    Height -
                                </div>
                                <input ref={height2} type="text" placeholder="in centimeters" className='height_input' />
                            </div>
                            <div className="Calc_section align">
                                <div className="height">
                                    Factor -
                                </div>
                                <select ref={value2} name="cars" id="cars">
                                    <option value="volvo">little or no exercise</option>
                                    <option value="saab">exercise 1-3 times per week</option>
                                    <option value="mercedes">exercise 6-7 times per week</option>
                                    <option value="audi">very hard exercise or physical job</option>
                                </select>
                            </div>
                            <button onClick={MenCalc2} className='Calculate'>Calculate</button>
                            <input ref={answer2} type="text" className='input2' placeholder='result' />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
