import BasicContainer from "../components/Common/BasicContainer";
import SinWave from "../components/Common/SinWave";
import Image from "../components/Common/Image";
// import Button from "../components/Common/Button";
// import styles from "./Philosophy.module.css";

const Philosophy: React.FC = (): React.ReactElement => {
  return (
    <main>
      <BasicContainer
        header={"Better therapy for clients and therapists alike"}
        useSubHeader={false}
        body={[
          `Lorikeet Collective, PLLC. was founded on the principle
           that therapeutic spaces should inclusive and affirming 
           for all LGBTQAI2S+, disabled, neurodiverse, BIPOC, 
           and multiply marginalized folx— from those who find 
           themselves looking for a safe place to heal to those 
           called upon to heal others.`,
        ]}
      />
      <Image
        img={
          "https://images.squarespace-cdn.com/content/v1/67d14d44c6a49e3d4d030b00/1743928005549-U658USYAB90BEF90PHM8/unsplash-image-rIRM66unoW4.jpg?format=1500w"
        }
      />
      <SinWave />
      <BasicContainer
        img={
          "https://images.squarespace-cdn.com/content/v1/67d14d44c6a49e3d4d030b00/1745885154959-WRCI5BBUXBJ08HA8J0YO/unsplash-image-AqK0Sw2Gj-c.jpg?format=1500w"
        }
        header={"Beyond Talk"}
        body={[
          `Mental health care is more than having a professional
           to help guide your journey. Truly equitable, accessible, 
           and unifying therapy goes beyond the one-hour a week 
           commitment, which is why our therapists take a community-first 
           approach to treatment. Lorikeet Collective therapists center 
           holistic community care by pledging to engage in political 
           advocacy, facilitate mutual aid, and provide informed and 
           affirming continuing education.`,
        ]}
      />
      <SinWave />
      <Image
        img={
          "https://images.squarespace-cdn.com/content/v1/67d14d44c6a49e3d4d030b00/1745885072291-YHSA1IT3UCL0QH1HPXJW/unsplash-image-7XGtYefMXiQ.jpg?format=1500w"
        }
      />
    </main>
  );
};

export default Philosophy;
