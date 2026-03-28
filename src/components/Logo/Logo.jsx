import React from "react";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <div>
      <NavLink to="/" className="text-xl font-bold tracking-tight">
        Your<span className="text-primary">Brand</span>
      </NavLink>
    </div>
  );
};

export default Logo;
