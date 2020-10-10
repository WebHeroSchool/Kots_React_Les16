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

  onClickAdd = value => this.setState(state => ({
    deals: [...state.deals,
      {
        id: state.deals.length + 1,
        isDone: false,
        value: value
      }
    ]
  }));

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

  onClickDelete = id => {
    this.setState(state => ({deals: this.state.deals.filter(deal => deal.id !== id)}));
  };

  render() {
    return  (
      <div className={styles.wrap}>
      <h1 className={styles.title}>TODOs</h1>
      <InputItem onClickAdd={this.onClickAdd} />
      <ItemList
      deals={this.state.deals}
      onClickCheck={this.onClickCheck}
      onClickDelete={this.onClickDelete}
      />
      <Footer dealNumber={this.state.deals.length} />
      </div>
    );
  }
}

export default App;
