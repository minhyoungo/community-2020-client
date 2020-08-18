import React from "react";
import {
  WholeWrapper,
  Wrapper,
  Column,
  TitleWrapper,
  Title,
  SearchInput,
  C_Btn,
} from "../commonComponents";
import { Link } from "react-router-dom";

class DocsBoard extends React.Component {
  render() {
    return (
      <WholeWrapper>
        <TitleWrapper>
          <Title>Docs Board</Title>
        </TitleWrapper>

        <TitleWrapper>
          <SearchInput />
        </TitleWrapper>

        <TitleWrapper width={`960px`} align={`flex-end`}>
          <Link to={`write/docs`}>
            <C_Btn>글쓰기</C_Btn>
          </Link>
        </TitleWrapper>

        <Wrapper width="960px" height="25px" direction="row">
          <Column width={"5%"} isHead={true}>
            번호
          </Column>
          <Column width={"40%"} isHead={true}>
            제목
          </Column>
          <Column width={"15%"} isHead={true}>
            작성자
          </Column>
          <Column width={"20%"} isHead={true}>
            작성일
          </Column>
          <Column width={"20%"} isHead={true}>
            조회수
          </Column>
        </Wrapper>
        {/*---DATA AREA START---*/}
        <Wrapper width="960px" height="25px" direction="row" isData={true}>
          <Column width={"5%"} isHead={false}>
            1
          </Column>
          <Column width={"40%"} isHead={false}>
            안녕하세요
          </Column>
          <Column width={"15%"} isHead={false}>
            신태섭
          </Column>
          <Column width={"20%"} isHead={false}>
            2020/08/10
          </Column>
          <Column width={"20%"} isHead={false}>
            999999
          </Column>
        </Wrapper>
        <Wrapper width="960px" height="25px" direction="row" isData={true}>
          <Column width={"5%"} isHead={false}>
            2
          </Column>
          <Column width={"40%"} isHead={false}>
            안녕하세요
          </Column>
          <Column width={"15%"} isHead={false}>
            신태섭
          </Column>
          <Column width={"20%"} isHead={false}>
            2020/08/10
          </Column>
          <Column width={"20%"} isHead={false}>
            999999
          </Column>
        </Wrapper>
        <Wrapper width="960px" height="25px" direction="row" isData={true}>
          <Column width={"5%"} isHead={false}>
            3
          </Column>
          <Column width={"40%"} isHead={false}>
            안녕하세요
          </Column>
          <Column width={"15%"} isHead={false}>
            신태섭
          </Column>
          <Column width={"20%"} isHead={false}>
            2020/08/10
          </Column>
          <Column width={"20%"} isHead={false}>
            999999
          </Column>
        </Wrapper>
      </WholeWrapper>
    );
  }
}

export default DocsBoard;
