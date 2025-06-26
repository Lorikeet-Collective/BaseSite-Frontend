import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Common/Button";
// import styles from "./ContactForm.module.css";

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
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <label>Subject</label>
        <input type="text" name="user_title" />
      </div>
      <div>
        <label>Name</label>
        <input type="text" name="user_name" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="user_email" />
      </div>
      <div>
        <label>Message</label>
        <textarea name="user_message" />
      </div>
      <Button isSmall>SEND</Button>
    </form>
  );
};

export default ContactForm;
