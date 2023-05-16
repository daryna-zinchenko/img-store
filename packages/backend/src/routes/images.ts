import express from 'express';
import imageController from '../controllers/images';
import fileUpload from 'express-fileupload';
import { tryCatch } from '../middlewares/tryCatch';
import { filesPayloadExist } from '../middlewares/filesPayloadExist';
import { fileExtLimiter } from '../middlewares/fileExtLimiter';

export const router = express.Router();

router.get('/', tryCatch<string[]>(imageController.getImages));

const uploadMiddlewares = [
  fileUpload({ createParentPath: true }),
  filesPayloadExist,
  fileExtLimiter(['png', 'jpg', 'jpeg', 'gif', 'svg', 'tiff', 'psd', 'bmp', 'ico']),
]
router.post('/', ...uploadMiddlewares, tryCatch<string>(imageController.addImage));
