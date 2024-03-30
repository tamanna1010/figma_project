import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React from "react";
import LinearWithValueLabel from "./LinearBar";
const CommentContainer = (props) => {
  return (
    <div className="h-[250px] bg-[#E9E9E9] mb-5 rounded-lg p-[20px]">
      <div className="flex h-[100%] w-[100%]">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white mr-5"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="grow">
          <p className="opacity-[0.5]">Today 4:45pm</p>
          <div className="bg-app-background h-[80%] w-[100%] rounded-lg grid grid-cols-2 p-[20px]">
            <div className="border-r-2 border-[#E9E9E9] ">
              <div className="flex items-center mb-[30px] ">
                {" "}
                <PaperAirplaneIcon className="h-7 w-7 mr-5  p-2 rounded-lg bg-success-call" />
                <h1 className="font-bold">Schedule Status</h1>
              </div>
              <LinearWithValueLabel />
            </div>
            <div>
              <p className="opacity-[0.5] p-3">
                Nulla pulvinar ex id orci tempor, id accumsan metus pretium.
                Proin mollis venenatis magn...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const CommentsSection = (props) => {
  const { card_arr } = props;
  return (
    <div className="mt-2">
      {card_arr.map((el) => (
        <CommentContainer />
      ))}
    </div>
  );
};
export default CommentsSection;
