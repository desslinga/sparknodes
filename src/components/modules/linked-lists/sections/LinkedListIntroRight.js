import React from 'react';
import D3LinkedList from '../../../d3/D3LinkedList';

class LinkedListIntroRight extends React.Component {
  state = {
    width: '100%',
    height: '100%'
  }
  render() {
    return (
      <D3LinkedList
        width={this.state.width}
        height={this.state.height}
      />
    );
  }
}

export default LinkedListIntroRight;
