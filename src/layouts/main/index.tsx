import { Outlet } from "react-router-dom";
import styled from "styled-components";
// material
//
import Navbar from "./Navbar";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled.div`
  display: "flex";
  min-height: "100%";
  overflow: "hidden";
`;

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
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
