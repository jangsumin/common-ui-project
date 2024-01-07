import styled from "styled-components";

const PostDetailWrapper = styled.div`
  box-sizing: border-box;
  width: 90%;
  margin: 0 auto;
  display: flex;
`;

const Content = styled.section`
  box-sizing: border-box;
  width: 65%;
  padding: 40px;
  border-right: 1px solid #e3e3e4;
`;

const Title = styled.h1`
  font-size: 28px;
`;

const ContentInfo = styled.span`
  margin: 20px 0;
  display: inline-block;
  font-size: 14px;
  color: #868e96;
`;

const HorizontalLine = styled.hr`
  opacity: 0.2;
`;

const Paragraph = styled.p`
  box-sizing: border-box;
  padding: 30px 0;
  line-height: 2;
  font-size: 16px;
`;

const FunctionGroup = styled.ul`
  box-sizing: border-box;
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Function = styled.li`
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px;
  font-size: 14px;
  border-radius: 4px;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const CommentWrapper = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding; 40px;
`;

const CommentCount = styled.h2`
  font-size: 18px;
  margin: 30px 0;
`;

const UserInfo = styled.section`
  cursor: pointer;
  box-sizing: border-box;
  width: 300px;
  height: fit-content;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #e3e3e4;
  border-radius: 10px;
`;

const UserName = styled.h2`
  font-size: 18px;
`;

const PostCount = styled.span`
  margin: 10px 0;
  display: inline-block;
  font-size: 14px;
  color: #868e96;
`;

function PostDetail() {
  return (
    <PostDetailWrapper>
      <Content>
        <Title>인텔리제이 자바 버전 관련 질문</Title>

        <ContentInfo>24.01.07 22:15 작성 ∙ 조회수 25</ContentInfo>

        <HorizontalLine></HorizontalLine>

        <Paragraph>
          인텔리제이 안에서 자바 버전을 설치하거나 변경하면 그 해당 프로젝트
          안에서 java -version을 했을때, 버전이 변경되지는 않나요? 자바 버전을
          변경해도 버전 확인을 할때, 변경이 되지는 않아서요.
        </Paragraph>

        <FunctionGroup>
          <Function>좋아요</Function>
          <Function>저장</Function>
          <Function>공유</Function>
        </FunctionGroup>

        <HorizontalLine></HorizontalLine>

        <CommentWrapper>
          <CommentCount>답변 {0}</CommentCount>
        </CommentWrapper>
      </Content>

      <UserInfo>
        <UserName>장수민</UserName>

        <PostCount>작성한 질문수 {1}</PostCount>
      </UserInfo>
    </PostDetailWrapper>
  );
}

export default PostDetail;
