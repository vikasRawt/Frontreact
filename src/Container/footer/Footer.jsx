import React from 'react';
import './Footer.css';
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient_text'>Do you want to step in to future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links-logo'>
          <img src={gpt3Logo} alt='logofooter'/>
          <p>Crechterwoord k12 182 Dk</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>social Media</p>
          <p>counters</p>
          <p>contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms& Conditions</p>
          <p>Privacy Policies</p>
          <p>counters</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get In Touch</h4>
          <p>sadvaksjvbk fhsa h ihl</p>
          <p>4974500-342</p>
          <p>afdsn@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>2023 GPT3. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;