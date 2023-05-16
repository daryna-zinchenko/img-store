import fs from 'fs';
import { PUBLIC_PATH, IMG_PATH } from '../server';
import { resolve } from 'path'

const getImages = async () => {
  return (await fs.promises.readdir(IMG_PATH))
    .map(file => {
      console.log(PUBLIC_PATH)
      return `${PUBLIC_PATH}/${file}`;
    });
}

const persistFile = async (fileName, fileContent) => {
  const filePath = resolve(`${IMG_PATH}/${fileName}`);

  return fs.promises.writeFile(filePath, fileContent);
};

export default { getImages, persistFile };