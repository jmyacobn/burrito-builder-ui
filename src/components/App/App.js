import React, { Component } from 'react';
import './App.css';
import {getOrders, addOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    getOrders()
      .then((data) => {
        this.setState({orders: data.orders})
      })
  }

  addNewOrder = (newOrder) => {
    addOrders(newOrder)
    .then((data) => {
      this.setState({orders: [...this.state.orders, data]})
    })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addNewOrder={this.addNewOrder}/>
        </header>
        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
