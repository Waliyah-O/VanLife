import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./pages.css";
import { useNavigation } from "react-router-dom";

export const ContactUs = () => {
  const [error, setError] = useState("");
  const form = useRef();
  const navigation = useNavigation();
  console.log(navigation);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_FORM_ID
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

        {/* <label>
          <input
            required=""
            type="tel"
            placeholder=""
            className="input"
            name="message"
          />
          <span>contact number</span>
        </label> */}
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
          <span className="text" disabled={navigation.state === "submitting"}>
            {navigation.state === "submitting" ? "submitting" : "submit"}
          </span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
