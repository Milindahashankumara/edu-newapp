import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, question, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contactedusity@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +1 (555) 123-4567
          </li>
          <li>
            <img src={location_icon} alt="" />
            123 , Moratuwa Sri Lanka
          </li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
}

export default Contact;
