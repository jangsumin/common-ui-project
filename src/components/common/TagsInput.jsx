import { useState } from "react";
import styled from "styled-components";

const TagsInputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const TagItem = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 13px;
  font-size: 13px;
  color: #9ba3a9;
  background-color: #e5f8f0;
  border: none;
  border-radius: 4px;
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15px;
  height: 15px;
  background-color: inherit;
  border: none;
`;

const TagInput = styled.input`
  cursor: text;
  box-sizing: border-box;
  display: flex;
  padding: 5px 0;
  width: 300px;
  font-size: 16px;
  background-color: inherit;
  border: none;
  outline: none;

  &::placeholder {
    color: #acb5bd;
  }
`;

function TagsInput() {
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  // console.log(tagList);

  const onKeyUp = (event) => {
    if (event.target.value.length !== 0 && event.key === "Enter") {
      if (tagList.length < 10 && !tagList.includes(tagItem)) {
        setTagList([...tagList, tagItem]);
        setTagItem("");
      }
    }
  };

  const onKeyDown = (event) => {
    if (
      tagItem.length === 0 &&
      tagList.length !== 0 &&
      event.key === "Backspace"
    ) {
      deleteTagItem("keyUp");
    }
  };

  const deleteTagItem = (option = "click", event) => {
    const deleteTagItem =
      option === "click"
        ? event.target.parentElement.firstChild.innerText
        : tagList[tagList.length - 1];
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
  };

  return (
    <TagsInputWrapper>
      {tagList.map((tagItem, index) => {
        return (
          <TagItem key={index}>
            <span>{tagItem}</span>
            <Button onClick={deleteTagItem}>X</Button>
          </TagItem>
        );
      })}

      <TagInput
        type="text"
        placeholder="태그를 설정하세요 (최대 10개)"
        onChange={(event) => setTagItem(event.target.value)}
        value={tagItem}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
      ></TagInput>
    </TagsInputWrapper>
  );
}

export default TagsInput;
