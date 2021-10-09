import useAuth from "../../hooks/useAuth";
import { Container } from "@material-ui/core";
import styled from "styled-components";

const Header = styled.header`
  width: "100%";
  height: 80px;
  display: flex;
  align-items: center;
`;

const Hamburger = styled.div`
  width: 35px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #6be2c665;
  border-radius: 10px;
  box-shadow: 0px 0px 13px 8px #6be2c613;

  padding: 8px;
`;
const Hamb1 = styled.div`
  width: 100%;
  height: 7px;
  background: #6be2c6;
  border-radius: 7px;
`;

const Hamb2 = styled.div`
  width: 90%;
  height: 7px;
  background: #6be2c6;
  border-radius: 7px;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MyAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  border: 2px solid #6be2c6;
  box-shadow: 0px 0px 13px 8px #6be2c621;
`;

export default function Navbar() {
  const { user } = useAuth();
  return (
    <Header>
      <Container>
        <Nav>
          <Hamburger>
            <Hamb1 />
            <Hamb2 />
            <Hamb1 />
          </Hamburger>
          <MyAvatar src={user?.photoURL} />
        </Nav>
      </Container>
    </Header>
  );
}
