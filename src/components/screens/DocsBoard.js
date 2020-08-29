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
import axios from "axios";

class DocsBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datum: null,
    };
  }

  componentDidMount = async () => {
    try {
      await axios.post("/api/getDocsboardData").then((response) =>
        this.setState({
          datum: response.data,
        })
      );
    } catch (e) {}
  };

  render() {
    const { datum } = this.state;
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
        {datum ? (
          datum.map((data, idx) => {
            return (
              <Wrapper
                key={data.refKey}
                width="960px"
                height="25px"
                direction="row"
                isData={true}
                onClick={() => this.props.history.push("/detail/anyID")}
              >
                <Column width={"5%"} isHead={false}>
                  {idx + 1}
                </Column>
                <Column width={"40%"} isHead={false}>
                  {data.title}
                </Column>
                <Column width={"15%"} isHead={false}>
                  {data.author}
                </Column>
                <Column width={"20%"} isHead={false}>
                  {data.resistDate}
                </Column>
                <Column width={"20%"} isHead={false}>
                  {data.hit}
                </Column>
              </Wrapper>
            );
          })
        ) : (
          <div>loading</div>
        )}
      </WholeWrapper>
    );
  }
}

export default DocsBoard;
