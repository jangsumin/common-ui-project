import styled from "styled-components";

const ButtonContainer = styled.button`
  width: ${(props) => (props.buttonWidth ? props.buttonWidth : "inherit")};
  height: ${(props) => (props.buttonHeight ? props.buttonHeight : "inherit")};
  background-color: ${(props) =>
    props.buttonColor ? props.buttonColor : "inherit"};
  color: ${(props) => (props.textColor ? props.textColor : "#000000")};
  cursor: pointer;
  align-self: center;
  box-sizing: border-box;
  display: block;
  padding: 10px 12px;
  border: none;
  border-radius: 4px;
`;

function Button(props) {
  const { buttonWidth, buttonHeight, buttonText, buttonColor, textColor } =
    props;

  return (
    <ButtonContainer
      buttonWidth={buttonWidth}
      buttonHeight={buttonHeight}
      buttonColor={buttonColor}
      textColor={textColor}
    >
      {buttonText}
    </ButtonContainer>
  );
}

export default Button;
