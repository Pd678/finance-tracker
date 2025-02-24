import { useEffect, useRef } from "react";
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Dataset",
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="chart-container">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Color</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "#FF6384" }}>Red</td>
              <td>300</td>
            </tr>
            <tr>
              <td style={{ color: "#36A2EB" }}>Blue</td>
              <td>50</td>
            </tr>
            <tr>
              <td style={{ color: "#FFCE56" }}>Yellow</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="chart-wrapper">
        <Doughnut data={data} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default MyChart;
