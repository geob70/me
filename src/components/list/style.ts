import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  font-size: 12px !important;
  align-items: center;
  font-weight: lighter;
  padding: 0;

  span {
    &:before {
      content: "▹";
      left: 0;
      color: #64ffda;
      font-size: 18px;
      line-height: 12px;
      margin-right: 5px;
    }
  }
`;
