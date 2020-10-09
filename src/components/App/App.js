import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css'

const deals = [{
  id: 1,
  isDone: true,
  value: 'Встать'
},{
  id: 2,
  isDone: false,
  value: 'Посидеть'
},{
  id: 3,
  isDone: true,
  value: 'Лечь'
}];
const dealNumber = deals.length;

const App = () => (<div className={styles.wrap}>
  <h1 className={styles.title}>TODOs</h1>
  <InputItem />
  <ItemList deals={deals}/>
  <Footer dealNumber={dealNumber}/>
  </div>
);

export default App;
