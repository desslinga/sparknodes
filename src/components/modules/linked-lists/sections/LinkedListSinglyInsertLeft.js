import React from 'react';
import Prism from "prismjs";
import { HGreen, HBlue, HPurple } from  '../../../fonts/moduleFonts';

class LinkedListSinglyInsertLeft extends React.Component {
  state = {
    selectedTab: 'JavaScript'
  };

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

  tabSelect(tabLabel) {
    console.log(tabLabel);
  }

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

export default LinkedListSinglyInsertLeft;
