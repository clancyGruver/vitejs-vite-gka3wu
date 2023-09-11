export default class MyElement {
  visible = true;
  constructor(public readonly id: number) {}

  close() {
    console.log(
      `%cElement with id=${this.id} is closed`,
      'color:red;font-size:18px;font-weight:bold'
    );
  }

  open() {
    console.log(
      `%cElement with id=${this.id} is opened`,
      'color:green;font-size:18px;font-weight:bold'
    );
  }

  toString() {
    return this.visible ? 'Opened' : 'Closed';
  }
}
