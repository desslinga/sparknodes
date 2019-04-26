import React from 'react';
import { HGreen, HBlue, HPurple } from  '../../../fonts/moduleFonts';

class LinkedListPartsLeft extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Linked List Operations
        </h3>
        <p>
          There are three important operations for linked lists, namely:
          <HGreen> insert</HGreen>, <HBlue>delete</HBlue>, and
          <HPurple> search</HPurple>. How each of them are implemented depends
          on what type of linked list we have... which will be discussed later.
        </p>
        <p>
          First, let's talk about what these operations do. And what might
          be some things to consider when implementing them.
        </p>
        <h4><HGreen>Insert</HGreen></h4>
        <p>
          Adds a new element with a specified value, to the beginning of the
          list.
        </p>
        <h4><HBlue>Delete</HBlue></h4>
        <p>
          Deletes a node at a specified index. For this, we would relink
          some nodes to account for the newly deleted one.
        </p>
        <h4><HPurple>Search</HPurple></h4>
        <p>
          Returns the value of a node at some given index.
        </p>
      </div>
    );
  }
}

export default LinkedListPartsLeft;
