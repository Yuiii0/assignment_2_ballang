import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { MdOutlineLogout } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";

function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const { id } = useSelector((state) => state.user.profile);

  return (
    <Wrapper>
      <SubHeader>
        <HeaderInfo>력셔리 쇼핑이 참 쉽다. 발란</HeaderInfo>
        <HeaderInfo>Online luxury boutique</HeaderInfo>
        <nav>
          <Menu>
            {isLoggedIn ? (
              <>
                <MenuList>{id}님 |</MenuList>
                <Link to="/my-page">
                  <MenuList> 마이페이지 | </MenuList>
                </Link>
                <Link to="/cart">
                  <MenuList> 장바구니 |</MenuList>
                </Link>
                <MenuList>
                  <LogoutBtn onClick={logOut} />
                </MenuList>
              </>
            ) : (
              <>
                <Link to="/sign-in">
                  <MenuList>
                    <LoginBtn />
                  </MenuList>
                </Link>
                <Link to="/cart">
                  <MenuList> | 장바구니</MenuList>
                </Link>
              </>
            )}
          </Menu>
        </nav>
      </SubHeader>
      <MainHeader>
        <Logo>
          <Link to="/">
            <LogoImg src="/logo.png" />
          </Link>
        </Logo>
      </MainHeader>
      <ProductNav>
        <ProductMenu>
          <ProductItem>
            <Link to="#">NEW IN</Link>
          </ProductItem>
          <ProductItem>
            <Link to="#">의류</Link>
          </ProductItem>
          <ProductItem>
            <Link to="#">슈즈</Link>
          </ProductItem>
          <ProductItem>
            <Link to="#">가방</Link>
          </ProductItem>
          <ProductItem>
            <Link to="#">액세서리</Link>
          </ProductItem>
          <ProductItem>
            <Link to="#">주얼리</Link>
          </ProductItem>
          <ProductItem>
            <Link to="#">SALE</Link>
          </ProductItem>
          <ProductItem>
            <Link to="#">DESIGNERS</Link>
          </ProductItem>
        </ProductMenu>
      </ProductNav>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  height: 210px;
  border-bottom: 3px solid black;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: white;
`;
const SubHeader = styled.div`
  background-color: black;
  height: 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding-left: 60px;
  padding-right: 60px;
`;
const HeaderInfo = styled.p``;
const MainHeader = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MenuList = styled.li`
  a {
    margin: 0;
  }
`;
const Logo = styled.div`
  a {
    font-size: 40px;
  }
`;
const LogoImg = styled.img`
  width: 280px;
`;
const ProductNav = styled.nav`
  margin: auto;
`;
const ProductMenu = styled.ul`
  max-width: 700px;
  display: flex;
  padding-bottom: 14px;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;
const ProductItem = styled.li`
  a {
    font-weight: 600;
  }
`;
const LogoutBtn = styled(MdOutlineLogout)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  padding-top: 3px;
`;
const LoginBtn = styled(MdOutlineLogin)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  padding-top: 4px;
`;
