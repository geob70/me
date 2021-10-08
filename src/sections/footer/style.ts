import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: #8893b0;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    font-size: 12px;
    line-height: 1;

    &:hover {
      color: #64ffda;
    }
  }

  ul {
    display: none;
    justify-content: space-around;
    width: 60%;
    margin-bottom: 20px;

    @media (max-width: 480px) {
      display: flex;
    }

    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
