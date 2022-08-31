import { useState,useRef } from "react";
import "./contact.scss";
import emailjs from '@emailjs/browser';
import {FcLike} from "react-icons/fc";

export default function Contact() {

  const [message,setMessage]=useState(false);
  const formRef=useRef();
  const nameRef=useRef();
  const messageRef=useRef();

  const handleSubmit=(e)=>{
    e.preventDefault();
    setMessage(true);
    

    emailjs.sendForm('service_xogzgvh', 'template_9pzbd0m', formRef.current, 'a_3oOdZxdyPxImHQC')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    nameRef.current.value="";
    messageRef.current.value="";

    setTimeout(()=>{
      setMessage(false);
    },1000)
    
  }

  return (
    <div className='contact' id="contact">
      
      <div className="left">
        <img src="assets/hand.svg" alt="" />
      </div>

      <div className="right">
          <h2>Contact</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" ref={nameRef} name="user_email" placeholder="Your Email"/>
            <textarea name="message" ref={messageRef} placeholder="Message"></textarea>
            <button type="submit">Send</button>

            {message&&<span>Thanks, I'll reply as soon as possible <FcLike/></span>}
          </form>

      </div>
    </div>
  )
}
