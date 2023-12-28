import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: ${(props) => (props.$width ? props.$width : "inherit")};
  height: ${(props) => (props.$height ? props.$height : "inherit")};
  background-color: ${(props) =>
    props.$buttonColor ? props.$buttonColor : "inherit"};
  color: ${(props) => (props.$color ? props.$color : "#000000")};
  cursor: pointer;
  align-self: center;
  box-sizing: border-box;
  display: block;
  padding: 10px 12px;
  border: none;
  border-radius: 4px;
`;

function Button(props) {
  const { width, height, buttonText, buttonColor, color } = props;

  return (
    <ButtonWrapper
      $width={width}
      $height={height}
      $color={color}
      $buttonColor={buttonColor}
    >
      {buttonText}
    </ButtonWrapper>
  );
}

export default Button;
