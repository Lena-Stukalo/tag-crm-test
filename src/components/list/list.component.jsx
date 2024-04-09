import React from "react";
import { List, Wraper } from "./list.styled";
import { ItemCard } from "../card/card.component";
import { PrimryButton } from "../../utils/utils-components.styled";

export const ItemsList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map((item) => (
        <Wraper key={item.id}>
          <ItemCard card={item} />
          <PrimryButton
            onClick={() => {
              onDelete(item.id);
            }}
            isPrimary
            type="button"
          >
            Delete
          </PrimryButton>
        </Wraper>
      ))}
    </List>
  );
};
