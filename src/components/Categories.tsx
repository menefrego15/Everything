import styled from "styled-components";
import faker from "faker";

const Card = styled.div`
  width: 220px;
  height: 170px;
  box-shadow: 0px 0px 13px 8px rgba(84, 84, 84, 0.09);
  background-color: ${(props) => props.color};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #ffffff;
  padding: 4px 12px 4px 12px;
  margin-right: 10px;
`;

const CardHeader = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

const CardSubHeader = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #ffffff94;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

const TopCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const MiddleCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const DotDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 18px;
  justify-content: space-between;
`;

const Dot = styled.div`
  background-color: #ffffff;
  width: 4px;
  height: 4px;
  border-radius: 50%;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const AvatarDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 3px;
  border: 1px solid white;
`;

const TasksDiv = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: ${(props) => props.color};
    font-weight: 800;
  }
`;

type Props = {
  items: string[];
  name: string;
  color: string;
};

const Categories = ({ items, name, color }: Props) => {
  return (
    <Card color={color}>
      <TopCard>
        <TextDiv>
          <CardHeader>{name}</CardHeader>
          <CardSubHeader>{items.length} tasks left</CardSubHeader>
        </TextDiv>
        <DotDiv>
          <Dot />
          <Dot />
          <Dot />
        </DotDiv>
      </TopCard>
      <MiddleCard>
        <AvatarDiv>
          <Avatar src={faker.image.avatar()} />
          <Avatar src={faker.image.avatar()} />
          <Avatar src={faker.image.avatar()} />
        </AvatarDiv>
        <TasksDiv color={color}>
          <span>{items.length} Task</span>
        </TasksDiv>
      </MiddleCard>
    </Card>
  );
};

export default Categories;
