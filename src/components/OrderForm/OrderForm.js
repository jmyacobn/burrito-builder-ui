import React, { Component } from 'react';

class OrderForm extends Component {
  constructor({props}) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newOrder = {
      id: Date.now(),
      name: this.state.name,
      ingredients: this.state.ingredients
    }
    if(this.state.name.length && this.state.ingredients.length) {
      this.props.addNewOrder(newOrder)
      this.clearInputs();
    } else {
      console.log("MISSING FIELDS")
    }
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  handleIngredientChange = (event) => {
    event.preventDefault();
    this.setState({ingredients: [...this.state.ingredients, event.target.name]})
  }

  handleNameChange = (event) => {
    this.setState({name: [event.target.value]})
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        <section className='ing-section'>
          { ingredientButtons }
        </section>
        
        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button className="submit-button" onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
