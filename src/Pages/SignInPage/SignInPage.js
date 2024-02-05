import React, { useEffect, useRef, useState } from "react";
import Page from "../../components/Page/Page";
import styled from "styled-components";
import { Button, Input, Form } from "../../components/Share/Button";
import { useAuth } from "../../contexts/auth.context";
import { useDispatch, useSelector } from "react-redux";
import { addUserId } from "../../store/reducers/user.reducer";

function SignInPage() {
  const { isLoggedIn, setIsLoggedIn, signIn } = useAuth();
  const { id } = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  const [userId, setuserId] = useState("");
  const [password, setPassword] = useState("");

  const userIdInputRef = useRef(null);
  const PasswordInputRef = useRef(null);

  const handleClickSignIn = (e) => {
    e.preventDefault();
    const idAction = addUserId(userIdInputRef.current.value);
    dispatch(idAction);
    setuserId(userIdInputRef.current.value);
    userIdInputRef.current.value = "";
    setPassword(PasswordInputRef.current.value);
    PasswordInputRef.current.value = "";

    if (userId === "udemy" && password === "udemy") {
      signIn();
    } else {
      return alert("아이디 또는 비밀번호를 다시 확인해주세요");
    }
  };

  return (
    <Page>
      <Wrapper>
        <LoginForm>
          <Input ref={userIdInputRef} type="text" placeholder="아이디"></Input>
          <Input
            ref={PasswordInputRef}
            type="password"
            placeholder="비밀번호"
          ></Input>
          <Button onClick={handleClickSignIn} style={{ marginTop: 10 }}>
            로그인
          </Button>
        </LoginForm>
      </Wrapper>
    </Page>
  );
}

export default SignInPage;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transform: translateY(50%);
`;
const LoginForm = styled.form`
  margin: 0 auto;
  width: 40%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;
