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
  color: #2b2b2b;
  font-family: "Inter", sans-serif;
  font-weight: 900;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

export default function Navbar() {
  const { user } = useAuth();
  return (
    <Header>
      <Container>
        <HeaderText>Hello {user?.displayName} 👋</HeaderText>
      </Container>
    </Header>
  );
}
