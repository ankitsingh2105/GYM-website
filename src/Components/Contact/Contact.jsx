import React from 'react'
import "./Contact.css"
export default function Contact(props) {
    const SendtoWhatspp = () => {
        let naam = document.getElementById("newid1").value;
        let email = document.getElementById('newid2').value;
        let text = document.getElementById('newid3').value;
        let Message = `https://wa.me/9196909050?text=" + "Name :: " + ${naam} + " %0a " + "Email :: " + ${email} + " %0a " + " Message :: " + ${text}`
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
                    <div className='contact_address '>
                        <div className="phone">
                        <b>Phone</b> - 12345676767
                        </div>
                        <div className="address">
                        <b>Address</b> - Lorem ipraesentium quae ullam entium quae ullam.
                        </div>
                        <div className="email">
                            <b>Gmail</b> - welc121ometomygym@gmial.com
                        </div>
                    </div>
                    <form action="" className='contact_form align2'>
                        <div className="heading_contact">
                            Deliver you message
                        </div>
                        <input type="text" required id='newid1' className="info_contact " placeholder='Your Name'></input>
                        <input type="text" required id='newid2' className="info_contact " placeholder='Your Email/Phone'></input>
                        <textarea type="text" required id='newid3' className='info_contact ' name=""  rows="10" placeholder='Your message'></textarea>
                        <div className="shake">
                            <div type='button' id='delivery' className="submit" onClick={SendtoWhatspp}>
                                <button>SEND</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
