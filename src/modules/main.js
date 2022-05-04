import React from "react";
import Product from "./product";
export default function Main(props){
    const { products, AddItem, AddItemInput } = props;
    return <main className="col-2">
        <h2>Products</h2>
        <div className="Products">
        {products.map((product) => (
          <Product key={product.id} products={product} AddItem={AddItem} AddItemInput={AddItemInput}></Product>
        ))}
        </div>
    </main>
}
