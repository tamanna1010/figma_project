import { PlayCircleIcon } from "@heroicons/react/24/solid";
const TimelineCard = (props) => {
  const { message, person, role, duration } = props;
  return (
    <div className="border border-none hover:border-solid border-[#B4B7BD] h-[100px] width-[90%] mx-10 p-2">
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
