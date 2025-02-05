"use client";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "keep-react";

export const LineChartComponent = () => {
  const chartData = [
    { month: "October", sales: 267000, salesD: 267000 },
    { month: "November", sales: 186000, salesD: 186000 },
    { month: "December", sales: 185000, salesD: 185000 },
    { month: "January", sales: 245000, salesD: 245000 },
    { month: "February", sales: 198000, salesD: 198000 },
    { month: "March", sales: 888000, salesD: 828000 },
  ];

  const chartConfig = {
    sales: {
      label: "Sales without Discount (€): ",
      color: "#1B4DFF",
    },
    salesD: {
      label: "Sales with Discount (€): ",
      color: "#cd9b01",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="max-h-[400px] w-[50%]">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          top: 20,
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={true}
          axisLine={true}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={true}
          axisLine={true}
          tickMargin={8}
          tickFormatter={(value) => `${value / 1000}k €`}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          dataKey="sales"
          type="natural"
          stroke="#1B4DFF"
          strokeWidth={2}
          dot={{
            fill: "#1B4DFF",
          }}
          activeDot={{
            r: 6,
          }}
        >
          <LabelList
            position="top"
            offset={12}
            className="fill-primary-500"
            fontSize={12}
            formatter={(value: string) =>
              `${(Number(value) as number) / 1000}k €`
            }
          />
        </Line>
        <Line
          dataKey="salesD"
          type="natural"
          stroke="#cd9b01"
          strokeWidth={2}
          dot={{
            fill: "#cd9b01",
          }}
          activeDot={{
            r: 6,
          }}
        >
          <LabelList
            position="top"
            offset={12}
            className="fill-primary-500"
            fontSize={12}
            formatter={(value: string) =>
              `${(Number(value) as number) / 1000}k €`
            }
          />
        </Line>
      </LineChart>
    </ChartContainer>
  );
};
