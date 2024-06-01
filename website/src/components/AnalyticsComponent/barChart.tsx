import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export interface BarChartAnalyticsComponentProps {
    data: Array<{ [key: string]: number | string }>;
    displayNumber?: number;
}

export default function BarChartAnalyticsComponent(props: BarChartAnalyticsComponentProps) {

  const chartSetting = {
    xAxis: [
      {
        label: 'percentage (%)',
      },
    ],
    width: 980,
    height: 480,
    margin: {
      'left': 100,
    }
  };

  const valueFormatter = (value: number) => `${value} %`;
  // keep only the top ten then accumulate the rest in a single item called others with the sum of percentages
  const data = [
    ...props.data
      .sort((a, b) => (a.percentage > b.percentage ? -1 : 1))
      .slice(0, props.displayNumber || 15),
    {
      language: 'Others',
      percentage: props.data
        .slice(10)
        .reduce((acc, item) => acc + Number(item.percentage), 0),
    },
  ];

  return (

      <div>
          <BarChart
            dataset={data}
            yAxis={[{ scaleType: 'band', dataKey: 'language'}]}
            series={[{ dataKey: 'percentage', label: 'Language percentage', valueFormatter, color: '#2e8555' }]}
            layout="horizontal"
            {...chartSetting}
          />

      </div>
  );
}
