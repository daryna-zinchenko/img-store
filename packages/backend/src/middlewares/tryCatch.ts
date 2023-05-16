import { Request, Response, RequestHandler } from 'express';
import { ControllerAction } from '../types';

export function tryCatch<T>(handler: ControllerAction<T>): RequestHandler {
  return async (req: Request, res: Response) => {
    try {
      const { code, data } = await handler(req);
      res.status(code).send(data);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}