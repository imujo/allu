import React, { useEffect, useState } from "react";
import { fetchAboutText } from "../../State/StateFunctions";
import parse from "html-react-parser";

const ContactAbout = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [aboutText, setAboutText] = useState("");

  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("sendEmail");

    fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/sendEmail`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        message: message,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          setAlertType("success");
          setAlert("Email sent");
          setEmail("");
          setMessage("");
          setTimeout(() => setAlert(""), 5000);
        } else if (response.status === "fail") {
          setAlertType("error");
          setAlert("There has been an error - Email not sent");
          setTimeout(() => setAlert(""), 5000);
        }
      });
  };

  useEffect(() => {
    fetchAboutText(setAboutText);
  }, []);

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
            <label htmlFor="consent">I accept sharing my email address</label>
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
