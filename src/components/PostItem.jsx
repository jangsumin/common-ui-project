import styled from "styled-components";
import Tag from "./Tag";

const Item = styled.section`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border-top: 1px solid rgb(210, 210, 215);

  &:hover {
    background-color: #f5f5f7;
  }
`;

const Subject = styled.h1`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
`;

const Content = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Info = styled.ul`
  font-size: 12px;
`;

function PostItem(props) {
  const { subject, content, tags, user, createTime, good, viewCount } =
    props.item;

  return (
    <Item>
      <Subject>{subject}</Subject>
      <Content>{content}</Content>
      <Tags>
        {tags.map((tag, index) => {
          return <Tag key={index} tag={tag}></Tag>;
        })}
      </Tags>
      <Info>
        {user +
          " ∙ " +
          createTime +
          " ∙ " +
          `좋아요 ${good}` +
          " ∙ " +
          `조회수 ${viewCount}`}
      </Info>
    </Item>
  );
}

export default PostItem;
