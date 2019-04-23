import React from 'react';
import * as d3 from "d3";
import { roundedSquare } from './D3Shapes';

class D3LinkedList extends React.Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [0,1,2,3,4];
    const nodeWidth = 60;
    const edgeLength = 30;
    const nodeEdgeLength = nodeWidth + edgeLength;
    const nodeBorderRadius = 8;

    const svg = d3.select("#d3-linkedlist")
      .append("svg")
      .attr("width", this.props.width)
      .attr("height", this.props.height);

    const divs = svg.selectAll("rect")
      .data(data)
      .enter()
      .append("g");

    divs.append("path")
    .attr("d", (d, i) => roundedSquare(
      i * (nodeEdgeLength), 0, nodeWidth, 5, true))
    .attr("fill", "#a5ba94");

    divs.append("svg:line")
      .attr("x1", (d, i) => d * nodeEdgeLength + nodeWidth)
      .attr("x2", (d, i) => d * nodeEdgeLength + nodeEdgeLength)
      .attr("y1", nodeWidth / 2)
      .attr("y2", nodeWidth / 2)
      .attr("stroke", "#a5ba94");

    console.log(svg.selectAll("rect"));

  }

  render() {
    return(
      <div
        id="d3-linkedlist"
        className="middle relative container-width"
      ></div>
    )
  }

}

export default D3LinkedList;
