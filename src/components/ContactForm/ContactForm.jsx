import React, { useState } from 'react'
import style from './Contact.module.css'
import Button from '../Button/Button';
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {

    const [name, setName] = useState("Deepak");
    const [email, setEmail] = useState("deepak@gmail.com");
    const [text, settext] = useState("Doing React Project");

    const onSubmit = (e) => {
        e.preventDefault();
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        settext(e.target[2].value);
    };
  return (
     <section className={style.container}>
        <div className= {style.contact_form}>
            <div className={style.top_btn}>
            <Button icon={<MdMessage/>} text="VIA SUPPORT CHAT" fontsize="24px"/>
            <Button icon={<IoCallOutline />} text="VIA CALL" fontsize="24px"/>
            </div>
            <Button 
            isOutline = {true}
            icon={<HiMail/>} text="VIA EMAIL FORM" fontsize="24px"/>

            <form onSubmit={onSubmit}>
                <div className={style.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>

                <div className={style.form_control}>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div className={style.form_control}>
                    <label htmlFor="text">TEXT</label>
                    <textarea name="text" id="text"  rows={8}/>
                </div>

                <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}>
                     <Button text="SUBMIT"/>
                </div>

                <div>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{text}</p>
                </div>
            </form>
          </div>
        <div className={`style.contact_image`}>
            <img src="/images/Service 24_7-pana 1.svg" alt="Contact Image" />
        </div>
     </section>
  );
};

export default ContactForm
