import { Request, Response } from 'express';
import { ControllerAction } from '../types';
import imagesService from '../services/images';

const getImages: ControllerAction<string[]> = async (res: Response) => {
  const files = await imagesService.getImages();

  return { data: files, code: 200 };
};

const addImage: ControllerAction<string> = async (req: Request) => {
  await Promise.all(
    Object.keys(req.files).map(key => imagesService.persistFile(req.files[key].name, req.files[key].data))
  );

  return { data: 'Created', code: 201 }
};

export default { getImages, addImage };
