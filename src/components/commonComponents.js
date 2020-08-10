import styled from "styled-components";

const BORDER = `1px solid rgb(140, 140, 140)`;
const BORDER_RADIUS = `4px`;

export const WholeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${BORDER};
  border-radius: ${BORDER_RADIUS};
  display: flex;
  flex-direction: ${(props) => props.direction};

  &:not {
    border-right: 1px solid #fff;
  }
  ${isData &&
  `
  $:hover {props.isData &&
    `
      trasition : 0.5s;
      cursor:pointer
      &:hover {
          background : rgb(180, 180, 180)
          color:#ffffff
      }
  `}
`;

export const Column = styled.div`
  width: ${(props) => props.width};
  height: 25px;
  transition 0.5s;
  cursor: pointer;

  ${(props) =>
    props.isHead
      ? `background: #0b0b0b;
  color: #ffffff;
  line-height: 25px;
  text-align: center;`
      : `line-height: 25px;
  text-align: center;
  border-bottom: ${BORDER};`}
`;
