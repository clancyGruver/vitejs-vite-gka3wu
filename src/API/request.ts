import { HttpError } from '../errors/httpError';
import { HttpMethods, ICreatable } from '../types/API/request';

const errorHandler = (error: unknown) => {
  if (!(error instanceof Error)) {
    console.error('Fetch request failed:', error);
    return;
  }

  switch (error.name) {
    case 'SyntaxError':
      console.log('Не сериализуемый объект');
      break;
    case 'HTTP ERROR':
      console.log(error.message);
      break;
    case 'AbortError':
      console.log('Запрос отменен');
      break;
    default:
      console.error('Во время выполнения запроса произошла ошибка:', error);
  }
};

export default <T = unknown>() => {
  const controller = new AbortController();
  const { signal } = controller;

  const get = async (url: string): Promise<Awaited<T>> => {
    try {
      const response = await fetch(url, {
        signal,
        method: HttpMethods.Get,
      });

      if (!response.ok) {
        throw new HttpError(response.status);
      }

      return await response.json();
    } catch (error: unknown) {
      errorHandler(error);
    }
  };

  const post = async (url: string, data: ICreatable): Promise<Awaited<T>> => {
    try {
      const body = JSON.stringify(data);
      const response = await fetch(url, {
        signal,
        method: HttpMethods.Post,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body,
      });
      return await response.json();
    } catch (error: unknown) {
      errorHandler(error);
    }
  };

  const put = async (url: string, data: ICreatable): Promise<Awaited<T>> => {
    try {
      const body = JSON.stringify(data);
      const response = await fetch(url, {
        signal,
        method: HttpMethods.Put,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body,
      });
      return await response.json();
    } catch (error: unknown) {
      errorHandler(error);
    }
  };

  const patch = async (
    url: string,
    data: Partial<ICreatable>
  ): Promise<Awaited<T>> => {
    try {
      const body = JSON.stringify(data);
      const response = await fetch(url, {
        signal,
        method: HttpMethods.Patch,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body,
      });
      return await response.json();
    } catch (error: unknown) {
      errorHandler(error);
    }
  };

  const del = async (url: string): Promise<void> => {
    try {
      const response = await fetch(url, { method: HttpMethods.Delete });
    } catch (error: unknown) {
      errorHandler(error);
    }
  };

  const abort = () => {
    controller.abort();
  };

  return {
    abort,
    get,
    post,
    put,
    patch,
    del,
  };
};
