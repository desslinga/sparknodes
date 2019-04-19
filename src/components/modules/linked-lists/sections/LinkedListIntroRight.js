import React from 'react';
import D3LinkedList from '../../../d3/D3LinkedList';

class LinkedListIntroRight extends React.Component {
  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500
  }
  render() {
    return (
      <D3LinkedList
        data={this.state.data}
        width={this.state.width}
        height={this.state.height}
      />
    );
  }
}

export default LinkedListIntroRight;
