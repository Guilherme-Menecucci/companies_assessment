import { NextFunction, Request, Response } from 'express';
import AppError from '@shared/errors/AppError';
import HttpStatusCode from '@shared/enums/HttpStatusCode';

const handleErrors = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }
  return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    error: 'Internal Server Error',
  });
};

export default handleErrors;
