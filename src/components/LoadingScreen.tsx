import NProgress from "nprogress";
import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
// material
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import styled from "styled-components";
//
import Logo from "./Logo";

// ----------------------------------------------------------------------

const nprogressStyle = makeStyles((theme) => ({
  "@global": {
    "#nprogress": {
      pointerEvents: "none",
      "& .bar": {
        top: 0,
        left: 0,
        height: 2,
        width: "100%",
        position: "fixed",
        zIndex: 100,
        backgroundColor: "#2B2B2B",
        boxShadow: `0 0 2px #2B2B2B`,
      },
      "& .peg": {
        right: 0,
        opacity: 1,
        width: 100,
        height: "100%",
        display: "block",
        position: "absolute",
        transform: "rotate(3deg) translate(0px, -4px)",
        boxShadow: `0 0 10px #2B2B2B, 0 0 5px #2B2B2B`,
      },
    },
  },
}));

const RootStyle = styled.div`
  height: "100%";
  display: "flex";
  align-items: "center";
  justify-content: "center";
  background-color: white;
`;

// ----------------------------------------------------------------------

export default function LoadingScreen({ ...other }) {
  nprogressStyle();

  useMemo(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <RootStyle {...other}>
      <Container
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          <Logo sx={{ width: 64, height: 64 }} />
        </motion.div>
        <Box
          component={motion.div}
          animate={{
            scale: [1.2, 1, 1, 1.2, 1.2],
            rotate: [270, 0, 0, 270, 270],
            opacity: [0.25, 1, 1, 1, 0.25],
            borderRadius: ["25%", "25%", "50%", "50%", "25%"],
          }}
          transition={{ ease: "linear", duration: 3.2, repeat: Infinity }}
          sx={{
            width: 100,
            height: 100,
            borderRadius: "25%",
            position: "absolute",
            border: `solid 8px #2b2b2bc5`,
          }}
        />

        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 270, 270, 0, 0],
            opacity: [1, 0.25, 0.25, 0.25, 1],
            borderRadius: ["25%", "25%", "50%", "50%", "25%"],
          }}
          transition={{
            ease: "linear",
            duration: 3.2,
            repeat: Infinity,
          }}
          sx={{
            width: 120,
            height: 120,
            borderRadius: "25%",
            position: "absolute",
            border: `solid 8px #2b2b2bc5`,
          }}
        />
      </Container>
    </RootStyle>
  );
}
