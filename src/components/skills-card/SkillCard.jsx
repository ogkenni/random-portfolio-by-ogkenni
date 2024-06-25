import styles from "./SkillCard.module.css"
// eslint-disable-next-line react/prop-types
const SkillCard = ({title, text}) => {
  return (
    <div className={styles.skills_card}>
        <h2>{title}</h2>
    <p>{text}</p>
    </div>
   
  )
}

export default SkillCard