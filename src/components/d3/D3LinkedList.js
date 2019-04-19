import React from 'react';
import * as d3 from "d3";

class D3LinkedList extends React.Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.data;

    const svg = d3.select("#d3-linkedlist")
      .append("svg")
      .attr("width", this.props.width)
      .attr("height", this.props.height);
      
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => this.props.height - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green");
  }

  render() {
    return(
      <div id="d3-linkedlist"></div>
    )
  }

}

export default D3LinkedList;
