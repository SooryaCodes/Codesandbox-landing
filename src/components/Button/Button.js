import React from "react";

export default function Button({ px, py, classes ,text}) {
  return (
    <>
      <button
        className={`${classes} bg-indigo-500 hover:bg-indigo-600 transition-all transform hover:scale-110 duration-300	ease-in-out	font-mono px-${px} py-${py} text-white text-xs rounded-sm focus:outline-none  `}
      >
        {text}
      </button>
    </>
  );
}
