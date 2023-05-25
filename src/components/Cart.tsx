import React from 'react'

interface Props {
  cartItems: string[];
  onClear: () => void;
  onRemove: (item: string) => void;
}

const Cart = ({cartItems, onClear, onRemove} : Props) => {
  return (
    <>
    <div>Cart</div>
    <ul>
      {cartItems.map(item => <li key={item}>{item} <button onClick={() => onRemove(item)}>Remove</button></li>)}
    </ul>
    <button onClick={onClear}>Clear</button>
    </>
  )
}

export default Cart