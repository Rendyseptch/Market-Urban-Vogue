import React from "react";
import { Link } from "react-router-dom";

const Header =()=>{
return(
    <div className="bg-slate-100 font-bold left-10 border-b-2 border-gray-300 shadow-md">
    <div className="ui container flex items-center py-6">   
      <Link to="/" className="flex items-center">
        <img
          className="max-w-20 h-20 mr-4 cursor-pointer"
          src="https://www.svgrepo.com/show/235241/renewable-energy.svg"
          alt="Logo"
        />
        <h2 className="font-bold text-4xl">Urban Vogue</h2>
      </Link>
    </div>
  </div>
)
}
export default Header