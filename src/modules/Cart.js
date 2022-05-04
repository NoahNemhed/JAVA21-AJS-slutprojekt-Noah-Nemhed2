import React from "react";

export default function Cart(props){
    const { cartItems, AddItem, RemoveItem, AddItemInput } = props;
    const TotalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    
    function checkOut(price){
        alert("Customer has been debited $" + JSON.stringify(price)) 
    }
    return ( 
<aside className="block col-1">
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => AddItem(item)} className="add">
                +
              </button>
              <button onClick={() => RemoveItem(item)} className="remove">
                -
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price}

            </div>

          </div>
          
        ))}
          <div>
          <h1>Total price ${TotalPrice}</h1>
        </div>
        <div>
        <button className="check-out" onClick={() => checkOut(TotalPrice)}>Check Out</button>
        </div>
    </aside>
    );
}

