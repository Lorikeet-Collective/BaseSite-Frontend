import Dropdown from "../components/Common/Dropdown";
import Video from "../components/Common/Video";

const Insurance: React.FC = (): React.ReactElement => (
  <main>
    <h2>Insurance FAQs</h2>
    <Video src="https://www.youtube.com/embed/-wpHszfnJns?si=9Abv1LaFGbBYuOkt" />
    <p>
      Having trouble understanding insurance policy jargon? Check out this video
      from Brian David Gilbert to learn more about various commonly-used health
      insurance terms!
    </p>
    <Dropdown title="Which insurances do you take?">
      <p>
        We’re always expanding the insurances we accept! To see an up-to-date
        list of which insurances your specific therapist accepts, view their bio
        on the Meet the Flock page!
      </p>
      <p>We’re currently in network with:</p>
      <ul>
        <li>Aetna</li>
        <li>Anthem/ BCBS</li>
        <li>Cigna</li>
        <li>CT Medicaid/ HUSKY</li>
        <li>Optum</li>
        <li>UnitedHealthcare/ UHC</li>
        <li>ConnectiCare</li>
        <li>Magellan*</li>
      </ul>
      <p>
        <b>
          *Please note that only our independently licensed clinicians
          (LCSW/LISW/LICSW, LMFT, LPC) are able to accept Magellan.
        </b>
      </p>
    </Dropdown>
    <Dropdown title="You don't accept my insurance. What are my options?">
      <p>
        Reach out to us! We’re always looking to make therapy more accessible
        and affordable for communities who need it.
      </p>
      <p>
        If we aren’t able to accept your insurance, we have options for
        providing care:
      </p>
      <ul>
        <li>
          <b>Out-Of-Network Reimbursement:</b> You pay the full price of each
          session and submit your receipt (also known as a “Super Bill”) as a
          claim to your insurance provider, who then reimburses the difference
          to you directly. This is a good option for folx who:
          <ul>
            <li>
              Have comfortable, reliable access to financial resources; AND
            </li>
            <li>
              Have an insurance policy that offers Out-Of-Network benefits; AND
            </li>
            <li>Want to financially support our work.</li>
          </ul>
        </li>
        <li>
          <b>Sliding Scale:</b> If you are insured, you are opting out of using
          your insurance plan and paying a reduced price per session out of
          pocket. To determine eligibility, you and your clinician will complete
          an assessment for our Sliding Scale program. Due to legal
          restrictions, sliding scale payments cannot be submitted to insurance
          for reimbursement. This is a good option for folx who:
          <ul>
            <li>Have limited access to financial resources; AND</li>
            <li>
              Have an existing insurance policy with a high deductible, limited
              mental health benefits, or no Out-Of-Network benefits, OR are
              uininsured; AND
            </li>
            <li>
              Meet eligibility requirements for our Sliding Scale program.
            </li>
          </ul>
        </li>
        <li>
          <b>Pro-Bono:</b> To support our community, we have limited
          availability for clients to receive our therapeutic services free of
          charge. We are honored to provide pro bono services to select
          individuals who:
          <ul>
            <li>Have severely restricted access to financial resources; AND</li>
            <li>
              Are under-insured, uninsured, OR are insured under a carrier that
              is chronically under-served within our community (i.e.- Medicare);
              AND
            </li>
            <li>
              Meet eligibility for our Sliding Scale program, but are unable to
              pay the reduced fee; AND
            </li>
            <li>Are seeking treatment for current mental health challenges.</li>
          </ul>
        </li>
        <li>
          <b>Out-Of-Pocket:</b> You pay the full price of each session either in
          one payment or in multiple scheduled, smaller payments until the fee
          is paid in full (also known as a “Payment Plan”). Regardless of
          whether you are insured, our work is not reported to your insurance as
          they won’t be covering costs. This is a good option for folx who:
          <ul>
            <li>
              Have comfortable, reliable access to abundant financial resources;
              AND
            </li>
            <li>Prefer to work without us reporting to your insurance; AND</li>
            <li>Want to financially support our work.</li>
          </ul>
        </li>
      </ul>
    </Dropdown>
    <Dropdown title="How is sliding scale decided?">
      <p>
        Eligibility for our Sliding Scale program is determined based on an
        assessment conducted with your therapist either at time of intake or
        when you experience a significant change in your ability to pay for
        services. This assessment includes questions regarding:
      </p>
      <ul>
        <li>your current insurance benefits (if you are insured);</li>
        <li>your current level of financial security; AND</li>
        <li>your current income.</li>
      </ul>
      <p>
        If you are found eligible, your Lorikeet Collective therapist will
        discuss with you payment options. For more information or wish to apply
        for our Sliding Scale program, please contact us.
      </p>
    </Dropdown>
    <Dropdown title="What are your rates?">
      <p>
        We at Lorikeet Collective have seen how rising costs of living have
        impacted goods and services across so many industries, and mental health
        care is no different. We’re here to do things differently, because we
        take pride in being accessible for our community while supporting our
        therapists. This means lower rates for clients and higher returns to
        clinicians.
      </p>
      <p>Our rates are as follows as of 4/28/2025:</p>
      <ul>
        <li>
          <b>$150</b> per clinical hour for provisionally-licensed therapists
          (LMSWs/LSWs, LPCAs, LMFTAs)
        </li>
        <li>
          <b>$200</b> per clinical hour for independently-licensed therapists
          (LCSWs/LISWs, LPCs, LMFTs)
        </li>
        <li>
          <b>$200</b> for an initial 60-minute psychiatric assessment
        </li>
        <li>
          <b>$110</b> for group therapy sessions
        </li>
        <li>
          <b>$0</b> for single-session gender affirming care assessments and
          letters
        </li>
      </ul>
    </Dropdown>
    <Dropdown title="Can Lorikeet Collective adjust my copay?">
      <p>
        Legally, we are not allowed to alter, discount, or increase your
        insurance coverage, copay responsibility, applicable deductibles, or any
        fees associated. If you are experiencing financial hardship and cannot
        afford your therapy, please speak with your therapist.
      </p>
    </Dropdown>
    <Dropdown title="Insurance is confusing. How do I know if a service is covered?">
      <p>
        Call your carrier or log into your insurance carrier’s official portal
        to find more information specific to your policy. Please note that while
        it can be helpful to find information online through forums or Google,
        it is important to know that coverage may vary due to region,
        restrictions, opt-in selections, and other factors.
      </p>
    </Dropdown>
    <Dropdown title="How do I recieve invoices?">
      <p>
        Our electronic health record, Sessions Health, automatically sends
        statements, bills, or super bills both in the client portal and to your
        email. All balances and copays can be paid directly in the client
        portal.
      </p>
    </Dropdown>
    <Dropdown title="My copay is $0. Why do you need my credit card?">
      <p>
        Long story short: we don’t. We as a practice don’t require your credit
        card to be on file to receive services if you have a $0 copay. However,
        our electronic health platform Sessions Health still may request your
        credit card to be placed on file automatically. At this time, this can
        be skipped during the process of submitting onboarding documents.
      </p>
      <p>
        If you anticipate your insurance changing, please let us know so we can
        update your information!
      </p>
    </Dropdown>
    <Dropdown title="What information does my insurance have access to?">
      <p>
        Due to how insurance companies operate in mental health spaces within
        the US, your insurance requests information from each session in order
        to determine whether the services rendered fall within your policy
        coverage. That means your insurance provider is able to access
        documentation from each session including but not limited to:
      </p>
      <ul>
        <li>Day, time, and method of delivery for sessions</li>
        <li>Identities of any and all present during sessions</li>
        <li>CPT service codes</li>
        <li>ICD-10 diagnosis code(s) reported in your client portal</li>
        <li>Treatment plan and formulation</li>
        <li>Progress on treatment plan</li>
        <li>Level of care rendered</li>
        <li>Referrals made</li>
      </ul>
    </Dropdown>
    <Dropdown title="Where can I direct additional questions?">
      <p>
        For questions about your specific policy regarding coverage,
        deductibles, co-pays, or network, please contact your insurance provider
        using the methods designated on your insurance card.
      </p>
      <p>
        For questions about our rates or any charges you have received from
        Lorikeet Collective, please reach out to our billing and administrative
        staff at
        <b>
          <a href="mailto:admin@lorikeetcollective.com?">
            {" "}
            admin@lorikeetcollective.com
          </a>
        </b>{" "}
        or speak directly with your therapist.
      </p>
    </Dropdown>
  </main>
);

export default Insurance;
