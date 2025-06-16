import Button from "../components/Common/Button";
import Title from "../components/Common/Title";

const Resources: React.FC = (): React.ReactElement => {
  return (
    <main>
      <Title title={"Non-Carceral Resources"} />
      <Button
        title={"LEARN WHY THIS MATTERS"}
        external
        link={
          "https://www.tac.org/criminalization/#:~:text=People%20with%20untreated%20mental%20illness%20are%2016%20times%20more%20likely,by%20the%20Treatment%20Advocacy%20Center."
        }
      />
    </main>
  );
};

export default Resources;
