import CallOverView from "./CallOverview";
import SearchBar from "./Searchbar";
import TranscriptAnalysisSection from "./TranscriptAnalysisSection";

const Home = () => {
  return (
    <div className="p-4">
      <SearchBar />
      <CallOverView title="Call Overview" />
      <TranscriptAnalysisSection title="Call Overview" />
    </div>
  );
};
export default Home;
