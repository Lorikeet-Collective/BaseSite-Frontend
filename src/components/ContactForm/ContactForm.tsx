// Component Imports
import emailjs from "@emailjs/browser";
import Button from "../Common/Button";
import styles from "./ContactForm.module.css";
// Hook Imports
import { useRef } from "react";

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
            <p className={styles.info}>
                <span className="required" /> - Required Field
            </p>
            <div className={styles.colDivider}>
                <label className="required" htmlFor="subject">
                    Subject
                </label>
                <select
                    id="subject"
                    name="subject"
                    defaultValue="General"
                    required
                >
                    <option value="New Client">New Client</option>
                    <option value="Insurance">Insurance</option>
                    <option value="General">General</option>
                </select>
            </div>
            <div className={styles.rowDivider}>
                <div className={styles.colDivider}>
                    <label className="required" htmlFor="user_fname">
                        First Name
                    </label>
                    <input
                        id="user_fname"
                        type="text"
                        name="user_fname"
                        required
                    />
                </div>
                <div className={styles.colDivider}>
                    <label className="required" htmlFor="user_lname">
                        Last Name
                    </label>
                    <input
                        id="user_lname"
                        type="text"
                        name="user_lname"
                        required
                    />
                </div>
            </div>
            <div className={styles.colDivider}>
                <label className="required" htmlFor="user_email">
                    Email
                </label>
                <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder="no1_client@example.com"
                    required
                />
            </div>
            <div className={styles.colDivider}>
                <label className="required" htmlFor="user_message">
                    Message
                </label>
                <textarea
                    id="user_message"
                    rows={5}
                    name="user_message"
                    placeholder="I would like more information about..."
                    required
                ></textarea>
                <p className={styles.info}>
                    For your safety, security, and confidentiality, please do
                    not put sensitive information in this form that could be
                    used to identify you (i.e.-- date of birth, social security
                    numbers, or protected health information).
                </p>
            </div>
            <Button>SEND</Button>
        </form>
    );
};

export default ContactForm;
