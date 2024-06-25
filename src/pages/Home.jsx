import Contact from '../components/contact/Contact';
import Hero from '../components/hero/Hero';
import Project from '../components/projects/Project';
import Skills from '../components/skills/Skills';
import Header from '../layout/header/Header';
import styles from './Home.module.css';
const Home = () => {
  return (
    <div className={styles}>
      <Header />
      <Hero />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
