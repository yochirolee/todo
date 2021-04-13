import { useState } from "react";

export default function Badge({ color, text }) {
  return (
    <div className="flex flex-row text-xs justify-around pr-2">
      <span
        className={`px-3   w-24  text-${color}-500  font-bold   p-1 text-center  text-xs`}
      >
        {text}
      </span>
      <button>
        <i class="las la-edit text-base"></i>
      </button>
      <button>
        <i class="las la-trash text-base"></i>{" "}
      </button>
    </div>
  );
}
