import React, { useEffect, useState } from "react";
import { fetchAboutText } from "../../State/StateFunctions";
import parse from "html-react-parser";
import { FaFacebook } from "react-icons/fa";

const ContactAbout = () => {
  const [aboutText, setAboutText] = useState("");

  useEffect(() => {
    fetchAboutText(setAboutText);
  }, []);

  return (
    <div className="contactAboutBackground">
      <div className="contactAboutDiv">
        <div className="about">
          <h6>About Us</h6>
          {parse(aboutText)}
          <a
            className="fb"
            href="https://www.facebook.com/AllULanguageLearning"
          >
            <FaFacebook />
            <h5>Facebook</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactAbout;
