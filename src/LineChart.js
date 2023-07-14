import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "jan"
];

export const data = {
  labels,
  datasets: [
    {
      data: [
        0,
        10000,
        5000,
        15000,
        10000,
        20000,
        15000,
        25000,
        20000,
        30000,
        25000,
        40000
      ],
      borderColor: "rgb(78, 115, 223)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      tension: 0.3
    }
  ]
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}
