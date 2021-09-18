import { FC } from "react";
import Container from "./style";

interface Props {
  label: string;
  action?: Function;
}

const Button: FC<Props> = ({ label, action }) => {
  return (
    <Container>
      <span>{label}</span>
    </Container>
  );
};

export default Button;
