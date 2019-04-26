import React from 'react';
import { HGreen, HBlue, HPurple } from  '../../../fonts/moduleFonts';

class LinkedListPartsLeft extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Operations
        </h3>
        <p>
          There are three important operations, namely:
          <HGreen> insert</HGreen>, <HBlue>delete</HBlue>, and
          <HPurple> search</HPurple>. How each of them are implemented depends
          on what type of linked list we have.
        </p>
        <p>
          To get started, let's talk about what these operations do, and
          different concerns when it comes to implementing them.
        </p>
        <h4><HGreen>Insert</HGreen></h4>
        <p>
          Adds a new element with a specified value, to the beginning of the
          list.
        </p>
        <p>
          <b>Concerns:</b>
          <ul>
            <li>
              <b>Relinking nodes: </b> we have to wire
              our pointers (pointers) to introduce this new node.
            </li>
            <li>
              <b>Relinking head: </b> We're placing a new node to the start of
              the linked list, so we have to repoint the <HPurple>head</HPurple>.
            </li>
          </ul>
        </p>
        <h4><HPurple>Search</HPurple></h4>
        <p>
          Returns the value of a node at some given index.
        </p>
        <p>
          <b>Concerns</b>: none really, this is one of the simpler operations!
        </p>
      </div>
    );
  }
}

export default LinkedListPartsLeft;
