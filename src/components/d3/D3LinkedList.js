import React from 'react';
import * as d3 from "d3";

class D3LinkedList extends React.Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [0,1,2,3,4,5];

    const svg = d3.select("#d3-linkedlist")
      .append("svg")
      .attr("width", this.props.width)
      .attr("height", this.props.height);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", 0)
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("width", 60)
      .attr("height", 60)
      .attr("fill", "#a5ba94")
      .append("svg:line")
      .attr("x1", (d, i) => i * 140)
      .attr("x2", (d, i) => i * 170)
      .attr("y1", 0)
      .attr("y2", 0)
      .attr("stroke", "white");
  }

  render() {
    return(
      <div id="d3-linkedlist"></div>
    )
  }

}

export default D3LinkedList;
