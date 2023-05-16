import express from 'express';
import { router as imagesRouter } from './routes/images';
import { router as rootRouter } from './routes/root';
import cors from 'cors';
import path from 'path'

const PORT = process.env.PORT || 4200;
export const IMG_PATH = path.resolve(process.env.IMG_PATH || './images');
export const PUBLIC_PATH = process.env.PUBLIC_PATH || `http://localhost:${PORT}/uploads`;

const app = express()
  .use(cors())
  .use('/', express.json(), rootRouter)
  .use('/images', express.json(), imagesRouter)
  .use('/uploads', express.static('images'))
  .use((_, res) => {
    res.status(404);
    res.send({ error: 'Page not found' });
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});