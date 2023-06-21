import React from "react";

// accept the page name as prop here
export const Navbar = ({props}:string) => {
  return (
    <div>
      <h2>Product List</h2>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="add-product-link" href="/add-product">
        Add Product
      </a>
      <h3 data-testid="page-name">{props.name}</h3>
    </div>
  );
};
