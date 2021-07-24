import React from "react";
import Chart from "react-apexcharts";

interface HistogramSection {
  x: string;
  y: number;
  weight: number;
}

type Histogram = HistogramSection[];
interface AdHistogramProps {
  data: Histogram;
}

export default function AdHistogram(props: AdHistogramProps) {
  const histogramData = [...props.data];
  const histogramConfig = {
    options: {
      chart: {
        id: "basic-bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },

      yaxis: {
        labels: {
          style: {
            fontSize: "min(4vw,20px)",
            fontWeight: 600,
          },
        },
      },
    },

    series: [
      {
        name: "Count",
        data: histogramData,
      },
    ],
  };
  return (
    <div className="ad-histogram-container">
      <Chart
        options={histogramConfig.options}
        series={histogramConfig.series}
        type="bar"
        height="600px"
      />
    </div>
  );
}
