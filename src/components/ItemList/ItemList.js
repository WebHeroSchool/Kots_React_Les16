import React from 'react';
import Item from './Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({deals, onClickCheck}) => (<ul>
  {deals.map(deal =>
    <Item
    key={deal.id}
    deal={deal.value}
    isDone={deal.isDone}
    id={deal.id}
    onClickCheck={onClickCheck}
    />
  )}
  </ul>
);

export default ItemList;
