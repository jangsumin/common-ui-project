import styled from "styled-components";

const ButtonWrapper = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  padding: 4px 8px;
  background-color: #eff3fa;
  border: 0;
  border-radius: 2px;
  color: #3e4042;
`;

function Tag({ tag }) {
  return <ButtonWrapper>{tag}</ButtonWrapper>;
}

export default Tag;
