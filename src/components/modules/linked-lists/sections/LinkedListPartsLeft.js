import React from 'react';

class LinkedListPartsLeft extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Parts of a Linked List
        </h3>
        <p>
          A good way to learn about linked lists is first knowing about what
          they're made up of. Here are it's most important parts:
        </p>
        <p>
          <h4>Node </h4>
          A data structure that makes up a linked list. It contains a
          value, and a pointer to the next node.
        </p>
        <p>
          <h4>Value</h4>
          The data that is stored in a particular node.
        </p>
        <p>
          <h4>Next</h4>
          A reference stored in a particular node, which is a pointer
          to the next node in the list.
        </p>
        <p>
          <h4>Head</h4>
          A pointer to the first element of the linked list. It doesn't hold
          any data of it's own. It is simply a reference.
        </p>
        <p>
          <h4>Tail</h4>
          A pointer to the last element of a linked list. It doesn't hold any
          data of it's own. Some linked list implementations don't have
          tails.
        </p>
      </div>
    );
  }
}

export default LinkedListPartsLeft;
