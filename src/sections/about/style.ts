import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  padding: 120px;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 0px 10px;
  }

  div {
    width: 90%;
  }
`;

export const Header = styled.h2`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  font-size: clamp(20px, 5vw, 32px);
  white-space: nowrap;
  width: min-content;
  font-weight: 600;
  color: #ccd6f6;
  line-height: 1.1;
  font-family: "Noto Sans", sans-serif;
  

  &:after {
    content: "";
    display: block;
    width: clamp(30px, 300px, 350px);
    height: 1px;
    margin: 0 0 0 10px;
    background-color: #a8b2d1;

    @media (max-width: 480px) {
      width: 0;
    }
  }
`;

const toAndFro = keyframes`
  0% {
    left: 35%;
  }

  50% {
    left: 100%;
    opacity: 0;
  }

  100% {
    left: 35%;
  }
`;

export const Floater = styled.p`
  position: absolute;
  font-size: 12px;
  color: #64ffda;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  top: -1px;
  left: 35%;
  animation: ${toAndFro} 7s linear infinite;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const ProfileContainer = styled.div`
  display: grid;
  color: silver;
  width: 100%;
  grid-template-columns: 70% 30%;
  gap: 10px;
  padding-top: 50px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const upAndDown = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
`;

export const Content = styled.div`
  width: 70%;
  /* margin-top: 50px; */
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;

  p {
    margin-top: 40px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    transition: 0.5s all ease-in-out;
    cursor: pointer;
    color: #64ffda;

    &:after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: #64ffda;
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }

  strong {
    position: relative;

    div {
      animation: ${upAndDown} 2s linear infinite;
      width: min-content;
      display: inline-block;
      padding: 0;
    }
  }
`;

export const ListItemGrid = styled.div`
  width: max-content;
  margin-top: 15px;
`;

export const ImageContainer = styled.div`
  /* border: 4px solid #64ffda; */
  cursor: pointer;
  /* clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  ); */
  position: relative;
  top: -50px;
  transition: 0.5s all ease-in-out;
  /* width: 30px; */

  &:hover {
    transform: scale(0.95);
  }

  img {
    height: 100%;
  }
`;
