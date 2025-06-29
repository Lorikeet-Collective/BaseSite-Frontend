import BannerTitle from "../components/Common/BannerTitle";
import Text from "../components/Common/Text";
import Image from "../components/Common/Image";
import Button from "../components/Common/Button";
import SinWave from "../components/Common/SinWave";
// Image imports
import treeBloom from "../assets/tree-bloom.jpg";
import prideRally from "../assets/pride-rally.jpg";
import disabilityCompassion from "../assets/disability-compassion.jpg";
import diversityGathering from "../assets/diversity-gathering.jpg";
import prideProtest from "../assets/pride-protest.jpg";

const Home: React.FC = (): React.ReactElement => (
  <main>
    <BannerTitle src={treeBloom}>Welcome to the Collective</BannerTitle>
    <SinWave />
    <h2>Therapy for your community, by your community</h2>
    <Image src={prideRally} />
    <h3>Transforming LGBTQIA2S+ care</h3>
    <Text>
      We’re gender identity, expression, sexual orientation, and relationship
      orientation / ethical non-monogamy (ENM) / polyamorous (poly) competent
      and affirming, with a variety of lived experiences.
    </Text>
    <Text>
      We’re also sex-, kink-, and BDSM-positive, pro-choice, and believe sex
      work is work.
    </Text>
    <Image src={disabilityCompassion} />
    <h3>Celebrating disabilities</h3>
    <Text>
      We elevate individuality, equitable representation, empowerment,
      accessibility, and self-acceptance— not in spite of disability, but
      because of it.
    </Text>
    <Text>
      We offer inclusive therapy founded on the principle that disabled folx
      should feel safe to take up space in every space within their community
      without censorship.
    </Text>
    <Image src={diversityGathering} />
    <h3>Uplifting voices of color</h3>
    <Text>
      We honor our BIPOC, AAPI, Latinx / Hispanix and all non-White identifying
      communities by challenging systemic racial biases in and out of
      therapeutic spaces, advocating for racial, ethnic, and cultural equity in
      legislature, and driving accountability for our therapists to engage in
      continuing education by clinicians of color.
    </Text>
    <Text>
      We believe Black lives Matter and that nobody is illegal on stolen land.
    </Text>
    <SinWave />
    <h2>Who we are</h2>
    <Text>
      We’re here to do therapy not just differently: affordably, accessibly,
      de-colonially, and inclusively, from a framework of that centers healing
      justice.
    </Text>
    <Text>For community members, clients, and therapists.</Text>
    <Button link="/philosophy">LEARN MORE</Button>
    <Image src={prideProtest} />
    <SinWave />
    <h2>Keep Up with Us!</h2>
    <Text>
      As a community-driven collective of multiply marginalized folx, our
      mission is to connect directly with those who feel their identities are
      otherwise overlooked or erased, and remind those who would oppress us that
      we aren’t going anywhere.
    </Text>
    <Text>Look for us out-and-about near you!</Text>
  </main>
);

export default Home;
