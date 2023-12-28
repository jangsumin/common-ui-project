import styled from "styled-components";

const InputWrapper = styled.input`
  width: ${(props) => (props.$width ? props.$width : "inherit")};
  height: ${(props) => (props.$height ? props.$height : "inherit")};
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
  const { width, height, placeholder } = props;

  return (
    <InputWrapper
      placeholder={placeholder}
      $width={width}
      $height={height}
    ></InputWrapper>
  );
}

export default SearchInput;
