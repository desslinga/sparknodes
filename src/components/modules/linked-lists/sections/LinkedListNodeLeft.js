import React from 'react';

class LinkedListNodeLeft extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Parts of a Linked List
        </h3>
        <p>
          <b>Node: </b>
          a data structure that makes up a linked list. It contains a
          value, and a pointer to the next node.
        </p>
        <p>
          <b>Value: </b>
          the data that is stored in a particular node.
        </p>
        <p>
          <b>Next: </b>
          a reference stored in a particular node, which is a pointer
          to the next node in the list.
        </p>
        <p>
          <b>Head: </b>
          points to the first element of the linked list. It doesn't hold
          any data of it's own. It is simple a reference.
        </p>
        <p>
          <b>Tail: </b>
          points to the last element of a linked list. It doesn't hold any
          data of it's own. Some linked list implementations don't have
          tails.
        </p>
      </div>
    );
  }
}

export default LinkedListNodeLeft;
