import { Container } from "@material-ui/core";
import styled from "styled-components";
import Categories from "../../components/Categories";

const HeaderText = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 900;
  color: #212121c6;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

const SubHeaderText = styled.h4`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #ec9000;
  letter-spacing: -0.4px;
`;

const Header = styled.div`
  padding-bottom: 20px;
`;

const StyleContainer = styled.div`
  padding: 15px 0 15px 0;
`;

const content = [
  {
    name: "Sports",
    items: ["Do squats", "Have sex", "Go to the gym"],
    emoji: "⚽️",
  },
  { name: "Business", items: ["Buy NFT", "Sell 2 courses"], emoji: "📊" },
  {
    name: "Personal",
    items: ["See family", "Eat 2 apple", "Talk to strangers"],
    emoji: "👨‍👩‍👧",
  },
];

const ScrollableDiv = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  width: 100%;
  padding: 15px 15px 15px 0;
`;

const Tasks = () => {
  return (
    <Container style={{ overflow: "none" }}>
      <StyleContainer>
        <Header>
          <HeaderText>Categories</HeaderText>
          <SubHeaderText>6 tasks left</SubHeaderText>
        </Header>
        <ScrollableDiv>
          {content.map((cat) => {
            return (
              <div key={cat.name}>
                <Categories
                  name={cat.name}
                  items={cat.items}
                  emoji={cat.emoji}
                />
              </div>
            );
          })}
        </ScrollableDiv>
      </StyleContainer>
    </Container>
  );
};

export default Tasks;
