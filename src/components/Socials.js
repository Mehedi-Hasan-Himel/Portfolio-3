import React from "react";
import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImLinkedin,
} from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className=" flex gap-x-4 ">
        <li>
          <a
            href="https://www.facebook.com/mehedihasanhimel.jsx"
            target="_blank"
            rel="noreferrer"
          >
            <ImFacebook></ImFacebook>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/HIMEL_JS"
            target="_blank"
            rel="noreferrer"
          >
            <ImTwitter></ImTwitter>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mehedi_hasan_himel.js/"
            target="_blank"
            rel="noreferrer"
          >
            <ImInstagram></ImInstagram>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mehedi-hasan-himel/"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin></ImLinkedin>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
