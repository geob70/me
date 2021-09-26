import { Header, LogoContainer, NavContainer, NavItem } from "./style";
import Button from "../../components/button/Button";

const Nav = () => {
  return (
    <Header>
      <NavContainer>
        <LogoContainer>
          <span>
            G<small>eo</small>
          </span>
        </LogoContainer>
        <NavItem>
          <ol>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#experience">Experience</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
            <li>
              <Button label="resume" />
            </li>
          </ol>
        </NavItem>
      </NavContainer>
    </Header>
  );
};

export default Nav;
