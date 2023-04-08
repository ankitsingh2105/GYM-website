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
                                Rohit Rawat
                            </div>
                            <div style={{ "margin-top": "12px" }} className="align">
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                            </div>
                            <div className="review">
                            One of the best gym in the city in my opinion. Neat and clean environment with amazing interior. Brand new top level equipment. Must visit!!
                            </div>
                        </div>
                    </div>

                    <div className="review_card">
                        <img className="review_class_image" src={woman} alt="" />
                        <div className="align2">
                            <div className="name">
                                Saloni Bisht
                            </div>
                            <div style={{ "margin-top": "12px" }} className="align">
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                            </div>
                            <div className="review">
                            Just the kind of gym Haldwani needs... Well equipped, latest machines in Haldwani which is a rare find... And had to mention the lighting cuz it matters 🫰🙌🙌🙌 If you're in Haldwani you must register now. …
                            </div>
                        </div>
                    </div>

                    <div className="review_card">
                        <img className="review_class_image" src={man} alt="" />
                        <div className="align2">
                            <div className="name">
                                Gaurav Rawat
                            </div>
                            <div style={{ "margin-top": "12px" }} className="align">
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                            </div>
                            <div className="review">
                            Amazing facilities, new equipment, clean with a great vibe. Good service with friendly staff, highly recommend everyone to visit at least once.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
