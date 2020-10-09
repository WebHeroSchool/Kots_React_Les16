import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css'

const deals = [{value: 'Встать'},
{value: 'Посидеть'},
{value: 'Лечь'}];
const dealNumber = deals.length;

const App = () => (<div className='wrap'><h1 className='wrap__title'>TODOs</h1>
<InputItem />
<ItemList deals={deals}/>
<Footer dealNumber={dealNumber}/>
</div>);

export default App;
