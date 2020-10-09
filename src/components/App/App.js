import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const deals = ['Встать','Посидеть','Лечь'];
const dealNumber = deals.length;

const App = () => (<div><h1>TODOS</h1>
  <InputItem />
  <ItemList deals={deals}/>
  <Footer dealNumber={dealNumber}/>
  </div>);

export default App;
