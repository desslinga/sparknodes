import React from 'react';
import { HGreen, HBlue, HPurple } from  '../../../fonts/moduleFonts';

class LinkedListSinglyInsertLeft extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Singly Linked List: Insert
        </h3>
        <h4>
          The Concerns
        </h4>
        <p>
          When dealing with linked list operations, we have some things to
          consider:
        </p>
        <p>
          <ul>
            <li>
              <b>Relinking nodes: </b> we have to wire
              our single links (pointers) to introduce this new node.
            </li>
            <li>
              <b>Relinking head: </b> We're placing a new node to the start of
              the linked list, so we have to repoint the <HPurple>head</HPurple>.
            </li>
          </ul>
        </p>
        <h4>
          The Approach
        </h4>
        <p>
          <ol>
            <li>
              Create the new <HBlue>node</HBlue> and set its value
              (provided by user)
            </li>
            <li>
              Take the new node's <HGreen>next</HGreen> value, and set it to
              point to the <HPurple>head</HPurple>.
            </li>
            <li>
              Set the <HPurple>head</HPurple> to point to the new node.
            </li>
          </ol>
        </p>
      </div>
    );
  }
}

export default LinkedListSinglyInsertLeft;
