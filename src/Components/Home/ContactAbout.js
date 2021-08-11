import React, { useEffect, useState } from "react";
import { fetchAboutText } from "../../State/StateFunctions";
import parse from "html-react-parser";
import emailjs from "emailjs-com";

const ContactAbout = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [aboutText, setAboutText] = useState("");

  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState("");

  useEffect(() => {
    fetchAboutText(setAboutText);
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_naqvbpe",
        "template_3w8fugs",
        e.target,
        "user_ZUNAFf6TZZxZRFMtprPYG"
      )
      .then(
        (result) => {
          setAlertType("success");
          setTimeout(() => setAlert(result.text), 3000);
          console.log(result.text);
        },
        (error) => {
          setAlertType("error");
          setTimeout(() => setAlert(error.text), 3000);
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contactAboutBackground">
      <div className="contactAboutDiv">
        <form className="contact" onSubmit={(e) => sendEmail(e)}>
          <h6>Contact</h6>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            name="email"
            required
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          />
          <div className="checkboxDiv">
            <input type="checkbox" name="consent" required />
            <label htmlFor="consent">
              Allow All U to contact me at this email address
            </label>
          </div>
          <input type="submit" name="submit" />
          <div className="message ">
            <p className={`${alertType}Font`}>{alert}</p>
          </div>
        </form>

        <div className="about">
          <h6>About Us</h6>
          {parse(aboutText)}
        </div>
      </div>
    </div>
  );
};

export default ContactAbout;
