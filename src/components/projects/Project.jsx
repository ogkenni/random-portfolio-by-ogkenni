import ProjectData from '../../../data';
import styles from './Project.module.css';
import ProjectCard from '../project_card/ProjectCard';
import Button from '../../layout/button/Button';
const Project = () => {
  return (
    <section className={styles.project_container}>
      <div className={styles.project_content}>
        <h2>Projects</h2>
        <Button text="Contact Me" className={styles.button} />
      </div>
      <div className={styles.project_card}>
        {ProjectData.map((item, id) => {
          return (
            <ProjectCard
              key={id}
              img={item.img}
              text={item.text}
              tagOne={item.tagOne}
              tagTwo={item.tagTwo}
              tagThree={item.tagThree}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
