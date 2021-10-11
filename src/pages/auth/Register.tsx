import useAuth from "../../hooks/useAuth";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import { useState } from "react";
import userIcon from "../../assets/userIcon.png";
import passIcon from "../../assets/Password.png";

const InputContainer = styled.div`
  display: flex;
  width: 70%;
  height: 290px;
  max-width: 270px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  background: #071037;
  border-radius: 35px;
  box-shadow: 0px 0px 38px 6px rgba(107, 226, 198, 0.19);
`;

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  background: #232d4f;
  border-radius: 15px;
  width: 90%;
  height: 50px;
  max-width: 160px;
  border: none;
  padding-left: 15px;
  color: white;
  font-weight: 700;
  &:focus {
    outline: none !important;
    border: 2px solid #6be2c6;
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
`;

const Icon = styled.img`
  width: 15px;
  margin-right: 10px;
`;

const DivBtn = styled.div`
  width: 200px;
  margin-top: 400px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginBtn = styled.button`
  width: 150px;
  height: 60px;
  border-radius: 15px;
  background: #6be2c6;
  color: #071037;
  border: none;
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    background: #34ffd0;
    box-shadow: 0px 0px 18px 6px rgba(107, 226, 198, 0.19);
  }
`;

const SocialBtn = styled.button`
  width: 80px;
  height: 60px;
  border-radius: 15px;
  background: #6be2c6;
  color: #071037;
  cursor: pointer;
  border: none;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  :hover {
    background: #34ffd0;
    box-shadow: 0px 0px 18px 6px rgba(107, 226, 198, 0.19);
  }
`;

const SignupBtn = styled.button`
  height: 60px;
  border-radius: 15px;
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 900;
  font-size: 0.8rem;
  text-decoration: underline;
`;

export default function Login() {
  const { loginWithGoogle, register } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [pass, setPassword] = useState<string>("");

  const handleLoginGoogle = async () => {
    try {
      await loginWithGoogle?.();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <SocialBtn onClick={handleLoginGoogle}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
              fill="#2F2F2F"
            />
            <path
              d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z"
              fill="#2F2F2F"
            />
            <path
              d="M8.16007 18.7688C7.85848 17.8977 7.68395 16.9643 7.68395 15.9999C7.68395 15.0354 7.85849 14.1021 8.1442 13.231L8.13621 13.0455L3.67126 9.64734L3.52518 9.71544C2.55696 11.6132 2.0014 13.7444 2.0014 15.9999C2.0014 18.2555 2.55696 20.3865 3.52518 22.2843L8.16007 18.7688Z"
              fill="#2F2F2F"
            />
            <path
              d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z"
              fill="#2F2F2F"
            />
          </svg>
        </SocialBtn>
      </div>
      <InputContainer>
        <InputDiv>
          <Icon src={userIcon} />
          <Input
            id="firstname"
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </InputDiv>
        <InputDiv>
          <Icon src={userIcon} />
          <Input
            id="lastname"
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </InputDiv>
        <InputDiv>
          <Icon src={userIcon} />
          <Input
            id="email"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputDiv>
        <InputDiv>
          <Icon src={passIcon} />
          <Input
            id="password"
            placeholder="Password"
            type="password"
            value={pass}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputDiv>
        <DivBtn>
          <LoginBtn
            type="submit"
            onClick={() => register(email, pass, firstName, lastName)}
          >
            Sign In
          </LoginBtn>
          <Link to="/auth/login">
            <SignupBtn type="button">Already have an account ? Login</SignupBtn>
          </Link>
        </DivBtn>
      </InputContainer>
    </Container>
  );
}
