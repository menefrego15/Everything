import styled from "styled-components";

const Card = styled.div`
  width: 150px;
  height: 150px;
  box-shadow: 0px 0px 13px 8px rgba(84, 84, 84, 0.09);
  background-color: #ffffff;
  border-radius: 39px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #333333;
  padding: 4px 12px 4px 12px;
  margin-left: 10px;
`;

const CardHeader = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  color: #3b3b3b;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

const CardSubHeader = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #3b3b3b;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

const TextDiv = styled.div``;

const EmojiDiv = styled.div``;

const Emoji = styled.span`
  font-size: 2.5rem;
`;

type Props = {
  items: string[];
  name: string;
  emoji: string;
};

const Categories = ({ items, name, emoji }: Props) => {
  return (
    <Card>
      <EmojiDiv>
        <Emoji>{emoji}</Emoji>
      </EmojiDiv>
      <TextDiv>
        <CardHeader>{name}</CardHeader>
        <CardSubHeader>{items.length} tasks remaining</CardSubHeader>
      </TextDiv>
    </Card>
  );
};

export default Categories;
