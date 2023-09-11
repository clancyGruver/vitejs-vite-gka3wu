import ListNode from './ListNode';
import MyElement from './MyElement';

export default class LinkedList {
  head: ListNode | null = null;
  tail: ListNode | null = null;
  private _size = 0;

  constructor() {}

  prepend(val: MyElement): LinkedList {
    const newNode = new ListNode(val, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  public append(value: MyElement): LinkedList {
    const newNode = new ListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;

    this.tail = newNode;

    return this;
  }

  delete(value: MyElement): void {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail && this.tail.value === value) {
      this.tail = currentNode;
    }
  }

  find(value: MyElement): ListNode {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  deleteTail() {
    if (!this.tail) {
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
  }

  deleteHead(): void {
    if (!this.head) {
      return;
    }

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  fromArray(values: MyElement[]) {
    values.forEach((value) => this.append(value));

    return this;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}
