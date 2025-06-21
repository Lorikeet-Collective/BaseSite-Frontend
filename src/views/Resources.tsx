import Title from "../components/Common/Title";
import Image from "../components/Common/Image";
import Text from "../components/Common/Text";
import Button from "../components/Common/Button";

const Resources: React.FC = (): React.ReactElement => (
  <main>
    <Title>Non-Carceral Resources</Title>
    <Button
      external
      link="https://www.tac.org/criminalization/#:~:text=People%20with%20untreated%20mental%20illness%20are%2016%20times%20more%20likely,by%20the%20Treatment%20Advocacy%20Center."
    >
      LEARN WHY THIS MATTERS
    </Button>
    <Text>
      We believe everyone should have free, confidential access to mental health
      support anytime, anywhere, by people who understand and are knowledgeable
      in providing support.
    </Text>
    <Text>
      This is what folx expect when dialing 911, 988, or 211, but often not what
      they receive for support. Operators for these hotlines are trained to
      dispatch law enforcement— in our opinion, more often than necessary— and
      in Connecticut, police officers are only required to undergo 40 hours of
      Crisis Intervention Team (CIT) training. That amounts to 2% of their
      1,800-hour minimum training.
    </Text>
    <Text>You deserve better.</Text>
    <Text>
      In a mental health emergency, instead of calling 911, 988, or 211, contact
      one of the Emergency Resources listed below. In the event you aren’t able
      to reach a live person, try another resource— don’t give up. If you are
      experiencing a life-threatening physical health emergency, proceed to your
      local emergency room for immediate attention.
    </Text>
    <Text>
      <b>
        Clicking the links below will open a new tab. Before use, we strongly
        recommend you review any third party’s privacy policies for more info on
        mandatory reporting, confidentiality, and security.
      </b>
    </Text>
    <Title>Emergency Resources</Title>
    <Text>For immediate access to support when you need it. Age 18+.</Text>
    <Text>
      Looking for resources for under age 18? Scroll down to “For Kids & Teens.”
    </Text>
    <Image fit src="https://images.squarespace-cdn.com/content/v1/67d14d44c6a49e3d4d030b00/8cccb2a2-c7fe-4ac1-ac44-2729fdd1bbbb/lgbt-branding_logo-horiz-large.png?format=1500w" />
  </main>
);

export default Resources;
