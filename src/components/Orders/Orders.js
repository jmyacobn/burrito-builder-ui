import React from 'react';
import './Orders.css';

const Orders = ({orders, id}) => {
  const orderEls = orders.map(order => {
    return (
      <div className="order" key={order.id}>
        <h3 key={Date.now()+ order.name}>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map(ingredient => {
            return <li key={ingredient}>{ingredient}</li>
          })}
        </ul>
      </div>
    )
  });

  return (
    <section className="orders">
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;