import TimelineCard from "./TimelineCard";

const Timeline = ({ timelineData }) => {
  return (
    <>
      <h1 className="text-white text-mg py-2 pl-5">Timeline</h1>
      {timelineData.map((item) => (
        <TimelineCard
          message={item.message}
          duration={item.duration}
          person={item.person}
          role={item.role}
        />
      ))}
    </>
  );
};

export default Timeline;
