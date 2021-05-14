import React from "react";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <div className="bg-dark text-white">
      <div className="container mx-auto flex justify-center flex-col items-center text-center py-28 md:py-40 px-5">
        <h1 className="font-bold font-mono text-4xl 	">
          Where teams build faster, together
        </h1>
        <p className="font-mono text-gray-400 pt-5">
          Create, share, and get feedback with collaborative sandboxes for rapid
          web development.
        </p>
        <div className="flex justify-between items-center py-20">
          <img
            className="w-12 md:w-22 px-2 md:px-3 transition-all duration-300 ease-in-out cursor-pointer opacity-40 transform hover:scale-125 hover:opacity-100 "
            src="/images/react.svg"
            alt="react"
          />
          <img
            className="w-12 md:w-22 px-2 md:px-3 transition-all duration-300 ease-in-out cursor-pointer opacity-40 transform hover:scale-125 hover:opacity-100 "
            src="/images/js.svg"
            alt="js"
          />
          <img
            className="w-12 md:w-22 px-2 md:px-3 transition-all duration-300 ease-in-out cursor-pointer opacity-40 transform hover:scale-125 hover:opacity-100 "
            src="/images/vue.svg"
            alt="vue"
          />
          <img
            className="w-12 md:w-22 px-2 md:px-3 transition-all duration-300 ease-in-out cursor-pointer opacity-40 transform hover:scale-125 hover:opacity-100 "
            src="/images/angular.svg"
            alt="angular"
          />
          <img
            className="w-12 md:w-22 px-2 md:px-3 transition-all duration-300 ease-in-out cursor-pointer opacity-40 transform hover:scale-125 hover:opacity-100 "
            src="/images/html.svg"
            alt="html"
          />
          <img
            className="w-12 md:w-22 px-2 md:px-3 transition-all duration-300 ease-in-out cursor-pointer opacity-40 transform hover:scale-125 hover:opacity-100 "
            src="/images/more.svg"
            alt="more"
          />
        </div>
        <Button text="Create Sandbox" px="7" py="3.5" />
      </div>
    </div>
  );
}
