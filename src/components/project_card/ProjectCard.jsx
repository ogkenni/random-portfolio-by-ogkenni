import styles from './ProjectCard.module.css';
// eslint-disable-next-line react/prop-types
const ProjectCard = ({ img, text, tagOne, tagTwo, tagThree }) => {
  return (
    <div className={styles.projectCard}>
      <img src={img} alt={text} />
      <h3>{text}</h3>
      <div className={styles.tags}>
        <p>{tagOne}</p>
        <p>{tagTwo}</p>
        <p>{tagThree}</p>
      </div>
      <div className={styles.overlay}>
        <p>view project</p>
        <p>view code</p>
      </div>
    </div>
  );
};

export default ProjectCard;
