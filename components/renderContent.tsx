import { LineChartComponent } from "./Charts/LineChart";
import { BarChartComponent } from "./Charts/BarChart";
export const getBotResponseComponent = (content: string) => {
  if (
    content.includes(
      "Here’s a bar chart showing your sales this quarter at 70% achievement"
    )
  ) {
    return <BarChartComponent />;
  }
  if (
    content.includes(
      "Done. With a 10% discount, your achievement rate rises to 102%"
    )
  ) {
    return <LineChartComponent />;
  }
  if (content.includes("Based on their interest in solar storage")) {
    return (
      <div className="text-sm text-gray-600 font-medium">📄 Offer1.pdf</div>
    );
  }
  if (content.includes("Done. look at it.")) {
    return (
      <div className="text-sm text-gray-600 font-medium">📄 Offer2.pdf</div>
    );
  }
  return null;
};
