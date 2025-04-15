// Sample D3 bar chart rendering
const svg = d3.select("#barChart svg");
const data = [30, 45, 60];
svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 120 + 50)
  .attr("y", d => 300 - d * 4)
  .attr("width", 80)
  .attr("height", d => d * 4)
  .attr("fill", "#1a237e");

svg.selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .text(d => d + "%")
  .attr("x", (d, i) => i * 120 + 90)
  .attr("y", d => 300 - d * 4 - 10)
  .attr("fill", "#000")
  .attr("text-anchor", "middle");
