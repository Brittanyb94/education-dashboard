const svg = d3.select("#barChart svg");
const chartWidth = 600;
const chartHeight = 300;

// Set SVG dimensions
svg.attr("width", chartWidth).attr("height", chartHeight);

// Simulated dataset
const dataMap = {
  Texas: { "Title I": 48, "IDEA": 35, "Pell Grants": 40 },
  Mississippi: { "Title I": 60, "IDEA": 45, "Pell Grants": 50 },
  California: { "Title I": 30, "IDEA": 25, "Pell Grants": 35 }
};

// Update the chart
function updateChart(state, program) {
  svg.selectAll("*").remove(); // Clear chart

  const value = dataMap[state][program];

  svg.append("rect")
    .attr("x", 200)
    .attr("y", chartHeight - value * 4)
    .attr("width", 200)
    .attr("height", value * 4)
    .attr("fill", "#1a237e");

  svg.append("text")
    .text(`${value}% of funding from ${program}`)
    .attr("x", 300)
    .attr("y", chartHeight - value * 4 - 10)
    .attr("text-anchor", "middle")
    .attr("fill", "#000");
}

// Initial load
let selectedState = document.getElementById("state").value;
let selectedProgram = document.getElementById("program").value;
updateChart(selectedState, selectedProgram);

// Event listeners
document.getElementById("state").addEventListener("change", function () {
  selectedState = this.value;
  updateChart(selectedState, selectedProgram);
});
document.getElementById("program").addEventListener("change", function () {
  selectedProgram = this.value;
  updateChart(selectedState, selectedProgram);
});
