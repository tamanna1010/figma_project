import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

export default function StatusButtons(props) {
  const { buttonArr, activeButton, setActiveButton } = props;
  console.log("props", props);
  return (
    <div>
      {buttonArr.map((el) => (
        <button
          className={`${
            activeButton === el ? "bg-[#B1E077]" : "bg-[#C2C9D1]"
          } p-2 rounded-full mr-2 min-w-[100px] h-[45px] text-center`}
          onClick={() => setActiveButton(el)}
        >
          <div className="flex items-center justify-center">
            {" "}
            {activeButton === el && (
              <CheckIcon className={`w-5 h-5 font-bold text-[#3CC13B]`} />
            )}
            {el}
          </div>
        </button>
      ))}
    </div>
  );
}
