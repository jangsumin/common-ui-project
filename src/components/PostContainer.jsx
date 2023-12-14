import styled from "styled-components";
import SearchInput from "./SearchInput";
import Button from "./Button";
import PostItem from "./PostItem";

const Container = styled.div`
  box-sizing: border-box;
  width: 70%;
  min-width: 800px;
  max-width: 1200px;
  margin: 80px auto;
`;

const PostSearch = styled.div`
  box-sizing: border-box;
  margin: 20px 0;
  padding: 20px;
  height: 160px;
  display: grid;
  grid-template-columns: 6fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 5px;
  column-gap: 5px;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  &:last-child {
    border-bottom: 1px solid rgb(210, 210, 215);
  }
`;

function PostContainer() {
  // 비동기 처리를 통해 서버에서 게시물 받아오기
  // 게시물 응답 결과는 다음과 같은 JSON 형태일 것이다.
  const postItem = [
    {
      id: "1",
      subject: "리액트 어려워요ㅠㅠ",
      content:
        "React를 저번에 했는데도 불구하고 기억나는게 없는데 이거 맞나요??ㅠㅠ 그래도 이번에 하는 김에 제대로 해볼랍니다! React를 저번에 했는데도 불구하고 기억나는게 없는데 이거 맞나요??ㅠㅠ 그래도 이번에 하는 김에 제대로 해볼랍니다!",
      tags: ["Front-end", "React", "어려움"],
      user: "장수민",
      createTime: "20분 전",
      good: "5",
      viewCount: "10",
    },
    {
      id: "2",
      subject: "리액트 어려워요ㅠㅠ",
      content:
        "React를 저번에 했는데도 불구하고 기억나는게 없는데 이거 맞나요??ㅠㅠ 그래도 이번에 하는 김에 제대로 해볼랍니다!",
      tags: ["Front-end", "React", "어려움"],
      user: "김형진",
      createTime: "30분 전",
      good: "5",
      viewCount: "10",
    },
    {
      id: "3",
      subject: "리액트 어려워요ㅠㅠ",
      content:
        "React를 저번에 했는데도 불구하고 기억나는게 없는데 이거 맞나요??ㅠㅠ 그래도 이번에 하는 김에 제대로 해볼랍니다!",
      tags: ["Front-end", "React", "어려움"],
      user: "윤진아",
      createTime: "40분 전",
      good: "5",
      viewCount: "10",
    },
    {
      id: "4",
      subject: "리액트 어려워요ㅠㅠ",
      content:
        "React를 저번에 했는데도 불구하고 기억나는게 없는데 이거 맞나요??ㅠㅠ 그래도 이번에 하는 김에 제대로 해볼랍니다!",
      tags: ["Front-end", "React", "어려움"],
      user: "유현지",
      createTime: "50분 전",
      good: "5",
      viewCount: "10",
    },
  ];

  return (
    <Container>
      {/* 여기에 제목, 태그 검색창 들어가야 함 */}
      <PostSearch>
        <SearchInput
          inputHeight="48px"
          placeholderText="궁금한 질문을 검색해보세요!"
        ></SearchInput>
        <Button
          buttonHeight="48px"
          buttonText="검색"
          buttonColor="#e30000"
          textColor="#ffffff"
        ></Button>
        <SearchInput
          inputHeight="48px"
          placeholderText="태그로 검색해보세요!"
        ></SearchInput>
        <Button buttonHeight="48px" buttonText="초기화"></Button>
      </PostSearch>

      <PostList>
        {postItem.map((item, index) => {
          return <PostItem key={index} item={item}></PostItem>;
        })}
      </PostList>
    </Container>
  );
}

export default PostContainer;
