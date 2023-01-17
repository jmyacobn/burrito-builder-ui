import React from 'react';
import './Orders.css';

const Orders = ({orders, id}) => {
  const orderEls = orders.map(order => {
    console.log(order.id)
    return (
      <div className="order" key={id}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map(ingredient => {
            return <li key={id}>{ingredient}</li>
          })}
        </ul>
      </div>
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;