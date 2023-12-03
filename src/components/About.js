import React from 'react';
import {
  FaWhatsapp, FaGithub, FaInstagram, FaLinkedin, FaCloudDownloadAlt,
} from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import myPhoto from '../assets/myPhoto.jpg';
import { color, colorToggle } from '../signal.ts';
import StackSummary from './StackSummary';
import dev1 from '../assets/dev1.jpg';
import Option from './Option';
import './about.css';

const About = () => {
  const offset = '-12px';
  const elipseMode = color.value ? 'u982y38wydg-dark-mode' : 'u982y38wydg-light-mode';
  const typingColor = color.value ? '#FFC33D' : '#36454f';
  const styles = {
    container: {
      margin: '0 auto',
      fontFamily: 'Lekton, sans-serif',
    },
    offset: {
      background: '#ffc23d70',
      position: 'absolute',
      height: '98%',
      width: '98%',
      borderRadius: '4px 0',
      left: offset,
      top: offset,
    },
    offsetBg: {
      backgroundColor: colorToggle(color.value),
      height: '100%',
      width: '100%',
      left: '0',
      top: '0',
      position: 'absolute',
    },
    offsetContents: {
      backgroundColor: colorToggle(color.value),
      height: '100%',
      width: '100%',
      left: '0',
      top: '0',
      position: 'relative',
      zIndex: '2',
    },
    hero: {
      boxSizing: 'border-box',
      margin: '0 auto',
      color: colorToggle(!color.value),
      padding: '50px',
      borderRadius: '4px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      height: '90vh',
      maxHeight: '780px',
      background: colorToggle(color.value),
      minHeight: '600px',
      position: 'relative',
      maxWidth: '588px',
      width: '90wh',
    },
    bgImgContainer: {
      position: 'absolute',
      width: '100%',
      height: '50%',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '0',
      zIndex: '3',
    },
    bgImg: {
      backgroundImage: `url(${dev1})`,
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      borderRadius: '4px 4px 0 0',
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    },
    aboutInner: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    articleContainer: {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      zIndex: '3',
    },
    profile: {
      zIndex: '2',
    },
    image: {
      marginTop: '50px',
      borderRadius: '50%',
      width: '120px',
      height: '120px',
      objectFit: 'cover',
      border: `4px solid ${colorToggle(color.value)}`,
      boxShadow: '-10px 10px 0px #ffc23d33',
    },
    heading: {
      fontSize: '32px',
      margin: '20px',
      letterSpacing: '2px',
    },
    subheading: {
      color: `${typingColor}`,
      fontSize: '77px',
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
      bottom: '0',
      left: '0',
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
      <Option />
      <section style={styles.hero}>
        <div style={styles.offset} />
        <div style={styles.offsetBg}>
          <div style={styles.offsetContents}>
            <div style={styles.bgImgContainer}>
              <div className={`u982y38wydg ${elipseMode}`} style={styles.bgImg} />
            </div>
            <section style={styles.articleContainer}>
              <article style={styles.aboutInner}>
                <div style={styles.profile}>
                  <img src={myPhoto} alt="MyImage" style={styles.image} />
                  <h1 style={styles.heading}>Stanley</h1>
                  <StackSummary style={styles.subheading} />
                  <div className style={styles.socialIcons}>
                    <FaInstagram style={styles.icon} />
                    <FaLinkedin style={styles.icon} />
                    <FaGithub style={styles.icon} />
                    <FaWhatsapp style={styles.icon} />
                  </div>
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
        </div>
      </section>
    </div>
  );
};
export default About;
