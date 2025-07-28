'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import type { ChartOptions } from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  TimeScale
);

interface CoinChartProps {
  prices: [number, number][];
}

export default function CoinChart({ prices }: CoinChartProps) {
  const labels = prices.map(([timestamp]) => timestamp);

  const data = {
    labels,
    datasets: [
      {
        label: 'USD Price',
        data: prices.map(([, price]) => price),
        fill: true,
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        pointRadius: 2,
        pointHoverRadius: 5,
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day' as
            | 'millisecond'
            | 'second'
            | 'minute'
            | 'hour'
            | 'day'
            | 'week'
            | 'month'
            | 'quarter'
            | 'year'
            | false
            | undefined,
          tooltipFormat: 'PPpp',
        },
        ticks: {},
        grid: {
          color: 'rgba(229, 231, 235, 0.2)',
        },
      },
      y: {
        ticks: {
          callback: (tickValue: string | number) => {
            const num =
              typeof tickValue === 'number' ? tickValue : parseFloat(tickValue);
            return `$${num.toFixed(2)}`;
          },
          color: '#4B5563',
        },
        grid: {
          color: 'rgba(229, 231, 235, 0.2)',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: import('chart.js').TooltipItem<'line'>) {
            return `$${context.parsed.y.toFixed(2)}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="mx-auto h-full w-full rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <Line data={data} options={options} />
    </div>
  );
}
