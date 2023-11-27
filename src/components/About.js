import React from 'react';
import {
  FaWhatsapp, FaGithub, FaInstagram, FaLinkedin, FaCloudDownloadAlt,
} from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import myPhoto from '../assets/myPhoto.jpg';
import { color, colorToggle, toggleColor } from '../signal.ts';

const About = () => {
  const offset = '-12px';
  const styles = {
    container: {
      position: 'relative',
      margin: '0 auto',
      maxWidth: '588px',
      fontFamily: 'Lekton, sans-serif',
    },
    offset: {
      background: '#ffc23d70',
      position: 'absolute',
      height: '90%',
      width: '90%',
      borderRadius: '5px 0',
      zIndex: '-1',
      left: offset,
      top: offset,
    },
    hero: {
      color: colorToggle(!color.value),
      borderRadius: '5px',
      marginTop: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      height: '80vh',
      background: colorToggle(color.value),
      position: 'relative',
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
      border: `4px solid ${colorToggle(color.value)}`,
      boxShadow: '-10px 10px 0px #ffc23d33',
    },
    heading: {
      fontSize: '28px',
      marginTop: '10px',
      letterSpacing: '2px',
    },
    subheading: {
      fontSize: '16px',
      color: '#FFC33D',
    },
    socialIcons: {
      marginTop: '20px',
    },
    icon: {
      fontSize: '18px',
      margin: '0 10px',
      color: `${colorToggle(!color.value)}`,
    },
    button: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '10px',
      border: 'none',
      background: 'none',
      color: colorToggle(!color.value),
    },
    buttonContainer: {
      position: 'absolute',
      bottom: '2px',
      width: '100%',
    },
    buttonInnerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      position: 'relative',
    },
    hl: {
      width: '100%',
      height: '1px',
      background: 'linear-gradient(to right, transparent 0%, #80808062 50%, transparent 100%)',
    },
    vl: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '1px',
      height: '100%',
      background: 'linear-gradient(to bottom, transparent 0%, #80808062 50%, transparent 100%)',
    },
  };
  return (
    <div style={styles.container}>
      <button type="button" onClick={toggleColor}>toggle</button>
      <section style={styles.hero}>
        <div style={styles.offset} />
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
            <div style={styles.hl} />
            <div style={styles.vl} />
            <div style={{ padding: '10px' }}>
              <div style={styles.buttonInnerContainer}>
                <button type="button" style={styles.button}>
                  <p>DOWNLOAD CV</p>
                  <FaCloudDownloadAlt />
                </button>
                <button type="button" style={styles.button}>
                  <p>CONTACT ME</p>
                  <IoIosContact />
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
export default About;
