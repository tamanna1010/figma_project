

import {
    PhoneIcon,
    UserCircleIcon,
    ArrowTrendingUpIcon,
    DevicePhoneMobileIcon,
    ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
const Headline = () => {
    return (
        <div>
            <div className="w-[100%] h-[130px] bg-[#FFFFFF] pl-[20px] py-[10px]">
               <div className="w-[50%] flex">
               <HeadlineCards
                    isImage={true}
                    name={"Project Manager"}
                    property={"John Doe"}
                    color={"text-[#28C76F]"}
                    bgColor={"bg-[#28C76F]/[0.5]"}
                />
                <div className="border-r-2 border-[#E9E9E9]" />
                <HeadlineCards
                    Icon={ArrowTrendingUpIcon}
                    name={"Reporting Month"}
                    property={"Mar 2024"}
                    color={"text-[#28C76F]"}
                    bgColor={"bg-[#28C76F]/[0.5]"}
                />
                </div>
            </div>
        </div>
    );
};
const HeadlineCards = (props) => {
    const { isImage, Icon, name, property, color, bgColor } = props;

    return (
        <div className="flex items-center p-5 w-[100%] ">
            {isImage ? <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
            /> : <Icon className={`h-12 w-12 p-2 m-2 ${color} ${bgColor} rounded-full`} />}
            <div className="ml-5">
                <h1 className="text-lg font-bold ">{name}</h1>

                <p className="text-sm text-sub-title">{property}</p>
            </div>
        </div>
    );
};
export default Headline;

