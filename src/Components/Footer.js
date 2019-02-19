import React from 'react';
import footerimage from './footerlogo.png';

const Footer = () => (
    <div className="footer">
      <img aria-hidden alt="" title="Footer Image" src={footerimage} />
      <h3 id="footext">Powered by Digital Tools – Bangalore Hub</h3>
    </div>
  )

export default Footer;