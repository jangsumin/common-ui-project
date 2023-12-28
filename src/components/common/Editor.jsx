import ImageResize from "quill-image-resize";
import ReactQuill, { Quill } from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import "../../quill.css";

Quill.register("modules/ImageResize", ImageResize);

const EditorWrapper = styled.div`
  box-sizing: border-box;
  margin: 20px 0 70px 0;
`;

export const Editor = () => {
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ align: [] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          "link",
          { indent: "-1" },
          { indent: "+1" },
        ],
        [
          {
            color: [
              "#000000",
              "#e60000",
              "#ff9900",
              "#ffff00",
              "#008a00",
              "#0066cc",
              "custom-color",
            ],
          },
          { background: [] },
        ],
        ["image", "video"],
      ],
    },
    ImageResize: {
      parchment: Quill.import("parchment"),
    },
  };

  return (
    <EditorWrapper>
      <ReactQuill
        style={{ width: "100%", height: "450px" }}
        modules={modules}
        placeholder={`- 학습 관련 질문을 남겨주세요. 상세히 작성하면 더 좋아요!\n- 마크다운, 단축키를 이용해서 편리하게 글을 작성할 수 있어요.\n- 먼저 유사한 질문이 있었는지 검색해보세요.\n- 서로 예의를 지키며 존중하는 문화를 만들어가요.\n- 잠깐! 장충동왕족발 운영 관련 문의는 1:1 문의하기를 이용해주세요.`}
      />
    </EditorWrapper>
  );
};
