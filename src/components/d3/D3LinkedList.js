import React from 'react';
import * as d3 from "d3";
import { roundedSquare, roundedRectTop } from './D3Shapes';

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
      .attr("d", (d, i) =>
        roundedSquare(i * nodeEdgeLength, 0, nodeWidth, 5, true))
      .attr("fill", "#7AB1C2");

    divs.append("path")
      .attr("d", (d, i) =>
        roundedRectTop(i * nodeEdgeLength, 0, nodeWidth, nodeWidth/2, 5))
      .attr("fill", "#A0D3E3");

    divs.append("svg:line")
      .attr("x1", (d, i) => d * nodeEdgeLength + nodeWidth)
      .attr("x2", (d, i) => d * nodeEdgeLength + nodeEdgeLength)
      .attr("y1", nodeWidth / 4)
      .attr("y2", nodeWidth / 4)
      .attr("stroke", "#A0D3E3");

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
