import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContex";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const Rechrt = () => {
  const { call, text, video } = useContext(FriendContext);
  //  console.log(call, text, video)

  const data = [
    { name: "call", value: call.length, fill: "#0088FE" },
    { name: "text", value: text.length, fill: "#FF8042" },
    { name: "video", value: video.length, fill: "#244D3F" },
  ];
  return (
    <div className="w-10/12 mx-auto my-10  border border-gray-400 rounded-2xl shadow-2xl p-10">
      <h2 className="text-2xl font-bold">Friendship Analytics</h2>
      <h2 className="text-xl text-[#244D3F] font-bold">By Interaction Type</h2>
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          height: "80vh",
          margin: "auto",
        }}
      >
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={80}
              outerRadius={120}
              paddingAngle={5}
              dataKey="value"
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Rechrt;
