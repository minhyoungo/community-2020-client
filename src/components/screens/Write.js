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
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      description: "",
    };
  }
  render() {
    const { title, author, description } = this.state;
    return (
      <Wrapper>
        <Title>게시글 작성하기({this.props.match.params.boardType})</Title>
        <TextInput
          name="title"
          value={title}
          type="text"
          placeholder="Title"
          onChange={this._valueChangeHandler}
        />
        <TextInput
          name="author"
          value={author}
          type="text"
          placeholder=" Author..."
          onChange={this._valueChangeHandler}
        />
        <TextArea
          name="description"
          value={description}
          placeholder="Descriptions..."
          onChange={this._valueChangeHandler}
        />
        <Wrapper direction={`row`}>
          <C_Btn onClick={this._writeHandler}>작성하기</C_Btn>
          <D_Btn onClick={() => this.props.history.goBack()}>작성취소</D_Btn>
        </Wrapper>
      </Wrapper>
    );
  }

  _valueChangeHandler = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  _writeHandler = () => {
    const { title, author, description } = this.state;
    if (!title || title.trim() === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!title || author.trim() === "") {
      alert("작성자를 입력해주세요.");
      return;
    }
    if (!title || description.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    const inputData = {
      title: title,
      author: author,
      description: description,
      type: this.props.match.params.boardType,
    };
    console.log(inputData);
  };
}

export default Write;
