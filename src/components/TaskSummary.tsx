import styled from "styled-components";
import planet from "../assets/planet1.png";

const GlobalDiv = styled.div`
  width: 100%;
  background-color: white;
  height: 160px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const RightDiv = styled.div`
  width: 55%;
  height: 170px;
  background-color: #4861f6;
  border-radius: 20px;
  padding: 5px 10px 5px 10px;
`;

const LeftDiv = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100px;
`;

const HeaderText = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  color: white;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

const Button = styled.div`
  border-radius: 18px;
  width: 120px;
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  background: #66b9f8;
  span {
    font-weight: 800;
    color: #ffffff;
  }
`;

const Content = styled.div`
  width: 100%;
  padding-left: 10px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

function TaskSummary() {
  return (
    <GlobalDiv>
      <RightDiv>
        <Content>
          <HeaderText>Task Progress sumary</HeaderText>
          <Button>
            <span>See All</span>
          </Button>
        </Content>
      </RightDiv>
      <LeftDiv>
        <Img alt="planet" src={planet} />
      </LeftDiv>
    </GlobalDiv>
  );
}

export default TaskSummary;
