/* eslint-disable react/no-unescaped-entities */
import styles from './Hero.module.css';
import Button from '../../layout/button/Button';
import heroPic from '../../assets/image-removebg-preview(4).png';
import oval from '../../assets/Oval.png';
import ovalHalf from '../../assets/Oval-half.png';
import circle from '../../assets/Group 26.png';
import pfp from '../../assets/pfp.png';

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_content}>
        <h1>
          Nice to meet you! <br></br> I'm <span>Adam Keyes</span>.{' '}
        </h1>
        <p>
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <div className={styles.button}>
          <Button text="Contact Us" />
          <div className={styles.circle}>
            <img src={circle} alt="circle" />
          </div>
        </div>
      </div>
      <div className="hero_image">
        <img src={heroPic} alt="hero picture" className={styles.hero_pic} />
        <img
          src={pfp}
          alt="small size profile picture"
          className={styles.pfp}
        />
      </div>
      <div>
        <img src={oval} alt="oval ring" className={styles.oval} />
        <img src={ovalHalf} alt='"half oval ring' className={styles.ovalHalf} />
      </div>
    </section>
  );
};

export default Hero;
