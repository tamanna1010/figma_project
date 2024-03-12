import CallOverView from "./CallOverview";
import SearchBar from "./Searchbar";
import TranscriptAnalysisSection from "./TranscriptAnalysisSection";
import timelineData from "../data/timelinedata.json";

const Home = () => {
  return (
    <div className="p-4 overflow-auto">
      <SearchBar />
      <CallOverView title="Call Overview" />
      <TranscriptAnalysisSection
        title="Transcript Analysis Section"
        timelineData={timelineData}
      />
    </div>
  );
};
export default Home;
