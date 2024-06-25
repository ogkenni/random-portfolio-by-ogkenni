import styles from './Contact.module.css';
import Button from '../../layout/button/Button';
import errImg from '../../assets/Group 20.png';
import { Formik } from 'formik';
import Header from '../../layout/header/Header';
import circle from '../../assets/Group.png';
const Contact = () => {
  return (
    <section className={styles.contact_container}>
      <div className={styles.contact_card}>
        <div className={styles.contact_text}>
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required, Kindly enter an email';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Sorry, invalid format here';
            }
            return errors;
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">
                <input type="text" placeholder="NAME" />
              </label>
              <label htmlFor="email">
                <input
                  type="text"
                  placeholder="EMAIL"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  style={
                    errors.email && touched.email
                      ? { borderBottom: '2px solid #ff6f5b' }
                      : null
                  }
                />
                {errors.email && touched.email && (
                  <img
                    src={errImg}
                    alt="error image"
                    className={styles.error}
                  />
                )}
              </label>
              <small>{errors.email && touched.email && errors.email}</small>
              <label htmlFor="message">
                <textarea
                  name="message"
                  placeholder="MESSAGE"
                  rows={4}
                  id="text"
                ></textarea>
              </label>
              <div className={styles.button}>
                <Button disabled={isSubmitting} text="SEND MESSAGE" />
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div className={styles.circle}>
        <img src={circle} alt="circle" />
      </div>
      <hr />
      <div className={styles.footer}>
        <Header />
      </div>
    </section>
  );
};

export default Contact;
