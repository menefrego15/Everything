import { Container } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const Card = styled.div`
  width: 100%;
  height: 150px;
  box-shadow: 0px 0px 13px 8px rgba(84, 84, 84, 0.09);
  background-color: #ffffff;
  overflow: visible;
  border-radius: 14px;
  display: flex;
  color: #333333;
`;

type Props = {
  items: string[];
  name: string;
};

const Categories = ({ items, name }: Props) => {
  return (
    <Card>
      <span>{name}</span>
      <span>{items[0]}</span>
    </Card>
  );
};

export default Categories;
