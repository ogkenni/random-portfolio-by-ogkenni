import SkillCard from '../skills-card/SkillCard';
import circle from '../../assets/Group 2.png';
import styles from './Skills.module.css';
const Skills = () => {
  return (
    <div>
      <hr className={styles.line} />
      <section className={styles.skills}>
        <SkillCard title={'HTML'} text={'4 Years Experience'} />
        <SkillCard title={'CSS'} text={'4 Years Experience'} />
        <SkillCard title={'Javascript'} text={'4 Years Experience'} />
        <SkillCard title={'Accessibility'} text={'4 Years Experience'} />
        <SkillCard title={'React'} text={'3 Years Experience'} />
        <SkillCard title={'Sass'} text={'3 Years Experience'} />
        <div className={styles.circle}>
          <img className={styles.image} src={circle} alt="cirlce" />
        </div>
        <hr className={styles.liner} />
      </section>
    </div>
  );
};

export default Skills;
