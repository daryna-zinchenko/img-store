import { NextFunction, Request, Response, RequestHandler } from 'express';

export const filesPayloadExist: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  if (req.files) {
    next();
  } else {
    res.status(400).json({ status: 'error', message: 'Missig files.' })
  }
}
