class linkedList {
  append(value) {
    // adds a new node containing value to the end of the list
  }

  prepend(value) {
    const newNode = new Node(value);
    // adds a new node containing value to the start of the list
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

// Build the following functions in your linked list class / factory:

// append(value) adds a new node containing value to the end of the list
// prepend(value) adds a new node containing value to the start of the list
// size returns the total number of nodes in the list
// head returns the first node in the list
// tail returns the last node in the list
// at(index) returns the node at the given index
// pop removes the last element from the list
// contains(value) returns true if the passed in value is in the list and otherwise returns false.
// find(value) returns the index of the node containing value, or null if not found.
// toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
// Extra credit
// insertAt(value, index) that inserts a new node with the provided value at the given index.
// removeAt(index) that removes the node at the given index.
