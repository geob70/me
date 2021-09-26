import { Container } from "./style";
import Button from "../../components/button/Button";
// import {FC} from "react";

const Intro = ({ ...children }) => {
  const contactMe = () => {
    window.open("mailto:sylvester.ola.george@gmail.com", "_blank")?.focus();
  };

  return (
    <Container id="intro">
      <div>
        <span>Hi ✋, my name is</span>
        <h1>Sylvester George.</h1>
        <h2>Let's make life easier.</h2>
        <p>
          I'm a software engineer specialized in building applications, <br />{" "}
          who loves coding and has a serious passion for new technology ✌️.
        </p>
        <Button action={contactMe} label={"Contact me"} />
      </div>
    </Container>
  );
};

export default Intro;
