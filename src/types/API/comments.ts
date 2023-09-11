import type { ICreatable } from './request';

export interface IComment {
  postId: bigint;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ICommentCreate extends ICreatable {
  postId: bigint;
  userId: number;
  title: string;
  body: string;
}
