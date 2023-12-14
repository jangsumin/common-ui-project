import styled from "styled-components";

const Input = styled.input`
  width: ${(props) => (props.inputWidth ? props.inputWidth : "inherit")};
  height: ${(props) => (props.inputHeight ? props.inputHeight : "inherit")};
  align-self: center;
  box-sizing: border-box;
  display: block;
  padding: 10px 12px;
  margin: 0 10px;
  border: 1px solid rgb(222, 226, 230);
  border-radius: 4px;
  color: rgb(0, 10, 18);

  &:focus {
    outline-width: thin;
    outline-color: #e30000;
  }
`;

function SearchInput(props) {
  const { inputWidth, inputHeight, placeholderText } = props;

  return (
    <Input
      placeholder={placeholderText}
      inputWidth={inputWidth}
      inputHeight={inputHeight}
    ></Input>
  );
}

export default SearchInput;
