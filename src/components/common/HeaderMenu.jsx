import styled from "styled-components";

const HeaderMenuListWrapper = styled.ul`
  display: flex;
  gap: 15px;
`;

const HeaderMenuItem = styled.li`
  cursor: pointer;
`;

function HeaderMenu(props) {
  const { menu } = props;

  return (
    <HeaderMenuListWrapper>
      {menu.map((item, idx) => {
        return <HeaderMenuItem key={idx}>{item}</HeaderMenuItem>;
      })}
    </HeaderMenuListWrapper>
  );
}

export default HeaderMenu;
