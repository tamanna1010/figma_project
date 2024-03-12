import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <BarChart
      layout="vertical"
      width={500}
      height={500}
      data={data}
      margin={{
        top: 30,
        right: 20,
        bottom: 10,
        left: 10,
      }}
    >
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="Identification" stackId="Identification" fill="#7367F0" />
      <Bar dataKey="Information" stackId="Information" fill="#00CFE8" />
      <Bar dataKey="Interaction" stackId="Interaction" fill="#28C76F" />

      <Bar dataKey="Relationship" stackId="Relationship" fill="#A8AAAE" />

      <Bar dataKey="Communication" stackId="Communication" fill="#EA5455" />
      <Bar dataKey="Professionalism" stackId="Professionalism" fill="#FF9F43" />
    </BarChart>
  );
};
export default BarChartComponent;
