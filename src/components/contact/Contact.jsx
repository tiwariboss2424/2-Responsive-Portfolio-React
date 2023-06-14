import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const Contact = () => {
  const [done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4slpw64",
        "template_7wy380b",
        form.current,
        "m_jM_vbU1VZYeObDk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="c-page">
        <div className="c-left">
          <div className="awesome">
            <span>Get In Touch</span>
            <span>Contact Me</span>
            <div
              className="blur c-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            Name* :{" "}
            <input
              type="text"
              name="user_name"
              plaaceholder="Enter Name"
              required
            />{" "}
            <br />
            Email* :{" "}
            <input type="text" name="user_email" required placeholder="" />
            <br />
            Message* :{" "}
            <textarea
              cols="40 "
              rows="5"
              name="message"
              plaaceholder="Enter Name"
              required
            />
            <button type="sumbit" className="button">
              Mail Me
            </button>
            <div
              className="blur c-blur2"
              style={{ background: "var(--orange)" }}
            ></div>
          </form>
          <span>{done && "Thanx for contacting Me!"}</span>
        </div>
      </div>
    </>
  );
};
export default Contact;
