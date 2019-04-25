import React from 'react';

class LinkedListSinglyIntroLeft extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Singly Linked Lists
        </h3>
        <h4>
          Introduction
        </h4>
        <p>
          This is the simplest linked list, and all the other types build
          on top of it! Thus it makes sense to learn about it first.
        </p>
        <h4>
          Single Links
        </h4>
        <p>
          When we say links, we mean pointers to
          some other node. As the name suggests, each node has at most one pointer
          (link) to the next node on the list.
        </p>
        <h4>
          At most one link?
        </h4>
        <p>
          Not all nodes in a singly-linked list will have one pointer.
          Case in point: the tail is the last element in the list, so
          it has no pointer to the next node.
        </p>
        <p>
        </p>
      </div>
    );
  }
}

export default LinkedListSinglyIntroLeft;
