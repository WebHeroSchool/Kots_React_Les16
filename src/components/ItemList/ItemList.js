import React from 'react';
import Item from './Item/Item';
import styles from './ItemList.module.css';

class ItemList extends React.Component {

  render() {
    const {filter, onClickCheck, onClickDelete, onDoubleClickEdit, onBlurSave} = this.props;
    return (<ul>
      {filter.map(deal =>
        <Item
        key={deal.id}
        value={deal.value}
        edit={deal.edit}
        isDone={deal.isDone}
        id={deal.id}
        onClickCheck={onClickCheck}
        onClickDelete={onClickDelete}
        onDoubleClickEdit={onDoubleClickEdit}
        onBlurSave={onBlurSave}
        />
      )}
      </ul>
    );
  }
}

export default ItemList;
