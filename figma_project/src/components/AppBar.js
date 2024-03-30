import { XMarkIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Headline from "./Headline";
const Appbar = () => {
  return (
    <>
      <div className="w-[100%]">
        <div className=" bg-gradient-to-r from-[#F98A5B] to-[#FAC334] h-[10px]"></div>
        <div className="flex justify-between bg-gray-background h-[60px] items-center font-bold text-xl">
          <p className="ml-10">Project progress</p>
          <XMarkIcon className="h-5 w-5 mr-10" color="#000000" />
        </div>
        <Headline />
      </div>
    </>
  );
};
export default Appbar;
