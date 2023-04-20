<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Line and Area Chart</title>
    <script src="https://d3js.org/d3.v6.min.js"></script>
  </head>
  <body>
    <svg width="500" height="300"></svg>
    <script>
      // Define the data
      var data = [10, 20, 30, 25, 15, 5];

      // Define the SVG element and its dimensions
      var svg = d3.select("svg"),
          margin = {top: 20, right: 20, bottom: 30, left: 50},
          width = +svg.attr("width") - margin.left - margin.right,
          height = +svg.attr("height") - margin.top - margin.bottom,
          g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // Define the x and y scales
      var x = d3.scaleLinear()
          .domain([0, data.length - 1])
          .range([0, width]);
      var y = d3.scaleLinear()
          .domain([0, d3.max(data)])
          .range([height, 0]);

      // Define the line function
      var line = d3.line()
          .x(function(d, i) { return x(i); })
          .y(function(d) { return y(d); });

      // Define the area function
      var area = d3.area()
          .x(function(d, i) { return x(i); })
          .y0(height)
          .y1(function(d) { return y(d); });

      // Draw the area
      g.append("path")
          .datum(data)
          .attr("fill", "steelblue")
          .attr("d", area);

      // Draw the line
      g.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "black")
          .attr("stroke-width", 2)
          .attr("d", line);

      // Define the update function
      function update(newData) {
        // Update the data
        data = newData;

        // Update the y scale domain
        y.domain([0, d3.max(data)]);

        // Redefine the line and area functions
        line.y(function(d) { return y(d); });
        area.y1(function(d) { return y(d); });

        // Update the chart
        g.select(".area")
          .datum(data)
          .attr("d", area);
        g.select(".line")
          .datum(data)
          .attr("d", line);
      }

      // Test the update function
      setInterval(function() {
        var newData = [Math.random()*50, Math.random()*50, Math.random()*50, Math.random()*50, Math.random()*50, Math.random()*50];
        update(newData);
      }, 2000);
    </script>
  </body>
</html>
