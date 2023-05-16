import { NextFunction, Request, Response, RequestHandler } from 'express';

export const fileExtLimiter = (allowedExtArray: string[]): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const files = req.files
    const fileExtensions = Object.keys(files).map(key => files[key].name.split('.').pop())
    const allowed = fileExtensions.every(ext => allowedExtArray.includes(ext))

    if (!allowed) {
      const message = `Upload failed. Only ${allowedExtArray.toString()} files allowed.`;

      return res.status(422).json({ status: "error", message });
    }

    next()
  }
}
