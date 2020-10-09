import React from 'react';
import Item from './Item/Item';

const ItemList = ({deals}) => (<ul>
<li><Item deal={deals[0]}/></li>
<li><Item deal={deals[1]}/></li>
<li><Item deal={deals[2]}/></li>
</ul>);

export default ItemList;
