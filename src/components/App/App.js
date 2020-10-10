import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css'

class App extends React.Component {
  state = {
    deals: [{
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
    }]
  };

  onClickCheck = id => {
    const newDealList = this.state.deals.map(deal => {
      const newDeal = { ...deal };
      if (deal.id === id) {
        newDeal.isDone = !deal.isDone;
      }
      return newDeal;
    });

    this.setState({deals: newDealList});
  };


  render() {
    return  (
      <div className={styles.wrap}>
      <h1 className={styles.title}>TODOs</h1>
      <InputItem />
      <ItemList deals={this.state.deals} onClickCheck={this.onClickCheck}/>
      <Footer dealNumber={this.state.deals.length}/>
      </div>
    );
  }
}

export default App;
