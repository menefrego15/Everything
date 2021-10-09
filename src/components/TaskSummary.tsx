import styled from "styled-components";

const GlobalDiv = styled.div`
  width: 100%;
  background-color: transparent;
  height: 130px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const RightDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
  padding-left: 10px;
`;

const HeaderText = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  color: white;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

const Button = styled.div`
  border-radius: 13px;
  width: 100px;
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: #6be2c6;
  span {
    font-weight: 800;
    color: #232d4f;
  }
`;

function TaskSummary() {
  return (
    <GlobalDiv>
      <RightDiv>
        <HeaderText>Task Progress sumary</HeaderText>
        <Button>
          <span>See All</span>
        </Button>
      </RightDiv>
    </GlobalDiv>
  );
}

export default TaskSummary;
