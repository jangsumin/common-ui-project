import styled from "styled-components";

const Category = styled.section`
  font-size: 12px;
`;

const CategoryName = styled.h1`
  margin-bottom: 15px;
  color: #1d1d1f;
`;

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #424245;
`;

function FooterCategory(props) {
  const { name, list } = props;

  return (
    <Category>
      <CategoryName>{name}</CategoryName>
      <CategoryList>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </CategoryList>
    </Category>
  );
}

export default FooterCategory;
