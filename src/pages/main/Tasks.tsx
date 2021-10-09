import { Container, Box, Checkbox } from "@material-ui/core";
import styled from "styled-components";
import Categories from "../../components/Categories";
// import TaskSummary from "../../components/TaskSummary";
import SvgPlus from "../../assets/svgPlus";

const HeaderText = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

const SubHeaderText = styled.h4`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: #ffffff94;
  letter-spacing: -0.4px;
`;

const Header = styled.div`
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

const Task = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: #232d4f;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const TaskText = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #ffffff94;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

const TaskContainer = styled.div`
  margin-top: 10px;
`;

const content = [
  {
    name: "Sports",
    items: ["Do squats", "Have sex", "Go to the gym"],
    color: "#232D4F",
  },
  { name: "Business", items: ["Buy NFT", "Sell 2 courses"], color: "#34447A" },
  {
    name: "Personal",
    items: ["See family", "Eat 2 apple", "Talk to strangers"],
    color: "#232D4F",
  },
];

const ScrollableDiv = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  width: 100%;
  padding: 15px 15px 15px 0;
  margin-bottom: 15px;
`;

const DragButton = styled.div`
  width: 40px;
  height: 40px;
  background: transparent;
`;

const Tasks = () => {
  return (
    <Container style={{ overflow: "none" }}>
      <StyleContainer>
        {/* <TaskSummary /> */}
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
        <Box>
          <HeaderText>Most recent tasks</HeaderText>
          <TaskContainer>
            <Task>
              <Checkbox
                defaultChecked
                sx={{
                  color: "#6be2c6",
                  "&.Mui-checked": {
                    color: "#6be2c6",
                  },
                }}
              />
              <TaskText>Ranger le chien</TaskText>
              <DragButton />
            </Task>
          </TaskContainer>
        </Box>
      </StyleContainer>
    </Container>
  );
};

export default Tasks;
