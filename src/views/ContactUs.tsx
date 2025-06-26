import { Link } from "react-router";
import ContactForm from "../components/ContactForm/ContactForm";
import Text from "../components/Common/Text";
import Title from "../components/Common/Title";

const ContactUs: React.FC = (): React.ReactElement => (
  <main>
    <Title>Contact Us</Title>
    <Text>
      If you have questions that need answers, or are looking to inquire about
      services, please fill out the form below with a few details and we'll be
      in touch soon. Alternatively, you can reach out to specific members of The
      Flock using the links found in each clinician’s bio or our administrative
      staff by using the Contact buttons found on the{" "}
      <Link to="/flock">Meet the Flock</Link> page.
    </Text>
    <ContactForm />
  </main>
);

export default ContactUs;
