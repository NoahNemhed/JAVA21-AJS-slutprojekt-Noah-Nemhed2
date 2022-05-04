import React from "react";
export default function Header(props){
   
    const Welcome = (props) => {
        return <h1>{props.text}</h1>;
      };

    return (
    <header>
        <div className="header">
            <a href="/">
                <h1>Electronic Shop</h1>
            </a>
        </div>
    </header>)
}
