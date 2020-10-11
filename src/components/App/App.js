import React, {useState, useEffect} from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css'


const App = () => {

  const createId = () => {
    return `${Math.random().toString(36).substr(2, 9)}`;
  }

  const initialState = {
    deals: [{
      id: createId(),
      isDone: true,
      value: 'Встать'
    },{
      id: createId(),
      isDone: false,
      value: 'Посидеть'
    },{
      id: createId(),
      isDone: true,
      value: 'Лечь'
    }]
  };

  const [deals, setDeals] = useState(initialState.deals);

  useEffect(() => {console.log('componentDidMount')}, []);
  useEffect(() => {console.log('componentDidUpdate')}, [deals]);

  const onClickAdd = value => {
    const newDealList = [...deals,
      {
        id: createId(),
        isDone: false,
        value: value
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

  const onClickDelete = id => {
    const newDealList = deals.filter(deal => deal.id !== id);
    setDeals(newDealList);
  };

  return  (
    <div className={styles.wrap}>
    <h1 className={styles.title}>TODOs</h1>
    <InputItem onClickAdd={onClickAdd} />
    <ItemList
    deals={deals}
    onClickCheck={onClickCheck}
    onClickDelete={onClickDelete}
    />
    <Footer dealNumber={deals.length} />
    </div>
  );
}

export default App;
