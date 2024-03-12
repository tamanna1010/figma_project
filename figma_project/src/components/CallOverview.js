import {
  PhoneIcon,
  UserCircleIcon,
  ArrowTrendingUpIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
const CallOverView = (props) => {
  const { title } = props;
  return (
    <div>
      <h1 className="text-white text-xl py-5 pl-2">{title}</h1>
      <div className="grid grid-cols-4 w-[100%] h-[130px] bg-app-layover rounded ">
        <CallOverViewCards
          Icon={PhoneIcon}
          name={"#9867"}
          property={"Call ID"}
          color={"text-[#28C76F]"}
          bgColor={"bg-[#28C76F]/[0.5]"}
        />
        <CallOverViewCards
          Icon={UserCircleIcon}
          name={"Binod Verma"}
          property={"Agent"}
          color={"text-[#00CFE8]"}
          bgColor={"bg-[#00CFE8]/[0.5]"}
        />
        <CallOverViewCards
          Icon={ArrowTrendingUpIcon}
          name={"008970"}
          property={"Customer Number"}
          color={"text-[#EA5455]"}
          bgColor={"bg-[#EA5455]/[0.5]"}
        />
        <CallOverViewCards
          Icon={DevicePhoneMobileIcon}
          name={"21-07-2023"}
          property={"Call Time Stamp"}
          color={"text-[#28C76F]"}
          bgColor={"bg-[#28C76F]/[0.5]"}
        />
      </div>
      <div className="grid grid-cols-3 mt-5 gap-x-10">
        <CallOverViewCardsV2
          Icon={PhoneIcon}
          value={"03:56"}
          property={"AHT"}
          color={"text-[#00CFE8]"}
          bgColor={"bg-[#00CFE8]/[0.5]"}
        />
        <CallOverViewCardsV2
          Icon={ChatBubbleLeftEllipsisIcon}
          value={"PTP"}
          property={"Desposition Status"}
          color={"text-[#FF9F43]"}
          bgColor={"bg-[#FF9F43]/[0.5]"}
        />
        <CallOverViewCardsV2
          Icon={PhoneIcon}
          value={"86"}
          property={"Compliance Score"}
          color={"text-[#EA5455]"}
          bgColor={"bg-[#EA5455]/[0.5]"}
        />
      </div>
    </div>
  );
};
const CallOverViewCardsV2 = (props) => {
  const { Icon, value, property, color, bgColor } = props;
  return (
    <div className="bg-app-layover w-[100%] h-[160px] flex flex-col justify-center items-center">
      <Icon className={`h-12 w-12 p-2 m-2 ${color} ${bgColor} rounded-full`} />
      <h1 className={`${color} text-xl font-bold`}>{value}</h1>
      <p className="text-sm text-sub-title">{property}</p>
    </div>
  );
};
const CallOverViewCards = (props) => {
  const { Icon, name, property, color, bgColor } = props;

  return (
    <div className="flex items-center p-5 w-[100%] ">
      <Icon className={`h-12 w-12 p-2 m-2 ${color} ${bgColor} rounded-full`} />
      <div className="ml-10">
        <h1 className={`${color} text-xl font-bold`}>{name}</h1>
        <p className="text-sm text-sub-title">{property}</p>
      </div>
    </div>
  );
};
export default CallOverView;
