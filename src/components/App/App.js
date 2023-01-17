import React, { Component } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: [{
        id: 2,
        name: "hello",
        ingredients: ["olives", "mushrooms"]
      }]
    }
  }

  componentDidMount() {
    getOrders()
      .catch(err => console.error('Error fetching:', err));
  }

  addNewOrder = (newOrder) => {
    this.setState({orders: [...this.state.orders, newOrder]})
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
