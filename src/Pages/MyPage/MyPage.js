import React, { useRef, useState } from "react";
import Page from "../../components/Page/Page";
import { useDispatch, useSelector } from "react-redux";
import {
  updateLocation,
  updateName,
  updateNickName,
} from "../../store/reducers/user.reducer";
import { Button, Input } from "../../components/Share/Button";
import styled from "styled-components";

function MyPage() {
  const { name, nickname, location } = useSelector(
    (state) => state.user.profile
  );
  console.log(name, nickname, location);
  const dispatch = useDispatch();

  const nameInputRef = useRef(null);
  const nickNameInputRef = useRef(null);
  const locationInputRef = useRef(null);

  const handleClickModifyName = (e) => {
    e.preventDefault();
    if (!name) alert("이름을 입력하세요");
    const nameAction = updateName(nameInputRef.current.value);
    dispatch(nameAction);
  };
  const handleClickModifyNickName = (e) => {
    if (!nickname) alert("닉네임을 입력해주세요");
    e.preventDefault();
    const nicknameAction = updateNickName(nickNameInputRef.current.value);
    dispatch(nicknameAction);
  };
  const handleClickModifyLocation = (e) => {
    if (!location) alert("주소를 입력해주세요");
    e.preventDefault();
    const locationAction = updateLocation(locationInputRef.current.value);
    dispatch(locationAction);
  };

  return (
    <Page>
      <Form>
        <InputContainer>
          <InputLabel htmlFor="name">이름</InputLabel>
          <Input
            style={{ width: "100%" }}
            id="name"
            ref={nameInputRef}
            type="text"
            placeholder={name ? name : "이름"}
            required
          />
          <ModifyBtn onClick={handleClickModifyName}>수정</ModifyBtn>
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="nickName">닉네임</InputLabel>
          <Input
            style={{ width: "100%" }}
            id="nickName"
            ref={nickNameInputRef}
            type="text"
            placeholder={nickname ? nickname : "닉네임"}
            required
          />
          <ModifyBtn onClick={handleClickModifyNickName}>수정</ModifyBtn>
        </InputContainer>

        <InputContainer>
          <InputLabel htmlFor="location">주소</InputLabel>
          <Input
            style={{ width: "100%" }}
            id="location"
            ref={locationInputRef}
            type="text"
            placeholder={location ? location : "주소"}
            required
          />
          <ModifyBtn onClick={handleClickModifyLocation}>수정</ModifyBtn>
        </InputContainer>
      </Form>
    </Page>
  );
}

export default MyPage;

const Form = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 25rem;
  transform: translateY(50%);
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const InputLabel = styled.label`
  width: 100px;
  text-align: center;
`;
const ModifyBtn = styled(Button)`
  margin-left: 10px;
  width: 70px;
`;
