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
	  name="number"
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




  /* <form className="form" ref={form} onSubmit={sendEmail}>
	<label>Name</label>
	<input className="input" type="text" name="name" />
	<label>Email</label>
	<input type="email" name="email" />
	<label>Message</label>
	<textarea name="message" />
	<input type="submit" value="Send" />
  </form> */
}

// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")

//     emailjs
//       .sendForm(
//         "service_msyk3zb",
//         "template_dx26pul",
//         formData,
//         "7TvTi3Sx7eVgUzvSW"
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully:", result);
//           // Add code to show a success message to the user.
//         },
//         (error) => {
//           console.error("Email sending failed:", error);
//           // Add code to show an error message to the user.
//         }
//       );

//     // Clear the form fields
//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="contact-us">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs;
