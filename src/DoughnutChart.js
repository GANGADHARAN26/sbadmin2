import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      display: false
    },
    title: {
      display: false
    }
  }
};

export const data = {
  labels: ["Direct", "social", "Referral"],
  datasets: [
    {
      label: "# of Votes",
      data: [55, 30, 15],
      backgroundColor: [
        "rgba(78, 115, 223)",
        "rgba(28, 200, 138)",
        "rgba(54,185,204)"
      ],
      borderWidth: 4
    }
  ]
};

export function DoughnutChart() {
  return <Doughnut options={options} data={data} />;
}
