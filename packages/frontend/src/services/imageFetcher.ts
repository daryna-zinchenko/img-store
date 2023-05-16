import axios from "axios";

const DOWNLOAD_URL = "http://localhost:4200/images";

export const getImages = async () => {  
  return await axios.get<string[]>(DOWNLOAD_URL)
};
