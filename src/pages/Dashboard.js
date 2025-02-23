import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./db.css";


const data = [
  { name: "Savings", value: 400 },
  { name: "Expenses", value: 300 },
  { name: "Investments", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dashboard</h1>

      {/* Table */}
      <table border="1" style={{ margin: "auto", width: "50%" }}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pie Chart */}
      <PieChart width={300} height={300}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Dashboard;
