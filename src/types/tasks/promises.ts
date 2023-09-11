import { IComment } from '../API/comments';
import { IPost } from '../API/posts';

export interface IPostWithComments {
  post: IPost;
  comments: IComment[];
}
