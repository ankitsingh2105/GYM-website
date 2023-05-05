import React from 'react'
import "./Reviews.css"
import man from "./man.png";
import woman from "./woman.png";
export default function Reviews() {
    return (
        <>
            <main className="Review_main">
                <div className="Review_main_div">
                    <aside className="align">
                        <h1>Reviews</h1>
                    </aside>
                </div>
                <div className="review_div2">
                    <div className="review_card">
                        <img className="review_class_image" src={man} alt="" />
                        <div className="align2">
                            <div className="name">
                                Aman Singh
                            </div>
                            <div style={{ "margin-top": "12px" }} className="align">
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                            </div>
                            <div className="review">
                                It's best gym in location in India.
                                Coach and sub coach are very behavioural.
                                They suggest you at every day and helps you .
                            </div>
                        </div>
                    </div>

                    <div className="review_card">
                        <img className="review_class_image" src={woman} alt="" />
                        <div className="align2">
                            <div className="name">
                                Arya Ojha
                            </div>
                            <div style={{ "margin-top": "12px" }} className="align">
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                            </div>
                            <div className="review">
                            Cozy nearby workout space. We are doing zumba and there in ample space. You must register now.
                            </div>
                        </div>
                    </div>

                    <div className="review_card">
                        <img className="review_class_image" src={man} alt="" />
                        <div className="align2">
                            <div className="name">
                                Manoj Singh
                            </div>
                            <div style={{ "margin-top": "12px" }} className="align">
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                            </div>
                            <div className="review">
                            One of the best zym in World. Trainers are polite and careful. They provide scheduled training for all type of body enhancements.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
