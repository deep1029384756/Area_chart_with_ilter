//temp data
const data = [
  { age: 10, money: 5000, bank: "Citibank" },
  { age: 20, money: 8000, bank: "Citibank" },
  { age: 30, money: 11000, bank: "Citibank" },
  { age: 40, money: 21000, bank: "Citibank" },
  { age: 50, money: 14000, bank: "Citibank" },
  { age: 60, money: 15000, bank: "Citibank" },
  { age: 70, money: 23000, bank: "Citibank" },
  { age: 80, money: 26000, bank: "Citibank" },
  { age: 10, money: 3000, bank: "Chase" },
  { age: 20, money: 10000, bank: "Chase" },
  { age: 30, money: 90000, bank: "Chase" },
  { age: 40, money: 120000, bank: "Chase" },
  { age: 50, money: 10000, bank: "Chase" },
  { age: 60, money: 18000, bank: "Chase" },
  { age: 70, money: 21000, bank: "Chase" },
  { age: 80, money: 000, bank: "Chase" },
  { age: 10, money: 1000, bank: "Fidelity" },
  { age: 20, money: 11000, bank: "Fidelity" },
  { age: 30, money: 20000, bank: "Fidelity" },
  { age: 40, money: 40000, bank: "Fidelity" },
  { age: 50, money: 18000, bank: "Fidelity" },
  { age: 60, money: 34000, bank: "Fidelity" },
  { age: 70, money: 26000, bank: "Fidelity" },
  { age: 80, money: 29000, bank: "Fidelity" },
  { age: 10, money: 500, bank: "Discover" },
  { age: 20, money: 10000, bank: "Discover" },
  { age: 30, money: 20000, bank: "Discover" },
  { age: 40, money: 50000, bank: "Discover" },
  { age: 50, money: 8000, bank: "Discover" },
  { age: 60, money: 6000, bank: "Discover" },
  { age: 70, money: 89000, bank: "Discover" },
  { age: 80, money: 23000, bank: "Discover" },
  { age: 10, money: 10000, bank: "Wells Fargo" },
  { age: 20, money: 13000, bank: "Wells Fargo" },
  { age: 30, money: 16000, bank: "Wells Fargo" },
  { age: 40, money: 19000, bank: "Wells Fargo" },
  { age: 50, money: 43000, bank: "Wells Fargo" },
  { age: 60, money: 21000, bank: "Wells Fargo" },
  { age: 70, money: 56000, bank: "Wells Fargo" },
  { age: 80, money: 100000, bank: "Wells Fargo" },
];

//filtering the array
const input = document.querySelector(".input");
const button = document.querySelector("button");
const bank = document.querySelector("#bank");
const chart1 = document.querySelector("#chart");

button.addEventListener("click", (e) => {
  const value = bank.value;
  const inputValue = input.value;
  if (inputValue == "") {
    chart1.textContent = "Put your age first";
    return;
  }
  if (inputValue > 80 || inputValue < 10) {
    chart1.textContent = "No data for the given age";
    return;
  }
  input.value = "";
  //filter the array
  let filterArray = data.filter((ele) => {
    return value.toLowerCase().indexOf(ele.bank.toLowerCase()) === 0;
  });
  let numberfilterArray = filterArray.filter((ele) => {
    return inputValue <= ele.age;
  });
  console.log(numberfilterArray);
  if (filterArray.length > 0) makeChart(numberfilterArray);
});

//make a standard chzrt

//   function makeChart(data){

//   }
//   //function to update chart
// function makeChart1(data){
//   // Set the dimensions of the chart
//   chart.innerHTML= "";
//   const margin = { top: 20, right: 20, bottom: 30, left: 50 };
//   const width = 600 - margin.left - margin.right;
//   const height = 400 - margin.top - margin.bottom;

//   // Create the SVG element and set its dimensions
//   const svg = d3.select("#chart")
//     .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//   // Set the x and y scales
//   const x = d3.scaleLinear()
//     .domain(d3.extent(data, d => d.age))
//     .range([0, width]);

//   const y = d3.scaleLinear()
//     .domain([0, d3.max(data, d => d.money)])
//     .range([height, 0]);

//   // Create the area generator
//   const area = d3.area()
//     .x(d => x(d.age))
//     .y0(height)
//     .y1(d => y(d.money));

//     //circle
//     // const circle = svg.selectAll("myCircles")
//     // .datum(data).enter()
//     // .append("circle").attr("fill","red")
//     // .attr("stroke","none")
//     // .attr("cx", function(d){return x(d.age)})
//     // .attr("cy", function(d){return x(d.money)})
//     // .attr("r",3)

//     // dwdwdw
//     var svg1 = d3.select("#circle").append("svg").attr("width", 200).attr("height", 200)

// // Add the path using this helper function
// svg1.append('circle')
//   .attr('cx',function(d){return x(d.age)})
//   .attr('cy',function(d){return x(d.money)})
//   .attr('r', 3)
//   .attr('stroke', 'black')
//   .attr('fill', '#69a3b2');
//     // dwdwd
//     //line
//     const line = svg.append('g')
//     .append('path').
//     datum(data)
//     .attr("d",d3.line().
//     x(function(d) {return x(d.age)})
//     .y(function(d) {return y(+d.money)})
//     )
//   .attr("stroke","blue")
//   .attr("stroke-width",4)
//   .style("fill", "none")
//   // Add the area path to the SVG element
//   svg.append("path")
//     .datum(data)
//     .transition()
//     .duration(800)
//     .attr("class", "area")
//     .attr("d", area)
//     .style("fill", "gray");

//   // Add the x and y axes
//   const xAxis = d3.axisBottom(x);
//   const yAxis = d3.axisLeft(y);

//   svg.append("g")
//     .attr("class", "x-axis")
//     .attr("transform", "translate(0," + height + ")")
//     .call(xAxis);

//   svg.append("g")
//     .attr("class", "y-axis")
//     .call(yAxis);
// }

var margin = { top: 10, right: 30, bottom: 30, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var allGroup = d3
  .map(data, function (d) {
    return d.bank;
  })
  .keys();

// A color scale: one color for each group
var myColor = d3.scaleOrdinal().domain(allGroup).range(d3.schemeSet2);

// Add X axis --> it is a date format

var x = d3
  .scaleLinear()
  .domain(
    d3.extent(data, function (d) {
      return d.age;
    })
  )
  .range([0, width]);
var xAxis = svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x).ticks(7));

// Add Y axis
var y = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(data, function (d) {
      return +d.money;
    }),
  ])
  .range([height, 0]);
svg.append("g").call(d3.axisLeft(y));

var line = svg
  .append("g")
  .append("path")
  .datum(
    data.filter(function (d) {
      return d.bank == allGroup[0];
    })
  )
  .attr(
    "d",
    d3
      .line()
      .x(function (d) {
        return x(d.age);
      })
      .y(function (d) {
        return y(+d.money);
      })
  )
  .attr("stroke", function (d) {
    return myColor("valueA");
  })
  .style("stroke-width", 4)
  .style("fill", "none");

//area
var area = svg
  .append("g")
  .append("path")
  .datum(
    data.filter(function (d) {
      return d.bank == allGroup[0];
    })
  )
  .attr(
    "d",
    d3
      .area()
      .x(function (d) {
        return x(d.age);
      })
      .y0(360)
      .y1(function (d) {
        return y(+d.money);
      })
  )
  .attr("stroke", function (d) {
    return myColor("valueA");
  })
  // .style("stroke-width", 4)
  .style("fill", "lightgray");

function makeChart(dataFilter) {
  let xlim = dataFilter[0].age;

  x.domain([xlim, 80]);
  xAxis.transition().duration(1000).call(d3.axisBottom(x));
  line
    .datum(dataFilter)
    .transition()
    .duration(1000)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.age);
        })
        .y(function (d) {
          return y(+d.money);
        })
    )
    // .attr("stroke", function (d) {
    //   return myColor(selectedGroup);
    // });
    console.log(area)
  //area
  area
    .datum(dataFilter)
    .transition()
    .duration(1000)
    .attr("fill","lightgray")
    .attr("stroke","none")
    .attr(
      "d",
      d3
        .area()
        .x(function (d) {
          return x(d.age);
        })
        .y0(360)
        .y1(function (d) {
          return y(+d.money);
        })
    )
    .attr("stroke", function (d) {
     // return myColor();
    });
}
