import github from '../../assets/Path.png';
import frontend from '../../assets/simple-icons_frontendmentor.png';
import linkedIn from '../../assets/LinkedIn.png';
import twitter from '../../assets/akar-icons_twitter-fill.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h2 className={styles.heading}> adamkeyes</h2>
      </div>
      <div className={styles.icons}>
        <img src={github} alt="github-icon" />
        <img src={frontend} alt="frontend-mentor-icon" />
        <img src={linkedIn} alt="linkedin-icon" />
        <img src={twitter} alt="twitter-icon" />
      </div>
    </header>
  );
};

export default Header;
