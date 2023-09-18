import { SortOrder } from '../types/tasks/arrays';
import { isFulfilled, isNumber, isRejected, isString } from './typeGuards';

const orderBy = <T extends Record<string, unknown>, D extends keyof T>(
  items: T[],
  oredrBy: D,
  sortOrder: SortOrder
) =>
  items.sort((a: T, b: T) => {
    const val1 = a[oredrBy];
    const val2 = b[oredrBy];
    if (isNumber(val1) && isNumber(val2)) {
      return sortOrder === SortOrder.Asc ? val1 - val2 : val2 - val1;
    }
    if (isString(val1) && isString(val2)) {
      const lowerA = val1.toLowerCase();
      const lowerB = val2.toLowerCase();
      return sortOrder === SortOrder.Asc
        ? lowerA.localeCompare(lowerB)
        : lowerB.localeCompare(lowerA);
    }
    return 0;
  });

export const orderById = <T extends Record<string, unknown>>(items: T[]) =>
  orderBy(items, 'id', SortOrder.Asc);

/**
 *  Проверить, что все полученные промисы успешные
 */
export const isAllSucceed = (results: PromiseSettledResult<unknown>[]) =>
  results.every(isFulfilled);

/**
 *  Проверить, что некоторые полученные промисы успешные
 */
export const isSomeSucceed = (results: PromiseSettledResult<unknown>[]) =>
  results.some(isFulfilled);

/**
 * Вернуть массив только с успешно завершенными промисами
 */
export const filterSucceed = <T = unknown>(
  results: PromiseSettledResult<T>[]
) => results.filter(isFulfilled);

/**
 * Вернуть массив только с неуспешно завершенными промисами
 */
export const filterRejected = (results: PromiseSettledResult<unknown>[]) =>
  results.filter(isRejected);

/**
 * реализовать через Symbol.Iterator
 */
export const range = (from: number = 1, to: number = 10) => ({
  from,
  to,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
});

export const shuffle = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
