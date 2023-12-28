import styled from "styled-components";
import TagsInput from "../components/common/TagsInput";
import { Editor } from "../components/common/Editor";
import Button from "../components/common/Button";

const PostCreateWrapper = styled.div`
  box-sizing: border-box;
  width: 750px;
  margin: 0 auto;
`;

const NoticeTextBox = styled.div`
  box-sizing: border-box;
  margin: 20px auto;
  padding: 16px 12px;
  font-weight: 700;
  font-size: 14px;
  color: #00894f;
  background-color: #e5f8f0;
  border-radius: 8px;
`;

const TitleInput = styled.input`
  display: block;
  box-sizing: border-box;
  margin: 20px 0;
  width: 100%;
  font-weight: 600;
  font-size: 28px;
  background-color: #f5f5f7;
  border: none;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #acb5bd;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

function PostCreate() {
  return (
    <PostCreateWrapper>
      <NoticeTextBox>
        코드가 포함된 질문은 이미지보다 코드 블럭을 이용하시면 더 정확하게 답변
        받을 수 있어요.
      </NoticeTextBox>

      <TitleInput placeholder="제목에 핵심 내용을 요약해보세요."></TitleInput>

      <TagsInput></TagsInput>

      <Editor></Editor>

      <ButtonWrapper>
        <Button
          width="73px"
          height="42px"
          buttonText="취소"
          buttonColor="#e5f8f0"
        ></Button>
        <Button
          width="73px"
          height="42px"
          buttonText="등록"
          color="#ffffff"
          buttonColor="#00c471"
        ></Button>
      </ButtonWrapper>
    </PostCreateWrapper>
  );
}

export default PostCreate;
