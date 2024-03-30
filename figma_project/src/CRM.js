import React, { useState } from "react";
import {
    ChevronDownIcon,
    ChevronUpIcon,
    ClockIcon,
    CurrencyDollarIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import LinearWithValueLabel from "./components/LinearBar";
import StatusButtons from "./components/StatusButtons";
import CommentsSection from "./components/CommentsSection";
const ProgressBarCommentSection = ({
    activeButton,
    setActiveButton,
    buttonArr,
    expand,
    setExpand
}) => {
    return (<div className="h-[100%] p-[24px]">
        <div className="h-[calc(100%-66px)]">
            <div className="grid grid-cols-2 gap-x-[20px] h-[100%]">
                <div>
                    <h1 className="font-bold">Schedule Status</h1>
                    <StatusButtons
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}
                        buttonArr={buttonArr}
                    />
                    <LinearWithValueLabel />
                </div>
                <div className="m-[5px]">
                    <textarea
                        placeholder="Add a comment ...."
                        className="w-[100%] h-[100%] border "
                    ></textarea>
                </div>
            </div>
        </div>
        <div className="h-[46px] flex justify-between border-t-2 border-[#E9E9E9]  my-2">
            <div className="flex items-center cursor-pointer " onClick={() => {
                setExpand(!expand)
            }}>
                <h1 className="text-[#2196F3] font-bold">
                    3 previous status & comments
                </h1>
                {expand ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronUpIcon className="h-5 w-5" />}
            </div>
            <button className=" bg-gradient-to-r from-[#F98A5B] to-[#FAC334] px-[20px] h-[35px] rounded-lg mt-2 font-bold">
                Save
            </button>
        </div>
    </div>)

}

export default function CRM() {
    const buttonArr = ["On Track", "At Risk", "High Risk"];
    const [activeButton, setActiveButton] = useState(buttonArr[0]);
    const [expand, setExpand] = useState(false);
    return (
        <div className="bg-[#E9E9E9] h-[calc(100vh)] p-[24px] rounded-lg-2xl grid grid-rows-[72px_626px_236px_454px] gap-y-12 overflow-auto">
            <div className="bg-app-background rounded-lg">
                <div className="flex justify-between items-center ">
                    <h1 className="text-xl py-5 pl-2 font-bold">
                        SalesForce CRM Implementation
                    </h1>
                    <div className="flex flex-row">
                        <PaperAirplaneIcon className="h-10 w-10 mr-5  p-2 rounded-lg bg-success-call" />
                        <ClockIcon className="h-10 w-10 mr-5  p-2 rounded-lg bg-[#FF7866]" />
                        <CurrencyDollarIcon className="h-10 w-10 mr-5  p-2 rounded-lg bg-[#FF7866]" />
                    </div>
                </div>
            </div>
            <div className="bg-app-background rounded-lg ">
                {" "}
                <div className=" mx-[24px] py-[16px]">
                    <ProgressBarCommentSection
                        buttonArr={buttonArr}
                        setActiveButton={setActiveButton}
                        activeButton={activeButton}
                        expand={expand}
                        setExpand={setExpand}
                    />
                </div>
                {expand && <div className="h-[67%] mx-[24px] overflow-auto">
                    <CommentsSection card_arr={[1, 2, 3, 4]} />
                </div>}
            </div>
            <div className="bg-app-background rounded-lg ">
                <div className="mx-[24px] my-[16px]">
                    <ProgressBarCommentSection
                        buttonArr={buttonArr}
                        setActiveButton={setActiveButton}
                        activeButton={activeButton}
                    />
                </div>
            </div>
            <div className="bg-app-background rounded-lg">CRM</div>
        </div>
    );
}
