import React from 'react'
import "./Plans.css"
export default function Plans(props) {
  const scroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <main className="main_plan" id= {props.id}>

        <div className="main_plan_div">
          <h1 className="plan_head align">
            <div>
              Our
            </div>
            <div>
              Plans
            </div>
          </h1>
        </div>

        <div className="plan_card_div align">
          <div className="plan_card align2">
            <h2 className="plan_head2">
              1 month plan
            </h2>
            <div className="plan_price">
              ₹1200
            </div>
            <div className="align2">
              <ul className="plan_ul">
                <li className="plan_features">Free Something</li>
                <li className="plan_features">Personal Trainer</li>
                <li className="plan_features">Weight loss</li>
                <li className="plan_features">No time restriction</li>
                <li className="plan_features">Again a tariner</li>
                <li className="plan_features">Treadmill</li>
              </ul>
            </div>
            <button>Enroll Now</button>
          </div>
          <div className="plan_card align2">
            <h2 className="plan_head2">
              2 month plan
            </h2>
            <div className="plan_price">
              ₹1200
            </div>
            <div className="align2">
              <ul className="plan_ul">
                <li className="plan_features">Free Something</li>
                <li className="plan_features">Personal Trainer</li>
                <li className="plan_features">Weight loss</li>
                <li className="plan_features">No time restriction</li>
                <li className="plan_features">Again a tariner</li>
                <li className="plan_features">Treadmill</li>
              </ul>
            </div>
            <button>Enroll Now</button>
          </div>
          <div className="plan_card align2">
            <h2 className="plan_head2">
              3 month plan
            </h2>
            <div className="plan_price">
              ₹1200
            </div>
            <div className="align2">
              <ul className="plan_ul">
                <li className="plan_features">Free Something</li>
                <li className="plan_features">Personal Trainer</li>
                <li className="plan_features">Weight loss</li>
                <li className="plan_features">No time restriction</li>
                <li className="plan_features">Again a tariner</li>
                <li className="plan_features">Treadmill</li>
              </ul>
            </div>
            <button>Enroll Now</button>
          </div>
        </div>

      </main>
    </>
  )
}
