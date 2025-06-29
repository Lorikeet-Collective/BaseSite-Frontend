import Text from "../components/Common/Text";
import Image from "../components/Common/Image";
import SinWave from "../components/Common/SinWave";
import Dropdown from "../components/Common/Dropdown";
// Image imports
import lorikeets from "../assets/lorikeets.jpg";
import prideWalk from "../assets/pride-walk.jpg";
import welcomeSign from "../assets/welcome-sign.jpg";

const Philosophy: React.FC = (): React.ReactElement => (
  <main>
    <h2>Better therapy for clients and therapists</h2>
    <Image src={lorikeets} />
    <Text>
      Lorikeet Collective, PLLC. was founded on the principle that therapeutic
      spaces should inclusive and affirming for all LGBTQAI2S+, disabled,
      neurodiverse, BIPOC, and multiply marginalized folx— from those who find
      themselves looking for a safe place to heal to those called upon to heal
      others.
    </Text>
    <SinWave />
    <Image src={prideWalk} />
    <h3>Beyond Talk</h3>
    <Text>
      Mental health care is more than having a professional to help guide your
      journey. Truly equitable, accessible, and unifying therapy goes beyond the
      one-hour a week commitment, which is why our therapists take a
      community-first approach to treatment. Lorikeet Collective therapists
      center holistic community care by pledging to engage in political
      advocacy, facilitate mutual aid, and provide informed and affirming
      continuing education.
    </Text>
    <SinWave />
    <Image src={welcomeSign} />
    <Dropdown title="Which principles guide your therapeutic approach?">
      <p>
        Each clinician at Lorikeet Collective presents their own unique
        background, identities, skills, and specialties. We are united by our
        use of the healing justice framework, and common beliefs regarding human
        rights that impact peoples’ quality of living on a constant basis.
      </p>
      <ul>
        <li>Black, brown, and indigenous lives matter.</li>
        <li>There is no ethical consumption under capitalism.</li>
        <li>Harm reduction saves lives.</li>
        <li>
          A person with a uterus has a right to choose an abortion and/or
          permanent sterilization without limit or qualifying circumstances.
        </li>
        <li>Law enforcement does not belong in crisis care.</li>
        <li>Believe in science.</li>
        <li>
          Conversion therapy (anti-LGBTQIA2S+ or applied behavior analysis/ ABA)
          is inherently traumatic and therefore, abuse.
        </li>
        <li>Decriminalize sex work.</li>
        <li>Housing is a basic human right.</li>
        <li>Nobody is illegal on stolen land.</li>
        <li>Everyone is deserving and worthy of respect.</li>
      </ul>
    </Dropdown>
    <Dropdown title={`What is "healing justice"?'`}>
      <p>
        As one of its creators, Cara Page defines healing justice as work “that
        identifies how we can holistically respond to and intervene on
        intergenerational trauma and violence.” In systemically oppressed
        communities, healing justice is centered on drawing from historic
        examples in which we have resisted the whims of oppressors to not only
        survive, but thrive; this allows us to pay homage to the visionaries and
        activists who led to where we are today and transform generational
        trauma to facilitate collective healing as a community.
      </p>
    </Dropdown>
    <Dropdown title="Which demographics do you server?">
      <p>
        As a collective comprised largely of neurodiverse, queer, and disabled
        therapists, we utilize our unique intersection of lived experiences to
        deliver affirming, informed evidence-based interventions to those within
        our communities, across the lifespan.
      </p>
      <p>
        While this is a community near and dear to our heart, the Lorikeet
        Collective strives to promote inclusivity and accessibility. Our
        services are available to individuals of all identities and
        characteristics, and our clinicians pride themselves on their devotion
        to improving competency and quality of care for communities historically
        excluded from therapeutic spaces.
      </p>
    </Dropdown>
    <Dropdown title="In which states are you licensed to provide care?">
      <p>
        A therapy collective is a non-hierarchical group of mental health
        professionals. Therapy has the capability to heal and in a day and age
        where therapists are expected to put others before themselves, it’s no
        wonder burnout and turnover are not matters of “if,” but “when.”
      </p>
      <p>
        Whereas traditional group practices function with a typical supervisory
        hierarchy, here at Lorikeet Collective, our therapists are all equal
        partners. This means more equitable wages, no long hours, support in
        continued growth, and no productivity requirements.
      </p>
      <p>
        Happy, empowered therapists provide more effective therapy that produces
        a higher likelihood for positive client outcomes.
      </p>
    </Dropdown>
    <Dropdown title="What's the meaning behind your name?">
      <p>
        The namesake of our collective, rainbow lorikeets, are a species of
        parrot found in eastern Australia.
      </p>
      <p>
        Aside from their beautifully vivid plumage which naturally flaunts
        diversity and individuality, lorikeets are known for their tendency to
        commune in flocks, displaying a strong sense of togetherness,
        solidarity, and belonging. Lorikeets thrive in a variety of
        environments, symbolizing adaptability and resilience.
      </p>
      <p>
        Much like our community, lorikeets embody the message that love and
        authenticity can flourish in the face of oppressive environments.{" "}
      </p>
    </Dropdown>
  </main>
);

export default Philosophy;
