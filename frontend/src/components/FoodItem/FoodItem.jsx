import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import './FoodItem.css';

const FoodItem = ({ image, name, price, desc, id }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Defensive checks
  if (!image || !name || !price || !desc || !id) {
    console.error('Missing food item properties:', { image, name, price, desc, id });
    return null;
  }

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt={name} />
        {!cartItems[id]
          ? <button className='add' onClick={() => addToCart(id)}>Add to cart</button>
          : <div className="food-item-counter">
              <button onClick={() => removeFromCart(id)}>-</button>
              <p>{cartItems[id]}</p>
              <button onClick={() => addToCart(id)}>+</button>
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="food-item-desc">{desc}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;