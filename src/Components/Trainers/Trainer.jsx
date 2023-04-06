import React from 'react'
import "./Trainer.css";
import Trainer1 from "./Trainer2.webp"
export default function Trainer(props) {
    const { id, id2 } = props;
    const scroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <>
            <main id={id} className="Trainer_main">
                <li id={id2} className="Nav_list floating"><i onClick={() => scroll('home')} class="fa-solid fa-arrow-up"></i></li>
                <div className="align Trainer_main_div">
                    <div>Our</div> &nbsp;
                    <div className="color2">Trainers</div>
                </div>
                <div className="align Trainer">
                    <div className="Trainer_card align2">
                        <img src={Trainer1} alt="" />
                        <div className="head color">
                            Deepanshu Deopa
                        </div>
                        <div className="text text2">Lorem ipsum , amet consectetur adipisicing elit. Ad ipsam repellendus doloremque asperiores. Perspiciatis vitae harum, </div>
                    </div>
                    <div className="Trainer_card align2">
                        <img src={Trainer1} alt="" />
                        <div className="head color">
                            Deepanshu Deopa
                        </div>
                        <div className="text text2">Lorem ipsum , amet consectetur adipisicing elit. Ad ipsam repellendus doloremque asperiores. Perspiciatis vitae harum, </div>
                    </div>
                </div>
            </main>
        </>
    )
}
