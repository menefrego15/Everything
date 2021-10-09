import useAuth from "../../hooks/useAuth";
import { Container } from "@material-ui/core";
import styled from "styled-components";

const Header = styled.header`
  width: "100%";
  height: 150px;
  display: flex;
  align-items: center;
`;

const HeaderText = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 900;
  color: #181818;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MyAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export default function Navbar() {
  const { user } = useAuth();
  return (
    <Header>
      <Container>
        <Nav>
          <HeaderText>Hello {user?.displayName.split(" ")[0]} 👋</HeaderText>
          <MyAvatar src={user?.photoURL} />
        </Nav>
      </Container>
    </Header>
  );
}
