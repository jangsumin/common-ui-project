import styled from "styled-components";

const HeaderMenuList = styled.ul`
  display: flex;
  gap: 15px;
`;

const HeaderMenuItem = styled.li`
  cursor: pointer;
`;

function HeaderMenu(props) {
  const { menu } = props;

  return (
    <HeaderMenuList>
      {menu.map((item, idx) => {
        return <HeaderMenuItem key={idx}>{item}</HeaderMenuItem>;
      })}
    </HeaderMenuList>
  );
}

export default HeaderMenu;
