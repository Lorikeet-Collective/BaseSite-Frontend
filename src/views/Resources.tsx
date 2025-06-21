import Title from "../components/Common/Title";
import Image from "../components/Common/Image";
import Text from "../components/Common/Text";
import Button from "../components/Common/Button";
import SinWave from "../components/Common/SinWave";

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
    <SinWave />
    <Title>Emergency Resources</Title>
    <Text>For immediate access to support when you need it. Age 18+.</Text>
    <Text>
      Looking for resources for under age 18? Scroll down to “For Kids & Teens.”
    </Text>
    <SinWave />
    <Image
      fit
      src="https://images.squarespace-cdn.com/content/v1/67d14d44c6a49e3d4d030b00/8cccb2a2-c7fe-4ac1-ac44-2729fdd1bbbb/lgbt-branding_logo-horiz-large.png?format=1500w"
    />
    <Title subTitle>LGBT National Talkline and Coming Out Hotline:</Title>
    <Text>
      Call <a href="tel:8888434564">888-843-4564</a> for LGBT National Hotline
      to access crisis support for ages 18+,{" "}
      <a href="tel:8886885428">888-688-5428</a> for LGBT National Coming Out
      Support Line for coming out support, or{" "}
      <a href="tel:8882347243">888-234-7243</a> for LGBT National Senior Hotline
      to access crisis support for ages 50+{" "}
      <b>Mondays through Fridays 2pm-11pm EST and Saturdays 12pm-5pm EST</b>, or{" "}
      <a href="https://volunteerlogin.org/chat/chat.php?groupChatTransferFlag=0&groupChatCallerId=H5aMQje1elT9u6eaL0YI">
        chat one-on-one
      </a>{" "}
      with peers online.
      <ul>
        <li>
          Live crisis, coming out, and{" "}
          <a href="https://lgbthotline.org/self-harm-prevention/">
            self-harm prevention/ safety planning
          </a>{" "}
          support for LGBTQIA2S+ of all ages across the USA
        </li>
        <li>
          Offers information and definitions for folx looking to learn more
          about sexuality and gender, as well as directories of books and film
          for uplifting queer identities
        </li>
        <li>Confidential and anonymous support</li>
      </ul>
    </Text>

    <SinWave />
  </main>
);

export default Resources;
