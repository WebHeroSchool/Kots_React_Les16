import React from 'react';
import Item from './Item/Item';
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd';
import styles from './ItemList.module.css';

class ItemList extends React.Component {

  render() {
    const {filter, onClickCheck, onClickDelete, onDoubleClickEdit, onBlurSave, onDragEnd,} = this.props;
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={"list"}>
        {(provided) => (
          <ul className={styles.wrap} {...provided.droppableProps} ref={provided.innerRef}>
          {filter.map((deal, index) =>
            <Draggable draggableId={deal.id} index={index} key={deal.id} >
              {(provided) => (
              <Item
              key={deal.id}
              value={deal.value}
              edit={deal.edit}
              isDone={deal.isDone}
              id={deal.id}
              provided={provided}
              innerRef={provided.innerRef}
              onClickCheck={onClickCheck}
              onClickDelete={onClickDelete}
              onDoubleClickEdit={onDoubleClickEdit}
              onBlurSave={onBlurSave}
              index={index}
              />
            )}
            </Draggable>
          )}
          {provided.placeholder}
          </ul>
        )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default ItemList;
