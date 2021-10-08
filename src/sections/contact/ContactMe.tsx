import { Container } from "./styles";
import Button from "../../components/button/Button";

const ContactMe = () => {
  return (
    <Container id="contact">
      <div className="div">
        <h2>Reach Me</h2>
        <p>
          I am currently open to new oppurtunities, my inbox is always opened, so why don't you say HI
        </p>
        <Button label="Say Hello ✋" />
      </div>
    </Container>
  );
};

export default ContactMe;
