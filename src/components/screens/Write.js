import React from "react";
import styled from "styled-components";
import { C_Btn, D_Btn } from "../commonComponents";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || `column`};
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 60px;
`;

const TextInput = styled.input`
  width: 640px;
  height: 30px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px 0px;
  transition: 0.5px;
  padding: 0px 10px;
  &:focus {
    box-shadow: 2px 3px 3px #0b0b0b;
  }
`;

const TextArea = styled.textarea`
  width: 640px;
  height: 300px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px 0px;
  transition: 0.5px;
  padding: 10px;
  resize: none;

  &:focus {
    box-shadow: 2px 3px 3px #0b0b0b;
  }
`;

class Write extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>게시글 작성하기({this.props.match.params.boardType})</Title>
        <TextInput type="text" placeholder="Title" />
        <TextInput type="text" placeholder=" Author..." />
        <TextArea placeholder="Descriptions..." />
        <Wrapper direction={`row`}>
          <C_Btn>작성하기</C_Btn>
          <D_Btn>작성취소</D_Btn>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default Write;
