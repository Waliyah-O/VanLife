import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./pages.css";

export const ContactUs = () => {
  const [error, setError] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_msyk3zb",
        "template_dx26pul",
        form.current,
        "7TvTi3Sx7eVgUzvSW"
      )
      .then(
        (result) => {
          alert("message sent successfully");
        },
        (error) => {
          setError(error.message);
          alert("message not sent. Try again!");
        }
      );
  };

  return (
    <div className="contactform-container">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="flex">
          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className="input"
              name="name"
            />
            <span>first name</span>
          </label>
          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className="input"
              name="name"
            />
            <span>last name</span>
          </label>
        </div>

        <label>
          <input
            required=""
            placeholder=""
            type="email"
            className="input"
            name="email"
          />
          <span>email</span>
        </label>

        <label>
          <input
            required=""
            type="tel"
            placeholder=""
            className="input"
            name="message"
          />
          <span>contact number</span>
        </label>
        <label>
          <textarea
            required=""
            rows="3"
            placeholder=""
            className="input01"
            name="message"
          ></textarea>
          <span>message</span>
        </label>

        <button className="fancy" type="submit" value="send">
          <span className="top-key"></span>
          <span className="text">submit</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
