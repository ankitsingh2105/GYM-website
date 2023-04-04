import React from 'react'
import "./Contact.css"
export default function Contact(props) {
    const SendtoWhatspp = () => {
        let naam = document.getElementById("newid1").value;
        let email = document.getElementById('newid2').value;
        let text = document.getElementById('newid3').value;
        let Message = `https://wa.me/919690905066?text=" + "Name :: " + ${naam} + " %0a " + "Email :: " + ${email} + " %0a " + " Message :: " + ${text}`
        window.open(Message, '_blank').focus();
    }
    return (
        <main id={props.id} className="Contact_main">
            <div className="Contact_main_div">
                <h1 className='Contact_Head align'>
                    <div className="color2">Contact</div>
                    &nbsp;
                    <div>Us</div>
                </h1>
                <div className="text3">
                    Have a question or want to learn more about
                    our gym? Don't hesitate to reach out to us!
                    We are always happy to hear from our members
                    and potential members, and we will do our
                    best to provide you with the information you need.
                    We look forward to hearing from you soon!"
                </div>
                <div className="social">
                    <ul className='Contact_ul align' >
                        <a href='' className="icons"><i class="fa-brands fa-instagram"></i></a>
                        <a href='' className="icons"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href='' className="icons"><i class="fa-solid fa-envelope"></i></a>
                    </ul>
                </div>
                <div className="form align" >
                    <form action="" className='contact_form align2'>
                        <div className="heading_contact">
                            Deliver you message
                        </div>
                        <input type="text" id='newid1' className="info_contact " placeholder='Your Name' required></input>
                            <input type="text" id='newid2' className="info_contact " placeholder='Your Email' required></input>
                            <textarea type="text" id='newid3' className='info_contact ' name="" cols="27" rows="10" placeholder='Your message' required></textarea>
                        <div className="shake">
                            <div type='button' id='delivery' className="submit" onClick={SendtoWhatspp}>
                                <i class="fa-solid fa-truck"></i>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
