import React from 'react';

class LinkedListIntroLeft extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Linked Lists
        </h3>
        <h4>
          Introduction
        </h4>
        <p>
          A linked list is a sequence of data structures that are
          connected to each other.
        </p>
        <p>
          A linked list is a sequence of nodes, each of which contain
          items. Each node also contains a pointer to another node
          (the next one in the list).
        </p>
        <h4>
          Learning Goals
        </h4>
        <p>
          <ol>
            <li>
              Know about different types of linked lists,
              including singly, doubly, circular linked lists.
            </li>
            <li>
              Know about all the parts of linked lists, such
              as node, value, next, head, and tail, and
              each of their purposes.
            </li>
            <li>
              Know about different operations on linked lists,
              such as insert, delete, search, and more.
            </li>
            <li>
              Know how to implement linked list operations
              in different programming languages.
            </li>
          </ol>
        </p>
      </div>
    );
  }
}

export default LinkedListIntroLeft;
