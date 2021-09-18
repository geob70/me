import styled from "styled-components";

export const Header = styled.nav`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 100px;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`;

export const NavContainer = styled.nav`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  color: #ccd6f6;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  counter-reset: item 0;
  z-index: 12;
`;

export const LogoContainer = styled.div`
  display: grid;
  place-items: center;
  padding: 0px 10px;
  transform: skew(-10deg);
  border: 2px solid #64ffda;
  color: #64ffda;
  font-size: 20px;
  cursor: pointer;

  small {
    font-size: xx-small;
  }
`;

export const NavItem = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  ol {
    display: flex;
    padding: 10px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
  }

  li {
    margin: 0px 5px;
    padding: 10px;
    position: relative;
    counter-increment: item 1;
    font-size: 13px;

    &:hover a {
      color: #64ffda;
    }
  }

  a {
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;
