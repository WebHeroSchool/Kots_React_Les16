import React, {useState, useEffect} from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todos.module.css'


const Todos = () => {

  const createId = () => {
    return `${Math.random().toString(36).substr(2, 9)}`;
  }

  function compare( a, b ) {
    if ( a.value < b.value ){
      return -1;
    }
    if ( a.value > b.balue ){
      return 1;
    }
    return 0;
  }

  const initialState = {
    deals: [{
      id: createId(),
      isDone: true,
      value: 'Встать',
      edit: false
    },{
      id: createId(),
      isDone: false,
      value: 'Посидеть',
      edit: false
    },{
      id: createId(),
      isDone: true,
      value: 'Лечь',
      edit: false
    }],
    filter: 'all',
    sort: 'None'
  };

  const [deals, setDeals] = useState(initialState.deals);
  const [filter, setFilter] = useState(initialState.filter);
  const [sort, setSort] = useState(initialState.sort);

  const onClickAdd = value => {
    const newDealList = [...deals,
      {
        id: createId(),
        isDone: false,
        value: value,
        edit: false
      }
    ];
    setDeals(newDealList);
  };

  const onClickCheck = id => {
    const newDealList = deals.map(deal => {
      const newDeal = { ...deal };
      if (deal.id === id) {
        newDeal.isDone = !deal.isDone;
      }
      return newDeal;
    });
    setDeals(newDealList);
  };

  const onDoubleClickEdit = id => {
    const newDealList = deals.map(deal => {
      const newDeal = { ...deal };
      if (deal.id === id) {
        newDeal.edit = true;
      }
      return newDeal;
    });
    setDeals(newDealList);
  }

  const onClickDelete = id => {
    const newDealList = deals.filter(deal => deal.id !== id);
    setDeals(newDealList);
  };

  const onClickSort = sorting => {
    setSort(sorting);
  }

  const onClickFilter = filtering => {
    setFilter(filtering);
  };

  const onBlurSave = (id, value, isDone) => {
    const newDealList = deals.map(deal => {
      const updatedDeal = { ...deal };
      if (deal.id === id) {
        updatedDeal.value = value;
        updatedDeal.edit = false;
        updatedDeal.isDone = isDone;
      }
      return updatedDeal;
    });
    setDeals(newDealList);
  };

  const onDragEnd = result => {
    const { source, destination } = result;
    if (!destination) return;
    const newDealList = [...deals];
    const [removed] = newDealList.splice(source.index, 1);
    newDealList.splice(destination.index, 0, removed);
    setDeals([...newDealList]);
  };

  const onSort = () => {
    let filteringList;
    let sortingList;

    switch (filter) {
      case 'done':
        filteringList = deals.filter(item => item.isDone);
        break;
      case 'active':
        filteringList = deals.filter(item => !item.isDone);
        break;
      case 'all':
        filteringList = deals;
        break;
      default :
        filteringList = deals;
    };

    switch (sort) {
      case 'None':
        sortingList = filteringList;
        break;
      case 'A':
        sortingList = filteringList.map(deal=>deal);
        sortingList.sort(compare);
        break;
      case 'Z':
        sortingList = filteringList.map(deal=>deal);
        sortingList.sort(compare).reverse();
        break;
      default :
        sortingList = filteringList;
    }
    return sortingList;
  }

  let sortingList = onSort();

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>TODOs</h1>
      <InputItem deals={deals} onClickAdd={onClickAdd} onClickSort={onClickSort}/>
      <ItemList
      onClickCheck={onClickCheck}
      onClickDelete={onClickDelete}
      onDoubleClickEdit={onDoubleClickEdit}
      onBlurSave={onBlurSave}
      onDragEnd={onDragEnd}
      filter={sortingList}
      />
      <Footer
      dealNumber={sortingList.length}
      onClickFilter={onClickFilter}
      filter={filter}
      />
    </div>
  );
}

export default Todos;
