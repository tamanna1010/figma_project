import { useState } from "react";
import TimelineCard from "./TimelineCard";

const TonesAnalysis = ({ timelineData, sentimentAnalysisFlag }) => {
  const buttonArr = Array.from(
    new Set(
      timelineData.map((item) =>
        sentimentAnalysisFlag ? item.sentiments : item.tones
      )
    )
  );
  const [activeButton, setActiveButton] = useState(buttonArr[0]);
  const activeTimelineData = timelineData.filter((item) =>
    sentimentAnalysisFlag
      ? item.sentiments === activeButton
      : item.tones === activeButton
  );
  const gridStyling = sentimentAnalysisFlag
    ? "grid-rows-[20%_80%]"
    : "grid-cols-[40%_60%]";
  return (
    <>
      <h1 className="text-white text-mg py-2 pl-5">
        {sentimentAnalysisFlag ? "Sentiments Analysis" : "Tones Analysis"}
      </h1>
      <div className={`grid ${gridStyling} h-[500px] mt-5 `}>
        <div className={`mx-10 ${sentimentAnalysisFlag ? "flex" : ""}`}>
          {buttonArr.map((button) => (
            <Button
              name={button}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              sentimentAnalysisFlag={sentimentAnalysisFlag}
            />
          ))}
        </div>
        <div className="overflow-auto">
          {activeTimelineData.map((item) => (
            <TimelineCard
              message={item.message}
              duration={item.duration}
              person={item.person}
              role={item.role}
              sentimentAnalysisFlag ={sentimentAnalysisFlag}
            />
          ))}
        </div>
      </div>
    </>
  );
};
const Button = ({
  activeButton,
  name,
  setActiveButton,
  sentimentAnalysisFlag,
}) => {
  const bg = activeButton === name ? "bg-[#7367F0]" : "bg-transparent";
  const width = sentimentAnalysisFlag ? "w-[100px]" : "w-[180px]";
  return (
    <div>
      <button
        className={`${bg} text-white p-3 ${width} rounded mb-5  text-left`}
        onClick={() => {
          setActiveButton(name);
        }}
      >
        {name}
      </button>
    </div>
  );
};
export default TonesAnalysis;
