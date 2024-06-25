import styles from './Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({ text, disabled }) => {
  return (
    <button disabled={disabled} type="submit" className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
