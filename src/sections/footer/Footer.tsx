import { Container } from "./styles";
import Button from "../../components/button/Button";

const Footer = () => {
  return (
    <Container>
      <div className="div">
        <h2>Reach Me</h2>
        <p>
          I am open to remote jobs that pays in{" "}
          <strong>dollars, pounds or euro</strong>. NOT NAIRA (If you want to
          pay in naira, kindly <strong>FUCK OFF</strong>)
        </p>
        <Button label="Say Hello ✋" />
      </div>
    </Container>
  );
};

export default Footer;
