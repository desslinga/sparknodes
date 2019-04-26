import React from 'react';
import { HGreen, HBlue, HPurple } from  '../../../fonts/moduleFonts';

class LinkedListPartsLeft extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Operations Continued
        </h3>
        <h4><HBlue>Delete</HBlue></h4>
        <p>
          Deletes a node at a specified index. For this, we would relink
          some nodes to account for the newly deleted one.
        </p>
        <p>
          <b>Concerns:</b>
          <ul>
            <li>
              <b>Relinking nodes: </b> we have to wire our pointers
              (particularly the nodes before and after the newly deleted node)
            </li>
            <li>
              <b>Relinking head/tail: </b> There is a possibility that the
              newly deleted node was the <HPurple>head</HPurple> or the
              <HGreen> tail</HGreen>. If so, we should handle the task of
              re-pointing them.
            </li>
          </ul>
        </p>
        <h4>Different Linked Lists</h4>
        <p>
          Each of these operations work differently depending on
          the type of linked list in question. Some operations may be easier
          to implement in a singly-linked list, and others may be harder.
        </p>
        <p>
          Each type of linked list offers it's own advantages and
          disadvantages! We'll take a look at these in the next section.
        </p>
      </div>
    );
  }
}

export default LinkedListPartsLeft;
