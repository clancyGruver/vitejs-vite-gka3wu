import type { ICreatable } from './request';

export interface IPostCreate extends ICreatable {
  userId: number;
  title: string;
  body: string;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
