import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <FooterMainMenu>
        <li>회사소개</li>
        <li>제휴문의</li>
        <li>고객센터</li>
        <li>이용약관</li>
        <li>개인정보처리방침</li>
      </FooterMainMenu>
      <FooterSubMenu>
        <li>주식회사 발란</li>
        <li>대표: 최형록</li>
        <li>사업자 등록번호 815-88-00093</li>
        <li>통신판매업신고 2015-서울강남-01677</li>
        <li>채무지급보증안내</li>
        <li>경영공지</li>
      </FooterSubMenu>
      <FooterSubMenu>
        <li>서울특별시 강남구 역삼동 테헤란로 217, 10층</li>
      </FooterSubMenu>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  background-color: black;
  height: 150px;
  color: white;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const FooterMainMenu = styled.ul`
  display: flex;
  font-size: 12px;
  gap: 10px;
`;
const FooterSubMenu = styled.ul`
  display: flex;
  font-size: 11px;
  color: #666666;
  gap: 10px;
`;
