import Slider from "@mui/material-next/Slider";

const TranscriptAnalysisSection = (props) => {
  const { title } = props;
  return (
    <div className="">
      <h1 className="text-white text-xl py-5 pl-2">{title}</h1>
      <div className="bg-app-layover w-[100%] h-[40px]">
        <Slider
          marks={false}
          max={10}
          min={0}
          size="medium"
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
};
export default TranscriptAnalysisSection;
