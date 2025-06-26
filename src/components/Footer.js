import React from 'react';
import '../CSS/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <FontAwesomeIcon icon={faCopyright} /> 2024 All Rights Reserved <br />
      Designed by <span className='text-white font-semibold underline'>
        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/shubham-sharma-352576259">
          Shubham Sharma
        </a>
      </span>
      <br />
      <div className="footer_links">
        <a target='_blank' rel="noreferrer" href="https://www.instagram.com/shubham1816sharma">
          <FontAwesomeIcon icon={faInstagram} beatFade />
        </a>
        <a target='_blank' rel="noreferrer" href="https://x.com/Shubham56114968">
          <FontAwesomeIcon icon={faXTwitter} beatFade />
        </a>
        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/shubham-sharma-352576259">
          <FontAwesomeIcon icon={faLinkedin} beatFade />
        </a>
        <a target='_blank' rel="noreferrer" href="https://github.com/shubhamsharma39">
          <FontAwesomeIcon icon={faGithub} beatFade />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
