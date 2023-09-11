import MyElement from './MyElement';

export default class ListNode {
  constructor(public value: MyElement, public next: ListNode | null = null) {}
}
