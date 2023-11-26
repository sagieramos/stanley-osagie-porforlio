import React from 'react';
import {
  FaWhatsapp, FaGithub, FaInstagram, FaLinkedin, FaCloudDownloadAlt,
} from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import myPhoto from '../assets/myPhoto.jpg';

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: '600px',
  },
  hero: {
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    height: '80vh',
    position: 'relative',
  },
  offset: {
    background: '#FFD700',
    left: '-50px',
  },
  aboutInner: {
    textAlign: 'center',
  },
  image: {
    marginTop: '40%',
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    border: '4px solid #888',
    boxShadow: '-10px 10px 0px #FFD700',
  },
  heading: {
    fontSize: '24px',
    marginTop: '10px',
  },
  subheading: {
    fontSize: '16px',
    color: '#555',
  },
  socialIcons: {
    marginTop: '20px',
  },
  icon: {
    fontSize: '24px',
    margin: '0 10px',
    color: 'red',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    border: 'none',
    background: 'none',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '2px',
    width: '100%',
    borderTop: '1px solid gray',
  },
};

const About = () => (
  <div style={styles.container}>
    <section style={styles.hero}>
      <article className="about-inner" style={styles.aboutInner}>
        <img src={myPhoto} alt="MyImage" style={styles.image} />
        <h1 style={styles.heading}>Stanley Osagie</h1>
        <p style={styles.subheading}>Programmer</p>
        <div className="social-icons" style={styles.socialIcons}>
          <FaInstagram style={styles.icon} />
          <FaLinkedin style={styles.icon} />
          <FaGithub style={styles.icon} />
          <FaWhatsapp style={styles.icon} />
        </div>
        <div style={styles.buttonContainer}>
          <button type="button" style={styles.button}>
            <p>DOWNLOAD CV</p>
            <FaCloudDownloadAlt />
          </button>
          <button type="button" style={styles.button}>
            <p>CONTACT ME</p>
            <IoIosContact />
          </button>
        </div>
      </article>
    </section>
  </div>
);
export default About;
