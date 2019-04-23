import React from 'react';
import * as d3 from "d3";
import { roundedSquare, roundedRectTop } from './D3Shapes';

class D3LinkedList extends React.Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [0,1,2,3,4];
    const nodeWidth = 65;
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

    const paintNode = (node, primary, secondary) => {
      node.filter((d, i) => i === 0)
        .attr("fill", primary);
      node.filter((d, i) => i === 1)
        .attr("fill", secondary);
    }

    const headNode = divs.filter((d, i) => i === 0)
      .selectAll("path");
    paintNode(headNode, '#85B688', '#A1D2A4');

    const tailNode = divs.filter((d, i) => i === data.length - 1)
      .selectAll("path");
    paintNode(tailNode, '#E7E19B', '#F0EBAE');

    divs.append("svg:line")
      .attr("x1", (d, i) => d * nodeEdgeLength + nodeWidth)
      .attr("x2", (d, i) => d * nodeEdgeLength + nodeEdgeLength)
      .attr("y1", nodeWidth / 3)
      .attr("y2", nodeWidth / 3)
      .attr("stroke", "#A0D3E3")
      .attr("stroke-width", "2");

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
