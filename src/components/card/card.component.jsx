import React from "react";
import { Card, Title, Text } from "./card.styled";

export const ItemCard = ({ card }) => (
  <Card>
    <Title>{card.name}</Title>
    <Text>{card.email}</Text>
    <Text>{card.phone}</Text>
    <Text>{card.adresses}</Text>
  </Card>
);
