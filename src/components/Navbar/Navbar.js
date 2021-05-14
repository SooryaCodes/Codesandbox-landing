import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Icons from "../Icons/Icons";

export default function Navbar() {
  return (
    <>
      <nav
        className="flex justify-between items-center h-16 bg-dark relative  shadow-sm font-mono"
        role="navigation"
      >
        <nav className="container mx-auto flex items-center justify-between text-light ">
          <div className="flex items-center justify-start px-3">
            <img src="/images/logo.svg" alt="Logo" />
            <Link className="px-4 font-mono text-sm ">CodeSandbox</Link>
          </div>
          <div className="flex item-center justify-center hidden xl:flex">
            <Link className="px-4 text-xs font-mono flex items-center">
              Product {Icons.ArrowDown}
            </Link>
            <Link className="px-4 text-xs font-mono flex items-center">
              Explore {Icons.ArrowDown}
            </Link>
            <Link className="px-4 text-xs font-mono flex items-center">
              Resources {Icons.ArrowDown}
            </Link>
            <Link className="px-4 text-xs font-mono flex items-center">
              Support {Icons.ArrowDown}
            </Link>
            <Link className="px-4 text-xs font-mono flex items-center">
              Pricing
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <Link className="font-mono text-xs  ">Sign In</Link>
            <span className="xl:hidden px-4 cursor-pointer">{Icons.Menu}</span>
            <Button px="4" py="2" classes="xl:block hidden mx-4" />
          </div>
        </nav>
      </nav>
    </>
  );
}
