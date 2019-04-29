import React from 'react';
import Prism from "prismjs";
import { HGreen, HBlue, HPurple } from  '../../../fonts/moduleFonts';

class LinkedListSinglyDeleteLeft extends React.Component {
  state = {
    selectedTab: 'JavaScript'
  };

  componentDidMount() {
    Prism.highlightAll();
  }

  jsBlock() {
    return (
`function delete(head, index) {
    let i = 0;
    let currNode = head;
    while (i < index) {
      currNode = currNode.next;
      i++;
    }
    let prevNode = currNode.prev;
    let nextNode = currNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
 }`
    )
  };

  tabSelect(tabLabel) {
    console.log(tabLabel);
  }

  render() {
    return (
      <div>
        <h3>
          Singly Linked List: Delete
        </h3>
        <h4>
          The Approach
        </h4>
        <p>
          <ol>
            <li>
               Traverse through the linked list <HBlue>index </HBlue>
               times.
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
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-4 tab active"
              onClick={() => this.tabSelect('Javascript')}
            >Javascript</div>
            <div
              className="col-4 tab"
              onClick={() => this.tabSelect('Java')}
            >Java</div>
            <div
              className="col-4 tab"
              onClick={() => this.tabSelect('Python')}
            >Python</div>
          </div>
        </div>
        <pre className="language-javascript">
          <code>
           {this.jsBlock()}
          </code>
        </pre>
      </div>
    );
  }
}

export default LinkedListSinglyDeleteLeft;
