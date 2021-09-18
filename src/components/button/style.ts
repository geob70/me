import styled from "styled-components";

const Container = styled.div`
  padding: 0.5rem 1rem;
  color: #64ffda;
  border-radius: 4px;
  background: transparent;
  border: 1px solid #64ffda;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: fit-content !important;

  &:hover {
    background: #3c4140;
  }
`;

export default Container;
