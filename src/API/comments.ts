import { API_URL } from '../constants';
import { HttpError } from '../errors/httpError';
import type { IComment, ICommentCreate } from '../types/API/comments';
import request from './request';

const baseUrl = `${API_URL}/comments`;

const BigIntedPostId = (comment: IComment) =>
  (comment.postId = BigInt(comment.postId));

export const getCommentById = async (id: number) => {
  const url = `${baseUrl}/${id}`;

  const requestController = request<IComment>();

  const comment = await requestController.get(url);
  BigIntedPostId(comment);
  return comment;
};

export const getCommentsByPostId = async (id: number) => {
  const url = `${baseUrl}?postId=${id}`;

  if (id % 2 === 0) {
    return Promise.reject(new HttpError(404));
  }

  const requestController = request<IComment[]>();

  const comments = await requestController.get(url);
  comments.forEach(BigIntedPostId);
  return comments;
};

export const getAllComments = async () => {
  const url = `${baseUrl}`;

  const requestController = request<IComment[]>();

  const comments = await requestController.get(url);
  comments.forEach(BigIntedPostId);
  return comments;
};

export const createComment = async (data: ICommentCreate) => {
  const url = `${baseUrl}`;

  const requestController = request<IComment[]>();

  return requestController.post(url, data);
};

export const updateComment = async (id: number, data: ICommentCreate) => {
  const url = `${baseUrl}/${id}`;

  const requestController = request<IComment[]>();

  return requestController.put(url, data);
};

export const patchComment = async (
  id: number,
  data: Partial<ICommentCreate>
) => {
  const url = `${baseUrl}/${id}`;

  const requestController = request<IComment[]>();

  return requestController.patch(url, data);
};

export const deleteComment = async (id: number) => {
  const url = `${baseUrl}/${id}`;

  const requestController = request<IComment[]>();

  return requestController.del(url);
};
