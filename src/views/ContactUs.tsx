// Component Imports
// import { Link } from "react-router";
import ContactForm from "../components/ContactForm/ContactForm";
import SinWave from "../components/Common/SinWave";
// Hook Imports
import useWidth from "../hooks/useWidth";

const ContactUs: React.FC = (): React.ReactElement => {
    const isClamped = useWidth();

    return (
        <main>
            <h2>Contact Us</h2>
            {isClamped && <SinWave />}
            <p>
                If you have questions that need answers, or are looking to
                inquire about services, please fill out the form below with a
                few details and we'll be in touch soon.
                {/* Alternatively, you can reach out to
            specific members of The Flock using the links found in each
            clinician’s bio or our administrative staff by using the Contact
            buttons found on the <Link to="/flock">Meet the Flock</Link> page. */}
            </p>
            <ContactForm />
        </main>
    );
};

export default ContactUs;
