// Component Imports
import Image from "../components/Common/Image";
import Button from "../components/Common/Button";
import SinWave from "../components/Common/SinWave";
// Image Imports
import serenity from "../assets/serenity.jpg";
import groupCompassion from "../assets/group-compassion.jpg";
import lovingCouple from "../assets/loving-couple.jpg";
import familyFun from "../assets/family-fun.jpg";
// Hook Imports
import useWidth from "../hooks/useWidth";

const Services: React.FC = (): React.ReactElement => {
    const isClamped = useWidth();

    return (
        <main>
            <h2>Our Services</h2>
            {isClamped && <SinWave />}
            <h3>We Treat Holistically.</h3>
            <p>
                No two persons’ stories are the same. The Lorikeet Collective
                Flock works with each client to create an individualized healing
                environment by harnessing your unique strengths, customizing
                treatment to suit your challenges, and by treating you—
            </p>
            <h3>...as a whole person.</h3>
            <div className="desktop-grid">
                <div>
                    <Image src={serenity} />
                    <h3>Individual Therapy</h3>
                    <p>
                        Private one-on-one counseling designed to help you talk
                        through personal issues, process thoughts and feelings,
                        develop coping skills, and gain new insights. Adults,
                        kids, and adolescents get individualized support for
                        holistic health, personal growth, and achieving personal
                        goals.
                    </p>
                </div>
                <div>
                    <Image src={groupCompassion} />
                    <h3>Group Therapy</h3>
                    <p>
                        Meeting with a small group in a therapeutic space to
                        discuss shared issues and feelings can foster connection
                        and personal growth and combat isolation. Being amongst
                        a healing community helps group members learn from one
                        another, receive feedback, and gather strength from
                        connectedness.
                    </p>
                </div>
                <div>
                    <Image src={lovingCouple} />
                    <h3>Relationship Therapy</h3>
                    <p>
                        All types of relationships can become stronger in a safe
                        environment by focusing on processing feelings,
                        improving communication, and building intimacy. Partners
                        learn to navigate conflicts and foster a relationship
                        based on trust through better understanding and
                        emotional connection.
                    </p>
                </div>
                <div>
                    <Image src={familyFun} />
                    <h3>Family Therapy</h3>
                    <p>
                        Therapy helps families of all shapes, sizes,
                        backgrounds, ages and dynamics learn how to communicate
                        clearly, solve problems, and foster a harmonious
                        environment. By addressing family interactions and and
                        working on issues affecting the entire family, family
                        therapy fosters connection and support.
                    </p>
                </div>
            </div>
            {isClamped && <SinWave />}
            <h2>Here's how we make healing happen:</h2>
            <ul>
                <li>Art Therapy</li>
                <li>Cognitive-Based Therapies (CBT, DBT, ACT, MBCT)</li>
                <li>Exposure-Response Prevention (ERP)</li>
                <li>Motivational Interviewing</li>
                <li>Narrative Therapy</li>
                <li>Nature-Assisted Therapy (Ecotherapy)</li>
                <li>Neurodiverse-Affirming Therapy</li>
                <li>Play Therapy</li>
                <li>Solution-Focused Brief Therapy</li>
                <li>Somatic and Body-Centered Healing</li>
            </ul>
            {!isClamped && <SinWave />}
            <h2>Do you have more questions?</h2>
            {/* <p>
                Reach out today to get more information on the many services we
                provide, or{" "}
                <Link to="/flock">
                    reach out directly to one of our talented therapists
                </Link>{" "}
                to schedule a free 15-minute consultation call to learn more
                about what treatment is right for you.
            </p> */}
            <Button link="/contact">Contact Us</Button>
        </main>
    );
};

export default Services;
