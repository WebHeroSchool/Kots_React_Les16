import React, {useState} from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todos.module.css'


const Todos = () => {

  const createId = () => {
    return `${Math.random().toString(36).substr(2, 9)}`;
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
    filter: 'all'
  };

  const [deals, setDeals] = useState(initialState.deals);
  const [filter, setFilter] = useState(initialState.filter);

  /*useEffect(() => {console.log('componentDidMount')}, []);
  useEffect(() => {console.log('componentDidUpdate')}, [deals]);*/

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
    setFilter(sorting);
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

  let filteringList;
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
  }

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>TODOs</h1>
      <InputItem deals={deals} onClickAdd={onClickAdd} />
      <ItemList
      onClickCheck={onClickCheck}
      onClickDelete={onClickDelete}
      onDoubleClickEdit={onDoubleClickEdit}
      onBlurSave={onBlurSave}
      filter={filteringList}
      />
      <Footer
      dealNumber={filteringList.length}
      onClickSort={onClickSort}
      filter={filter}
      />
    </div>
  );
}

export default Todos;
