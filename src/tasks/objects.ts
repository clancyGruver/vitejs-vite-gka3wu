import { IPostWithComments } from '../types/tasks/promises';

/**
 * Увеличить все postId на 100, не изменяя исходный объект
 */
export const changeCommentsPostId = (
  postWithComments: IPostWithComments
): IPostWithComments => {
  const res = { ...postWithComments };
  // Правильное решение
  // res.comments = res.comments.map((comment) => ({
  //   ...comment,
  //   postId: comment.postId + 100n,
  // }));
  for (let i = 0; i < res.comments.length; i += 1) {
    res.comments[i].postId += 100n;
  }
  console.log('changeCommentsPostId', res);
  return res;
};
