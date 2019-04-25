import React from 'react';
import { HGreen, HBlue } from  '../../../fonts/moduleFonts';

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
          When we say links, we mean <HBlue>pointers</HBlue> to some other node.
          As the name suggests, each node has at most one pointer (link) to
          the next node on the list.
        </p>
        <p>
          Not all nodes in a singly-linked list will have one pointer.
          Case in point: the <HGreen>tail</HGreen> is the last element in the
          list, so it has no pointer to the next node.
        </p>
        <p>
        </p>
      </div>
    );
  }
}

export default LinkedListSinglyIntroLeft;
