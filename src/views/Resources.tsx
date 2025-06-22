import Title from "../components/Common/Title";
import Image from "../components/Common/Image";
import Text from "../components/Common/Text";
import Button from "../components/Common/Button";
import Dropdown from "../components/Common/Dropdown";
import SinWave from "../components/Common/SinWave";
// Image imports
import lgbtNationalLogo from "../assets/logos/lgbt-national-help-center-logo.png";
import blacklineLogo from "../assets/logos/blackline-logo.png";
import transLifelineLogo from "../assets/logos/trans-lifeline-logo.png";
import strongHeartsLogo from "../assets/logos/stronghearts-logo.png";
import childHelpLogo from "../assets/logos/childhelp-logo.png";
import desiLogo from "../assets/logos/desi-logo.png";
import wildFlowerLogo from "../assets/logos/wildflower-logo.png";
import projectLetsLogo from "../assets/logos/project-lets-logo.png";
import fireWeedLogo from "../assets/logos/fireweed-collective-logo.png";
import projectHealLogo from "../assets/logos/project-heal-logo.png";
import thriveLogo from "../assets/logos/thrive-lifeline-logo.png";
import nationalEmpowerLogo from "../assets/logos/national-empowerment-center-logo.png";

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
      in Connecticut, police officers are only required to undergo{" "}
      <u>40 hours</u> of Crisis Intervention Team (CIT) training. That amounts
      to 2% of their{" "}
      <a
        href="https://portal.ct.gov/post/basictraining-division/entry-certification--renewal-requirements?language=en_US"
        target="_blank"
      >
        1,800-hour minimum training.
      </a>
    </Text>
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
    <div>
      <Title>Emergency Resources</Title>
      <Text>For immediate access to support when you need it. Age 18+.</Text>
      <Dropdown title="LGBT National Talkline and Coming Out Hotline">
        <Image fit href="https://lgbthotline.org/" src={lgbtNationalLogo} />
        <Text>
          Call{" "}
          <a href="tel:8888434564" target="_blank">
            888-843-4564
          </a>{" "}
          for LGBT National Hotline to access crisis support for ages 18+,{" "}
          <a href="tel:8886885428" target="_blank">
            888-688-5428
          </a>{" "}
          for LGBT National Coming Out Support Line for coming out support, or{" "}
          <a href="tel:8882347243" target="_blank">
            888-234-7243
          </a>{" "}
          for LGBT National Senior Hotline to access crisis support for ages 50+{" "}
          <b>Mondays through Fridays 2pm-11pm EST and Saturdays 12pm-5pm EST</b>
          , or{" "}
          <a
            href="https://volunteerlogin.org/chat/chat.php?groupChatTransferFlag=0&groupChatCallerId=H5aMQje1elT9u6eaL0YI"
            target="_blank"
          >
            chat one-on-one
          </a>{" "}
          with peers online.
          <ul>
            <li>
              Live crisis, coming out, and{" "}
              <a
                href="https://lgbthotline.org/self-harm-prevention/"
                target="_blank"
              >
                self-harm prevention/ safety planning
              </a>{" "}
              support for LGBTQIA2S+ of all ages across the USA
            </li>
            <li>
              Offers information and definitions for folx looking to learn more
              about sexuality and gender, as well as directories of books and
              film for uplifting queer identities
            </li>
            <li>Confidential and anonymous support</li>
          </ul>
        </Text>
      </Dropdown>
      <Dropdown title="Call BlackLine">
        <Image fit href="https://www.callblackline.com/" src={blacklineLogo} />
        <Text>
          Call or text{" "}
          <a href="sms:18006045841" target="_blank">
            +1-800-604-5841
          </a>{" "}
          from anywhere 24/7/365 to access the crisis line, or access crisis
          supports directly from the app through either the{" "}
          <a
            href="https://apps.apple.com/us/app/call-blackline/id6474581521"
            target="_blank"
          >
            App Store
          </a>{" "}
          or{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.tse.cbl.call_black_line&pcampaignid=web_share&pli=1"
            target="_blank"
          >
            Google Play
          </a>
          .
          <ul>
            <li>
              Black, Black LGBTQI, Brown, Native and Muslim community support
            </li>
            <li>
              Immediate support for difficult encounters with police or
              vigilantes
            </li>
            <li>Anonymous and confidential</li>
          </ul>
        </Text>
      </Dropdown>
      <Dropdown title="Trans LifeLine">
        <Image fit href="https://translifeline.org/" src={transLifelineLogo} />
        <Text>
          Call{" "}
          <a href="tel:18775658860" target="_blank">
            +1-877-565-8860
          </a>{" "}
          from the US to access the crisis line{" "}
          <b>Mondays through Fridays 1pm–9pm EST</b> (10am-6pm PST | 11am–7pm
          MST | 12pm–8pm CST).
          <ul>
            <li>LGBTQIA2S+, BIPOC affirming</li>
            <li>Crisis and peer supports</li>
            <li>
              Anonymous and confidential crisis support in English y en Español
            </li>
          </ul>
        </Text>
        <Text>
          <b>
            NOTE: Trans Lifeline is unavailable during{" "}
            <a href="https://translifeline.org/hotline/#faq" target="_blank">
              select recognized holidays.
            </a>
          </b>
        </Text>
      </Dropdown>
      <Dropdown title="StrongHearts Native Helpline">
        <Image
          fit
          href="https://strongheartshelpline.org/"
          src={strongHeartsLogo}
        />
        <Text>
          Call or text{" "}
          <a href="sms:18447628483" target="_blank">
            1+844-7NATIVE
          </a>{" "}
          (762-8483) from the US, or chat online to access the helpline
          24/7/365.
          <ul>
            <li>Alaskan Natives and Native Americans community support </li>
            <li>
              Immediate support for intimate partner violence or sexual assault
            </li>
            <li>Anonymous and confidential</li>
          </ul>
        </Text>
      </Dropdown>
    </div>
    <div>
      <Title>For Kids & Teens</Title>
      <Text>Crisis services and resources for under 18 years.</Text>
      <Text>
        <b>
          NOTE: Due to mandatory reporting laws, in specific instances of abuse
          or a clear concern of an in-progress or imminent suicide, operators
          may need to contact a child welfare agency or emergency service.
          Please visit each organization’s Terms of Service or Privacy Policy to
          learn more.
        </b>
      </Text>
      <Dropdown title="Childhelp National Child Abuse Hotline">
        <Image fit href="https://www.childhelp.org/" src={childHelpLogo} />
        <Text>
          Text “HELP” to{" "}
          <a href="sms:18004224453" target="_blank">
            +1-800-422-4453
          </a>{" "}
          or{" "}
          <a href="https://www.childhelp.org/contact/" target="_blank">
            chat online
          </a>{" "}
          to access crisis support throughout anywhere 24/7/365.
          <ul>
            <li>
              Crisis support for all youth experiencing abuse, neglect, or
              mistreatment
            </li>
            <li>
              Helps connect children and families to local support services, and
              provides online educational and supportive materials
            </li>
            <li>
              Confidential and anonymous support available in over 170 different
              language translations
            </li>
          </ul>
        </Text>
        <Text>
          <b>
            NOTE: Call feature is NOT anonymous and may result in reporting in
            specific instances. Use with caution.
          </b>
        </Text>
      </Dropdown>
      <Dropdown title="LGBT National Youth Talkline">
        <Image fit href="https://lgbthotline.org/" src={lgbtNationalLogo} />
        <Text>
          Call{" "}
          <a href="tel:18002467743" target="_blank">
            +1-800-246-7743
          </a>{" "}
          to access crisis support{" "}
          <b>Mondays through Fridays 2pm-11pm EST and Saturdays 12pm-5pm EST</b>
          , or{" "}
          <a
            href="https://volunteerlogin.org/chat/chat.php?groupChatTransferFlag=0&groupChatCallerId=gPWex3gSxNDoZv3pEAgZ"
            target="_blank"
          >
            chat one-on-one
          </a>{" "}
          with peers online.
          <ul>
            <li>
              Crisis and coming out support for all LGBTQIA2S+ youth across the
              USA
            </li>
            <li>
              Connects youth to nation-wide queer-affirming resources and
              education and hosts{" "}
              <a href="https://lgbthotline.org/youthchatrooms/" target="_blank">
                online chatrooms
              </a>{" "}
              for safe and moderated peer support spaces
            </li>
            <li>Confidential and anonymous support.</li>
          </ul>
        </Text>
      </Dropdown>
    </div>
    <div>
      <Title>Non-Crisis Peer Support</Title>
      <Text>For when you just need someone who gets it.</Text>
      <Dropdown title="DEQH · DESI LGBTQ+ Helpline for South Asians">
        <Image fit href="https://www.deqh.org/" src={desiLogo} />
        <Text>
          Write to the contact form online or call{" "}
          <a href="tel:19083673374" target="_blank">
            +1-908-367-3374
          </a>{" "}
          for peer support <b>Thursdays and Sundays from 8pm-10pm EST</b>{" "}
          (5pm-7PM PST).
          <ul>
            <li>
              LGBQ/TGNB+ South Asian community support and connection throughout
              USA
            </li>
            <li>
              Same-day caller support, or support via online form within 1 week
            </li>
            <li>Anonymous, confidential non-crisis support</li>
          </ul>
        </Text>
      </Dropdown>
      <Dropdown title="Wildflower Alliance">
        <Image
          fit
          href="https://wildfloweralliance.org/"
          src={wildFlowerLogo}
        />
        <Text>
          Call{" "}
          <a href="tel:18884074515" target="_blank">
            +1-888-407-4515
          </a>{" "}
          for peer support{" "}
          <b>
            Mondays through Thursdays 7pm-9pm EST or Fridays through Sundays
            7pm-10pm EST.
          </b>
          <ul>
            <li>
              Affirming and inclusive peer-to-peer free and paid supports for
              individuals with mental health challenges, serious mental
              illnesses (SMI), or psychiatric disabilities
            </li>
            <li>7-day peer respite in Northampton, MA</li>
            <li>
              Confidential non-crisis support in English, Español, and American
              Sign Language
            </li>
          </ul>
        </Text>
        <Text>
          <b>
            NOTE: Voicemails are not monitored regardless of operating hours.
          </b>
        </Text>
      </Dropdown>
      <Dropdown title="Project LETS">
        <Image fit href="https://projectlets.org/" src={projectLetsLogo} />
        <Text>
          Text{" "}
          <a href="sms:14014002905" target="_blank">
            +1-401-400-2905
          </a>{" "}
          for urgent support <b>Mondays through Saturdays 10am-4pm EST</b>,
          submit the{" "}
          <a href="https://form.jotform.com/250564539905060" target="_blank">
            contact form
          </a>{" "}
          online, or email{" "}
          <a href="mailto:support@projectlets.org" target="_blank">
            support@projectlets.org
          </a>{" "}
          to request support.
          <ul>
            <li>
              Supporting all folx at urgent risk of experiencing psychiatric
              incarceration
            </li>
            <li>
              Peer mental health advocacy mentors and free public mental health
              education available
            </li>
            <li>
              Anti-ableism and harm reduction training materials for schools,
              families, and friends on providing support during crises
            </li>
          </ul>
        </Text>
      </Dropdown>
      <Dropdown title="Fireweed Collective">
        <Image fit href="https://fireweedcollective.org/" src={fireWeedLogo} />
        <Text>
          Join the closed{" "}
          <a href="https://www.facebook.com/groups/2394863930/" target="_blank">
            Facebook
          </a>{" "}
          group for access to peer support online or register for support groups
          on the{" "}
          <a
            href="https://fireweedcollective.org/support-groups/"
            target="_blank"
          >
            Groups page.
          </a>
          <ul>
            <li>
              Affinity and peer support online spaces held for 60-90 minutes
              weekly for one month (available via sliding scale)
            </li>
            <li>
              Free mental health education and mutual aid through the Healing
              Justice framework
            </li>
            <li>Crisis toolkits and resources available to the public</li>
          </ul>
        </Text>
      </Dropdown>
    </div>
    <div>
      <Title>Information & Assistance</Title>
      <Text>For when you don’t know where to start looking.</Text>
      <Dropdown title="Project HEAL">
        <Image
          fit
          href="https://www.theprojectheal.org/"
          src={projectHealLogo}
        />
        <Text>
          Visit each respective service page for specific contact information or
          utilize the{" "}
          <a href="https://www.theprojectheal.org/contact" target="_blank">
            online contact form
          </a>{" "}
          for direct communication.
          <ul>
            <li>
              Inclusive care platform to provide education on eating disorders
            </li>
            <li>
              Offers assistance with treatment program placements, cash
              assistance, meal support, group therapies, and assessment
            </li>
            <li>
              Excellent for finding{" "}
              <a
                href="https://www.theprojectheal.org/free-eating-disorder-support-groups"
                target="_blank"
              >
                support groups
              </a>
              , establishing services, or navigating insurance coverage issues
            </li>
          </ul>
        </Text>
        <Text>
          <b>
            WARNING: Project HEAL encourages use of the Crisis Text Line (CTL)
            for crisis support. CTL operators are trained to dispatch crisis
            services with or without caller consent. We recommend utilizing the
            Emergency Resources listed at the top of this page instead.
          </b>
        </Text>
      </Dropdown>
      <Dropdown title="THRIVE Lifeline">
        <Image fit href="https://thrivelifeline.org/" src={thriveLogo} />
        <Text>
          Navigate to the website to access services.
          <ul>
            <li>
              LGBTQIA2S+, BIPOC, and neurodiverse affirming support for ages
              18+.
            </li>
            <li>
              Partnership through{" "}
              <a
                href="https://strongeruwellness.com/services/stubborn-survivors/"
                target="_blank"
              >
                Stronger U
              </a>{" "}
              for community-based support that doesn’t turn folx away for
              inability to pay.
            </li>
            <li>
              Provides free coping skill guides and Discord-based support groups
              for support.
            </li>
          </ul>
        </Text>
        <Text>
          <b>
            NOTE: THRIVE’s crisis line is currently not available. Please
            utilize another listed service for this purpose.
          </b>
        </Text>
      </Dropdown>
      <Dropdown title="National Empowerment Center">
        <Image fit href="https://power2u.org/" src={nationalEmpowerLogo} />
        <Text>
          Utilize the{" "}
          <a href="https://power2u.org/contact/" target="_blank">
            online contact form
          </a>{" "}
          for direct communication.
          <ul>
            <li>
              Neurodiversity and SMI educational platform for building community
              care
            </li>
            <li>
              Directories of national peer respite houses and{" "}
              <a href="https://www.warmline.org/" target="_blank">
                peer-run warmlines
              </a>{" "}
              provided
            </li>
            <li>
              Excellent for finding{" "}
              <a
                href="https://www.theprojectheal.org/free-eating-disorder-support-groups"
                target="_blank"
              >
                support groups
              </a>
              , establishing services, or navigating insurance coverage issues
            </li>
          </ul>
        </Text>
      </Dropdown>
    </div>
  </main>
);

export default Resources;
