import { HttpResponse } from '../../infra/protocols/http';
import { UnauthorizedError } from '../../infra/errors/unauthorized-error';
import { ServerError } from '../../infra/errors/server-error';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error,
});

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError(),
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: JSON.stringify(data),
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});
