import React from 'react';
import Prism from "prismjs";
import { HGreen, HBlue, HPurple } from  '../../../fonts/moduleFonts';

class LinkedListSinglyInsertLeft extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  jsBlock() {
    return (
`function insert(head, value) {
    let newNode = new Node(value);
    newNode.next = head;
    head = newNode;
 }`
    )
  };

  render() {
    return (
      <div>
        <h3>
          Singly Linked List: Insert
        </h3>
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
        <pre className="language-javascript">
          <code>
           {this.jsBlock()}
          </code>
        </pre>
      </div>
    );
  }
}

export default LinkedListSinglyInsertLeft;
