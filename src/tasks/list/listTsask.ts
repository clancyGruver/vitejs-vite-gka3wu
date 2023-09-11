/**
 * Модальные окна заносятся в связный список, пройти по списку, найти элемент с id = 5, вызвать у него метод close и удалить из списка.
 */

import { range, shuffle } from '../arrays';
import LinkedList from './LinkedList';
import MyElement from './MyElement';

const list = new LinkedList();

export default (idToFind = 5) => {
  const elements = shuffle([...range(1, 10)]).map((id) => new MyElement(id));
  list.fromArray(elements);
  let el = list.head;

  while (el) {
    if (el.value.id === idToFind) {
      el.value.close();
      list.delete(el.value);
      return;
    }
    el = el.next;
  }
};
