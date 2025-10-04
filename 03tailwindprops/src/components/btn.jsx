import React from "react";
export default function Btn(props) {
  return (
      <button
        type="button"
        className="px-10 py-5 h-15 active:scale-95 scale-105 font-semibold border duration-50 rounded-2xl dark:border-gray-100 dark:text-gray-100 font-serif text-3xl"
      >
        {props.name}
      </button>

  );
}
