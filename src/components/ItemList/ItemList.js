import React from 'react';
import Item from './Item/Item';
import styles from './ItemList.module.css';

class ItemList extends React.Component {

  render() {
    const {deals, onClickCheck, onClickDelete} = this.props;
    return (<ul>
      {deals.map(deal =>
        <Item
        key={deal.id}
        deal={deal.value}
        isDone={deal.isDone}
        id={deal.id}
        onClickCheck={onClickCheck}
        onClickDelete={onClickDelete}
        />
      )}
      </ul>
    );
  }
}

export default ItemList;
