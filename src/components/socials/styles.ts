import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 40px;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: #a8b2d1;

  @media (max-width: 480px) {
    display: none !important;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    &:after {
      content: "";
      display: block;
      width: 1px;
      height: 90px;
      margin: 0 auto;
      background-color: #a8b2d1;
    }
    li {
      padding: 10px;
      &:last-of-type {
        margin-bottom: 20px;
      }
      a {
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:hover,
        &:focus {
          transform: translateY(-3px);
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 40px;
  bottom: 0px;
  right: 40px;
  color: #a8b2d1;

  @media (max-width: 480px) {
    display: none !important;
  }

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #a8b2d1;
  }
  a {
    margin: 20px auto;
    /* padding: 10px; */
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1em;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;
