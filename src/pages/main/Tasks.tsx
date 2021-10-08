import { Container } from "@material-ui/core";
import styled from "styled-components";
import Categories from "../../components/Categories";
import SvgPlus from "../../assets/svgPlus";

const HeaderText = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 900;
  color: #4d3c3a;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

const SubHeaderText = styled.h4`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: #65baf7;
  letter-spacing: -0.4px;
`;

const Header = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleContainer = styled.div`
  padding: 15px 0 15px 0;
`;

const content = [
  {
    name: "Sports",
    items: ["Do squats", "Have sex", "Go to the gym"],
    color: "#2467f4",
  },
  { name: "Business", items: ["Buy NFT", "Sell 2 courses"], color: "#218BF8" },
  {
    name: "Personal",
    items: ["See family", "Eat 2 apple", "Talk to strangers"],
    color: "#2467f4",
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
          <TextDiv>
            <HeaderText>Categories</HeaderText>
            <SubHeaderText>6 tasks left</SubHeaderText>
          </TextDiv>
          <SvgPlus />
        </Header>
        <ScrollableDiv>
          {content.map((cat) => {
            return (
              <div key={cat.name}>
                <Categories
                  name={cat.name}
                  items={cat.items}
                  color={cat.color}
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
