import styled from "styled-components";
import FooterCategory from "./FooterCategory";

const FooterWrapper = styled.footer`
  position: relative;
  box-sizing: border-box;
  width: 80%;
  margin: 50px auto;
  padding: 30px 0;
  display: flex;
  justify-content: start;
  gap: 80px;
  border-top: 1px solid rgb(210, 210, 215);
  border-bottom: 1px solid rgb(210, 210, 215);
`;

const FooterSmall = styled.small`
  position: absolute;
  bottom: -25px;
  left: 0;
  font-size: 12px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterCategory
        name="쇼핑 및 알아보기"
        list={[
          "Store",
          "Mac",
          "iPad",
          "iPhone",
          "Watch",
          "AirPods",
          "TV 및 홈",
          "AirTag",
          "액세서리",
        ]}
      ></FooterCategory>
      <FooterCategory
        name="엔터테인먼트"
        list={[
          "Apple One",
          "Apple TV+",
          "Apple Music",
          "Apple Arcade",
          "Apple Podcasts",
          "Apple Books",
          "App Store",
        ]}
      ></FooterCategory>
      <FooterCategory
        name="애플 스토어"
        list={[
          "매장 찾기",
          "Genius Bar",
          "Today at Apple",
          "Apple 캠프",
          "Apple Store 앱",
          "인증 리퍼비쉬 제품",
          "Apple Trade In",
          "할부 방식",
          "주문 상태",
          "쇼핑 도움말",
        ]}
      ></FooterCategory>
      <FooterCategory
        name="교육"
        list={[
          "Apple 그리고 교육",
          "초중고용 제품 쇼핑하기",
          "대학 생활을 위한 제품 쇼핑하기",
        ]}
      ></FooterCategory>
      <FooterCategory
        name="애플의 가치관"
        list={["손쉬운 사용", "환경", "개인정보 보호", "협력업체에 대한 책임"]}
      ></FooterCategory>
      <FooterSmall>
        Copyright &copy; 2023 Apple Inc. 모든 권리 보유.
      </FooterSmall>
    </FooterWrapper>
  );
}

export default Footer;
