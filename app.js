console.log("app.js loaded");
console.log("LightweightCharts =", LightweightCharts);

const chartEl = document.getElementById("chart");

const chart = LightweightCharts.createChart(chartEl, {
  width: chartEl.clientWidth,
  height: 420,
  layout: {
    background: { color: "#020617" },
    textColor: "#e5e7eb",
  },
  grid: {
    vertLines: { color: "#1e293b" },
    horzLines: { color: "#1e293b" },
  },
  timeScale: { timeVisible: true, secondsVisible: false },
});

// ✅ Correct API for your loaded version:
const candleSeries = chart.addSeries(LightweightCharts.CandlestickSeries, {
  upColor: "#ffffffff",
  downColor: "#e5ff00ff",
  borderVisible: false,
  wickUpColor: "#ffffffff",
  wickDownColor:  "#e5ff00ff",
});

candleSeries.setData([
  { time: "2024-01-01", open: 100, high: 110, low: 95, close: 105 },
  { time: "2024-01-02", open: 105, high: 115, low: 100, close: 112 },
  { time: "2024-01-03", open: 112, high: 120, low: 108, close: 115 },
  { time: "2024-01-04", open: 115, high: 118, low: 105, close: 108 },
  { time: "2024-01-05", open: 108, high: 125, low: 107, close: 122 },
]);

window.addEventListener("resize", () => {
  chart.applyOptions({ width: chartEl.clientWidth });
});

console.log("Chart rendered ✅");
