import React, { useEffect, useState } from "react";
import { fetchAboutText } from "../../State/StateFunctions";
import parse from "html-react-parser";

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
        </div>
      </div>
    </div>
  );
};

export default ContactAbout;
