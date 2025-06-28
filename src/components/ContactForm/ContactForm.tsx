import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Text from "../Common/Text";
import Label from "../Inputs/Label";
import Input from "../Inputs/Input";
import Select from "../Inputs/Select";
import TextArea from "../Inputs/TextArea";
import Button from "../Common/Button";
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
        <span style={{ color: "red" }}>*</span> - Required Field
      </Text>
      <div className={styles.divider}>
        <Label isRequired>Subject</Label>
        <Select inputName="subject" defaultValue="General" isRequired>
          <option value="New Client">New Client</option>
          <option value="Insurance">Insurance</option>
          <option value="General">General</option>
        </Select>
      </div>
      <div className={styles.rowDivider}>
        <div className={styles.divider}>
          <Label isRequired>First Name</Label>
          <Input inputName="user_fname" isRequired />
        </div>
        <div className={styles.divider}>
          <Label isRequired>Last Name</Label>
          <Input inputName="user_lname" isRequired />
        </div>
      </div>
      <div className={styles.divider}>
        <Label isRequired>Email</Label>
        <Input
          type="email"
          inputName="user_email"
          placeholder="no1_client@example.com"
          isRequired
        />
      </div>
      <div className={styles.divider}>
        <Label isRequired>Message</Label>
        <TextArea
          inputName="user_message"
          placeholder="I would like more information about..."
          isRequired
        />
        <Text className={styles.info}>
          For your safety, security, and confidentiality, please do not put
          sensitive information in this form that could be used to identify you
          (i.e.-- date of birth, social security numbers, or protected health
          information).
        </Text>
      </div>
      <Button>SEND</Button>
    </form>
  );
};

export default ContactForm;
