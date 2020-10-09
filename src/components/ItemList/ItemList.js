import React from 'react';
import Item from './Item/Item';

const ItemList = ({deals}) => (<ul>
  {deals.map(deal => <li key={deal.value}><Item deal={deal.value}/></li>)}
</ul>);

export default ItemList;
