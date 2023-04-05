import React from 'react'
import "./Trainer.css";
import Trainer1 from "./Trainer2.jpg"
export default function Trainer(props) {
    const { id } = props;
    return (
        <>
            <main id={id} className="Trainer_main">
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
