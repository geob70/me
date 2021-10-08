import { Header, LogoContainer, NavContainer, NavItem, Anchor } from "./style";
import Button from "../../components/button/Button";
import b7o from "./b7o.png";
import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from '@mui/icons-material/Close';

const Nav = () => {
  return (
    <Header>
      <NavContainer>
        <LogoContainer>
          <img src={b7o} alt="" />
        </LogoContainer>
        <NavItem>
          <ol>
            <li>
              <Anchor index={1} href="/#about">
                About
              </Anchor>
            </li>
            <li>
              <Anchor index={2} href="/#experience">
                Experience
              </Anchor>
            </li>
            <li>
              <Anchor index={3} href="/#projects">
                Projects
              </Anchor>
            </li>
            <li>
              <Anchor index={4} href="/#contact">
                Contact
              </Anchor>
            </li>
            <li>
              <a
                className="resume-button"
                href="/sylvester.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <Button
                label="resume"
                action={() => window.open("./static/sylvester.pdf", "_blank")?.focus()}
              />
            </li>
          </ol>
          <MenuIcon className="menu" />
        </NavItem>
      </NavContainer>
    </Header>
  );
};

export default Nav;
