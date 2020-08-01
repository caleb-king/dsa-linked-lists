class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// implement LinkedList class

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(itemToInsert, itemToMatch) {
    if (this.head === null) {
      return null;
    }
    // if matching node is head
    if (this.head.value === itemToMatch) {
      this.insertFirst(itemToMatch);
    }
    let currNode = this.head;
    let prevNode = this.head;
    while (currNode !== null && currNode.value !== itemToMatch) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return null;
    }
    prevNode.next = new _Node(itemToInsert, currNode);
  }

  insertAfter(itemToInsert, itemToMatch) {
    if (this.head === null) {
      return null;
    }
    let currNode = this.head;
    while (currNode !== null && currNode.value !== itemToMatch) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return null;
    }
    currNode.next = new _Node(itemToInsert, currNode.next);
  }

  insertAt(item, index) {
    if (this.head === null) {
      return null;
    }
    if (index === 0) {
      this.insertFirst(item);
    }
    let currNode = this.head;
    let prevNode = this.head;
    let currPosition = 0;
    while (currNode !== null && currPosition !== index) {
      prevNode = currNode;
      currNode = currNode.next;
      currPosition += 1;
    }
    if (currNode === null) {
      console.log('Position beyond length of list');
      return null;
    }
    prevNode.next = new _Node(item, currNode);
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    // if node to remove is head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;
    while (currNode.value !== item && currNode !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    // if node is not found
    if (currNode === null) {
      console.log('Item not found');
      return null;
    }
    prevNode.next = currNode.next;
  }

  find(item) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      currNode = currNode.next;
    }
    return currNode;
  }
}

// Creating a singly linked list

// function main() {
//   const SLL = new LinkedList();
//   SLL.insertLast('Apollo');
//   SLL.insertLast('Boomer');
//   SLL.insertLast('Helo');
//   SLL.insertLast('Husker');
//   SLL.insertLast('Starbuck');
//   SLL.insertLast('Tauhida');
//   SLL.remove('Husker');
//   SLL.insertBefore('Athena', 'Boomer');
//   SLL.insertAfter('HotDog', 'Helo');
//   SLL.insertAt('Kat', 2);
//   SLL.remove('Tauhida');
//   console.log(SLL);
// }

// main();

// Supplemental functions for a linked list

function display(list) {
  if (list.head === null) {
    return null;
  }
  let currNode = list.head;
  let displayString = '';
  while (currNode.next !== null) {
    displayString += `${currNode.value} -> `;
    currNode = currNode.next;
  }
  displayString += currNode.value;
  console.log(displayString);
}

function size(list) {
  if (list.head === null) {
    return null;
  }
  let currNode = list.head;
  let listSize = 0;
  while (currNode !== null) {
    listSize += 1;
    currNode = currNode.next;
  }
  return listSize;
}

function isEmpty(list) {
  return !!list.head;
}

function findPrevious(list, item) {
  if (list.head === null) {
    return null;
  }
  // if matching node is head
  if (list.head.value === item) {
    console.log('no previous nodes');
    return null;
  }
  let currNode = list.head;
  let prevNode = list.head;
  while (currNode !== null && currNode.value !== item) {
    prevNode = currNode;
    currNode = currNode.next;
  }
  if (currNode === null) {
    console.log('Item not found');
    return null;
  }
  return prevNode;
}

function findLast(list) {
  if (list.head === null) {
    return null;
  }
  let currNode = list.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

function removeDuplicates(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

function reverseList(list) {
  if (list.head === null) {
    return null;
  }
  // for first item in list, set next to null as reversing will make it last item
  let prevNode = null;
  let currNode = list.head;
  let nextNode = list.head.next;
  while (nextNode !== null) {
    currNode.next = prevNode;

    // step variables forward
    prevNode = currNode;
    currNode = nextNode;
    nextNode = currNode.next;
  }

  // handle last item in list, set as head
  currNode.next = prevNode;
  list.head = currNode;
  return list;
}

function ThirdFromTheEnd(list) {
  if (list.head === null) {
    return null;
  }
  let twoBack = null;
  let previous = null;
  let currNode = list.head;
  while (currNode.next !== null) {
    twoBack = previous;
    previous = currNode;
    currNode = currNode.next;
  }
  if (!twoBack) {
    console.log('list has less than three items');
  }
  return twoBack;
}

function findMiddle(list) {
  // get length of the list
  if (list.head === null) {
    return null;
  }
  let currNode = list.head;
  let listSize = 0;
  while (currNode !== null) {
    listSize += 1;
    currNode = currNode.next;
  }
  if (listSize % 2 === 0) {
    console.log('no middle element');
    return null;
  }
  const middleIndex = (listSize - 1) / 2;
  // find node matching middleIndex
  currNode = list.head;
  let currPosition = 0;
  while (currPosition !== middleIndex) {
    currNode = currNode.next;
    currPosition += 1;
  }
  return currNode;
}

function isCyclic(list) {
  if (list.head === null) {
    return false;
  }
  let current = list.head;
  while (current !== null) {
    let tempNode = current;
    while (tempNode.next !== null) {
      if (tempNode.next === current) {
        return true;
      }
      tempNode = tempNode.next;
    }
    current = current.next;
  }
  return false;
}

function createCycleList() {
  const list = new LinkedList();
  list.insertLast('one');
  list.insertLast('two');
  list.insertLast('three');
  list.insertLast('four');
  const cycleNode = list.head.next.next;
  cycleNode.next = list.head;
  return list;
}

function sortList(list) {
  if (list.head === null) {
    return null;
  }
  let currNode = list.head;

  // iterate through entire list to sort
  while (currNode.next !== null) {
    let tempNode = currNode.next;
    let minNode = currNode;
    let minValue = minNode.value;

    // iterate through remaining list to find minValue
    while (tempNode !== null) {
      if (tempNode.value < minValue) {
        minValue = tempNode.value;
        minNode = tempNode;
      }
      // step forward in search for minValue
      tempNode = tempNode.next;
    }

    // swap the values of currNode and minNode, unless currNode is minNode
    if (currNode !== minNode) {
      minNode.value = currNode.value;
      currNode.value = minValue;
    }

    // step forward in sorting remaining list
    currNode = currNode.next;
  }
  return list;
}

function main() {
  // build list to test functions with
  const SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Athena');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // display(SLL);

  // console.log(size(SLL));
  // console.log('should be TRUE: ', isEmpty(SLL));
  // const emptyList = new LinkedList();
  // console.log('should be FALSE: ', isEmpty(emptyList));
  // console.log(findPrevious(SLL, 'Husker'));
  // console.log(findLast(SLL));
  // reverseList(SLL);
  // display(SLL);
  // console.log(ThirdFromTheEnd(SLL));
  // console.log(findMiddle(SLL));
  // const cycleList = createCycleList();
  // console.log('should be false: ', isCyclic(SLL));
  // console.log('should be true: ', isCyclic(cycleList));

  // build numerical list to test sort
  const numericalList = new LinkedList();
  numericalList.insertLast(9);
  numericalList.insertLast(1);
  numericalList.insertLast(7);
  numericalList.insertLast(3);
  numericalList.insertLast(7);
  numericalList.insertLast(1);
  numericalList.insertLast(4);
  numericalList.insertLast(1);
  console.log('list before sort: ');
  display(numericalList);
  sortList(numericalList);
  console.log('list after sort: ');
  display(numericalList);
}

main();
