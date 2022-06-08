import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "Aug", uv: 180 },
    { name: "Sept", uv: 150 },
    { name: "Oct", uv: 250 },
    { name: "Nov", uv: 190 },
    { name: "Dec", uv: 120 },
    { name: "Jan", uv: 280 },
  ];
  return (
    <ResponsiveContainer height={300} width='100%'>
      <BarChart
        // width='50%'
        height={300}
        data={data}
        style={{ margin: "0rem 4rem 0rem 0rem" }}
      >
        <Bar dataKey='uv' fill='#87459E' barSize={8} />
        <Tooltip />
        {/* <CartesianGrid stroke='#ccc' /> */}
        <XAxis dataKey='name' stroke='#8884d8' />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
