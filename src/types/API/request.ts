export interface ICreatable extends Record<string, unknown> {}

export enum HttpMethods {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}
