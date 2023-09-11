/**
 * Написать тайпгуарды для типов number и string
 */

export const isNumber = (val: unknown): val is number =>
  typeof val === 'number';

export const isString = (val: unknown): val is string =>
  typeof val === 'string';

export const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => input.status === 'rejected';

export const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => input.status === 'fulfilled';
