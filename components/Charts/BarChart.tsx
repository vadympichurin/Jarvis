"use client";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "keep-react";

export const BarChartComponent = () => {
  const chartData = [
    { month: "October", sales: 267000 },
    { month: "November", sales: 186000 },
    { month: "December", sales: 185000 },
    { month: "January", sales: 245000 },
    { month: "February", sales: 198000 },
    { month: "March", sales: 888000 },
  ];

  const chartConfig = {
    sales: {
      label: "Sales without Discount (€): ",
      color: "#1B4DFF",
    },
  };

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-[50%]">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          tickMargin={24}
          axisLine={false}
          tickFormatter={(value) => `${value / 1000}k`}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend
          verticalAlign="top"
          align="left"
          content={<ChartLegendContent />}
        />
        <Bar
          dataKey="sales"
          radius={[8, 8, 0, 0]}
          fill={chartConfig.sales.color}
          name={chartConfig.sales.label}
        />
      </BarChart>
    </ChartContainer>
  );
};
