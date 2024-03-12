import Slider from "@mui/material-next/Slider";
import { PlayIcon, CogIcon, SpeakerWaveIcon } from "@heroicons/react/24/solid";
import Timeline from "./Timeline";
import TonesAnalysis from "./TonesAnalysis";
import TimelineCard from "./TimelineCard";

const TranscriptAnalysisSection = (props) => {
  const { title, timelineData } = props;
  return (
    <div className="">
      <h1 className="text-white text-xl py-5 pl-2">{title}</h1>
      <div className="bg-app-layover w-[100%] h-[40px]">
        <div className="flex justify-start items-center w-[95%] ml-10 text-white">
          <PlayIcon className="w-5 h-5 " />{" "}
          <Slider
            marks={false}
            max={10}
            min={0}
            size="small"
            valueLabelDisplay="auto"
            sx={{ width: "50%", margin: "0 20px" }}
          />
          <CogIcon className="h-5 w-5 ml-10" />
          <p className="text-sm mx-3">02:35</p>
          <SpeakerWaveIcon className="h-5 w-5 mx-5 " />
          <Slider
            marks={false}
            max={10}
            min={0}
            size="small"
            valueLabelDisplay="auto"
            sx={{ width: "10%" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-10 w-[100%] rounded-l mt-5">
        <div className="bg-app-layover rounded-l">
          <Timeline timelineData={timelineData} />
        </div>
        <div className="grid grid-rows-3 gap-y-10  rounded-l">
          <div className="bg-app-layover w-[100%] h-[100%] ">
            <TonesAnalysis
              timelineData={timelineData}
              sentimentAnalysisFlag={false}
            />
          </div>
          <div className="bg-app-layover w-[100%] h-[100%] ">
            <TonesAnalysis
              timelineData={timelineData}
              sentimentAnalysisFlag={true}
            />
          </div>
          <div className="bg-app-layover w-[100%] h-[100%] overflow-auto">
            <h1 className="text-white text-mg py-2 pl-5">Tones Analysis</h1>
            {timelineData.map((item) => (
              <TimelineCard
                message={item.message}
                duration={item.duration}
                person={item.person}
                role={item.role}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TranscriptAnalysisSection;
