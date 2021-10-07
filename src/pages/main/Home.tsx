import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PATH_MAIN } from "../../routes/paths";
import { Container, Grid } from "@material-ui/core";

const Button = styled.div`
  width: 100%;
  height: 82px;
  box-shadow: 0px 0px 13px 8px rgba(84, 84, 84, 0.09);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 14px;
  display: flex;
  align-items: center;
`;

const ButtonText = styled.span`
  width: auto;
  height: auto;
  overflow: visible;
  font-weight: 800;
  font-family: "Inter", sans-serif;
  color: #3b3b3b;
  font-size: 20px;
  letter-spacing: -0.4px;
  padding-left: 15px;
  line-height: 1.2;
`;

const StyleContainer = styled.div`
  padding: 15px 0 15px 0;
`;

const Home = () => {
  const MenuLinks = [
    { name: "⛅️ Weather", link: PATH_MAIN.weather.root },
    { name: "🕹 Games", link: PATH_MAIN.games.root },
    { name: "🎬 Movies", link: PATH_MAIN.movies.root },
    { name: "🎓 Tasks", link: PATH_MAIN.tasks.root },
    { name: "🍔 Food", link: PATH_MAIN.food.root },
  ];

  return (
    <Container>
      <StyleContainer>
        <Grid container spacing={2}>
          {MenuLinks.map((link) => {
            return (
              <Grid key={link.name} item xs={12} md={4} sm={6}>
                <Link to={link.link}>
                  <Button>
                    <ButtonText>{link.name}</ButtonText>
                  </Button>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </StyleContainer>
    </Container>
  );
};

export default Home;
