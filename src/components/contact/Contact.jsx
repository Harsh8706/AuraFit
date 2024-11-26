import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import Footer from "../footer/Footer";
import LOCATION_CYAN from "../../assets/logos/location-cyan.png";
import PHONE_CYAN from "../../assets/logos/phone-cyan.png";
import EMAIL_CYAN from "../../assets/logos/email-cyan.png";
import CLOCK_CYAN from "../../assets/logos/clock-cyan.png";
import JOHN from '../../assets/photos/john.png';
import ANYA from '../../assets/photos/anya.png';
import GREG from '../../assets/photos/greg.png';
import CLARA from '../../assets/photos/clara.png';
import LEO from '../../assets/photos/leo.png';
import MARIANA from '../../assets/photos/mariana.png';
import CHEVRON from '../../assets/logos/chevron-up.png';
import classNames from 'classnames';

const contactData = [
  {
    avatar: JOHN,
    name: 'John',
    role: 'manager',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Donec vitae arcu.',
    gender: 'male'
  },
  {
    avatar: ANYA,
    name: 'Anya',
    role: 'fitness coach',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Donec vitae arcu.',
    gender: 'female'
  },
  {
    avatar: GREG,
    name: 'Greg',
    role: 'fitness coach',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Donec vitae arcu.',
    gender: 'male'
  },
  {
    avatar: CLARA,
    name: 'Clara',
    role: 'fitness coach',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Donec vitae arcu.',
    gender: 'female'
  },
  {
    avatar: LEO,
    name: 'Leo',
    role: 'boxing coach',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Donec vitae arcu.',
    gender: 'male'
  },
  {
    avatar: MARIANA,
    name: 'Mariana',
    role: 'boxing coach',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Donec vitae arcu.',
    gender: 'female'
  }
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_emkgtxi',  
      'template_j6m0ke8',   
      form.current,
      'NX3DeoQEVTvDKJyBd'    
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Your message has been sent!');
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <div className="container">
      <section id="contact">
        <h1 className="contact-title">Reach out to us!</h1>
        <div className="contact-container">
          <div className="contact-london">
            <h2>Fitness Edge Gym</h2>
            <ul>
              <li>
                <img src={LOCATION_CYAN} alt="" />
                Sports Complex
              </li>
              <li>
                <img src={PHONE_CYAN} alt="" />
                +91 9599 617 479
              </li>
              <li>
                <img src={EMAIL_CYAN} alt="" />
                harshkansal2003@gmail.com
              </li>
              <li>
                <img src={CLOCK_CYAN} alt="" />
                MON - SUN 0:00 - 0:00
              </li>
            </ul>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="contact-form-bg">
              <div className="contact-form">
                <div className="first-row">
                  <div className="name">
                    <p className="input-text">Full name</p>
                    <input type="text" name="fullName" required />
                  </div>
                  <div className="email">
                    <p className="input-text">Email</p>
                    <input type="email" name="email" required />
                  </div>
                </div>
                <div className="second-row">
                  <p className="input-text">Your message</p>
                  <textarea
                    className="message"
                    name="message"
                    rows='8'
                    required
                  ></textarea>
                </div>
                <button className="send-btn" type="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section id="team">
        <h1 className="team-title">Meet the team</h1>
        <div className="team-container">
          {contactData.map(({ avatar, name, role, description, gender }, index) => {
            const className_name = classNames({
              'john': name === 'John',
              'anya': name === 'Anya',
              'greg': name === 'Greg',
              'clara': name === 'Clara',
              'leo': name === 'Leo',
              'mariana': name === 'Mariana'
            });

            return (
              <div key={index} className={`team-card ${gender === 'male' ? 'male' : 'female'} ${className_name}`}>
                <div className="img-box">
                  <img className="avatar" src={avatar} alt="avatar" />
                </div>
                <h3 className="role">{role}</h3>
                <div className="content-box">
                  <img src={CHEVRON} className="chevron" alt="chevron"></img>
                  <h2 className="name">{name}</h2>
                  <div className="description-box">
                    <p className="description">{description}</p>
                  </div>
                  <a href="/">Book a lesson</a>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
