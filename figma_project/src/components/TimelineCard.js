import { PlayCircleIcon } from "@heroicons/react/24/solid";
const TimelineCard = (props) => {
  const { message, person, role, duration,sentimentAnalysisFlag } = props;
  return (
    <div className={`relative border border-none hover:border-solid border-[#B4B7BD] h-[100px] width-[90%] ${sentimentAnalysisFlag===false?"mx-5":"mx-10"} p-2 mt-2`}>
      <div className="absolute top-[-5px] left-[-5px] rounded-full bg-[#82868B] h-[12px] w-[12px]"/>
      <div className="absolute top-0 left-0 bg-[#82868B] h-[104%] w-[1px]"/>
      <div className="flex justify-between">
        <p className="text-white text-sm  truncate hover:text-wrap">
          {message}
        </p>
        <div className="flex justify-between">
          <p className="text-white text-sm">{duration}</p>
          <PlayCircleIcon className="h-5 w-5 text-[#00CD00]" />
        </div>
      </div>
      <div className="m-2 flex items-center">
        {" "}
        <p className="inline-block h-7 w-7 rounded-full  mr-5 flex justify-center items-center text-[#00CFE8] bg-[#00CFE8]/[0.5]">
          {person[0]}
        </p>
        <div>
          <p className="text-white text-mg">{person}</p>
          <p className="text-white text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};
export default TimelineCard;
