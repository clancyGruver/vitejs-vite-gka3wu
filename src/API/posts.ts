import { API_URL } from '../constants';
import { HttpError } from '../errors/httpError';
import type { IPost, IPostCreate } from '../types/API/posts';
import request from './request';

const baseUrl = `${API_URL}/posts`;

export const getPostById = async (id: number) => {
  const url = `${baseUrl}/${id}`;

  const requestController = request<IPost>();

  if (id % 2 === 0) {
    return Promise.reject(new HttpError(404));
  }

  return requestController.get(url);
};

export const getAllPosts = async () => {
  const url = `${baseUrl}`;

  const requestController = request<IPost[]>();

  return requestController.get(url);
};

export const createPost = async (data: IPostCreate) => {
  const url = `${baseUrl}`;

  const requestController = request<IPost[]>();

  return requestController.post(url, data);
};

export const updatePost = async (id: number, data: IPostCreate) => {
  const url = `${baseUrl}/${id}`;

  const requestController = request<IPost[]>();

  return requestController.put(url, data);
};

export const patchPost = async (id: number, data: Partial<IPostCreate>) => {
  const url = `${baseUrl}/${id}`;

  const requestController = request<IPost[]>();

  return requestController.patch(url, data);
};

export const deletePost = async (id: number) => {
  const url = `${baseUrl}/${id}`;

  const requestController = request<IPost[]>();

  return requestController.del(url);
};
