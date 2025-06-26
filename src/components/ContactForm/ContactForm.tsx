import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Common/Button";
import Text from "../Common/Text";
import styles from "./ContactForm.module.css";

const ContactForm: React.FC = (): React.ReactElement => {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("it_email", "contact_us", form.current, {
          publicKey: "kvdRblQzkkoCjCkgd",
        })
        .then(() => console.log("SUCCESS!"))
        .catch((error) => console.log("FAILED...", error.text));
    }
  };

  return (
    <form className={styles.formContainer} ref={form} onSubmit={sendEmail}>
      <Text className={styles.info}>
        <span className={styles.required}>*</span> - Required Field
      </Text>
      <div className={styles.divider}>
        <label>
          Subject<span className={styles.required}>*</span>
        </label>
        <select name="subject" defaultValue={"General"} required>
          <option value="New Client">New Client</option>
          <option value="Insurance">Insurance</option>
          <option value="General">General</option>
        </select>
      </div>
      <div className={styles.rowDivider}>
        <div className={styles.divider}>
          <label>
            First Name<span className={styles.required}>*</span>
          </label>
          <input type="text" name="user_fname" />
        </div>
        <div className={styles.divider}>
          <label>
            Last Name<span className={styles.required}>*</span>
          </label>
          <input type="text" name="user_lname" />
        </div>
      </div>
      <div className={styles.divider}>
        <label>
          Email<span className={styles.required}>*</span>
        </label>
        <input
          type="email"
          name="user_email"
          placeholder="no1_client@example.com"
          required
        />
      </div>
      <div className={styles.divider}>
        <label>
          Message<span className={styles.required}>*</span>
        </label>
        <Text className={styles.info}>
          For your safety, security, and confidentiality, please do not put
          sensitive information in this form that could be used to identify you
          (i.e.-- date of birth, social security numbers, or protected health
          information).
        </Text>
        <textarea
          rows={5}
          name="user_message"
          placeholder="I would like more information about..."
          required
        />
      </div>
      <Button>SEND</Button>
    </form>
  );
};

export default ContactForm;
