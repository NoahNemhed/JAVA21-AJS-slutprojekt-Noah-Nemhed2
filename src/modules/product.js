import React, { useRef, useState } from 'react'


export default function Product(props) {
  const [val, setVal] = useState(1)
  const { products, AddItemInput } = props;
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);

  function setValue(e){
    setVal(e.currentTarget.value)
  }

  return (
    <div className='product-div'>
      <h2>{products.name}</h2>
      <img className='product-img' src={products.img} alt={products.name}></img>
      <div>${products.price}</div>
      <div className='Amount'>
          <input type="number" min={1} onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()} className='input-field' defaultValue={1} placeholder='amount' onChange={(e) => setValue(e)}/>
          <button onClick={() => AddItemInput(products,parseInt(val))} className='add-button' >Add item to cart</button>
      </div>
    </div> 
    
    )
}
