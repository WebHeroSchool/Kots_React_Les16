import React from 'react';
import Item from './Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({deals}) => (<ul>
  {deals.map(deal =>
    <Item key={deal.id} deal={deal.value} isDone={deal.isDone}/>
  )}
  </ul>
);

export default ItemList;
