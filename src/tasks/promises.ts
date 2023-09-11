import { getCommenstByPostId } from '../API/comments';
import { getPostById } from '../API/posts';
import { IPostWithComments } from '../types/tasks/promises';

/*
 * Переписать с использованием await
 */
export const getPostWithComments = (
  postId: number
): Promise<IPostWithComments> =>
  Promise.all([getPostById(postId), getCommenstByPostId(postId)]).then(
    ([post, comments]) => ({ post, comments })
  );

/*
 * Сделать запросы выполняемыми в парралели, а не последовательно.
 */
export const getPostWithComments2 = async (
  postId: number
): Promise<IPostWithComments> => {
  const post = await getPostById(postId);
  const comments = await getCommenstByPostId(postId);

  return { post, comments };
};

/*
 * Задача на понимание объектов и замыкания
 */
export const getPostWithComments3 = () => {
  const currentPost: IPostWithComments = {
    post: {
      id: -1,
      userId: -1,
      body: '',
      title: '',
    },
    comments: [],
  };

  const updatePost = async (postId: number): Promise<void> => {
    const [post, comments] = await Promise.all([
      getPostById(postId),
      getCommenstByPostId(postId),
    ]);
    currentPost.post = post;
    currentPost.comments = comments;
  };

  return {
    post: currentPost,
    updatePost,
  };
};

/**
 * Задача на методы Promise
 * может вернуть ошибку, если id не существует, недо вернуть все ответы
 */
export const getPosts = async (postIds: number[]) =>
  await Promise.allSettled(postIds.map(getPostWithComments));
