import React from "react";
import { Link } from "react-router-dom";

const Menu= () =>{
    return(
        <div className="categories">
        <Link className="category" to="/category/Mountain">Mountain</Link>
        <Link className="category" to="/category/Beaches">Beaches</Link>
        <Link className="category" to="/category/Birds">Birds</Link>
        <Link className="category" to="/category/Food">Food</Link>
      </div>
       
    )
}
export default Menu;