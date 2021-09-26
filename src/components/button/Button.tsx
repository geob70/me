import { FC } from "react";
import Container from "./style";

interface Props {
  label: string;
  action?: any;
}

const Button: FC<Props> = ({ label, action }) => {
  return (
    <Container onClick={action}>
      <span>{label}</span>
    </Container>
  );
};

export default Button;
