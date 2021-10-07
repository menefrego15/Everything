import { Outlet } from "react-router-dom";
import styled from "styled-components";
// material
//
import Navbar from "./Navbar";

// ----------------------------------------------------------------------

const RootStyle = styled.div`
  display: "flex";
  min-height: "100%";
  overflow: "hidden";
`;

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
}));

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <RootStyle>
      <Navbar />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
