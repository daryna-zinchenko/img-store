import axios from "axios";

const UPLOAD_URL = "http://localhost:4200/images";

export const submitForm = (selectedFiles: FileList) => {
    const formData = new FormData();
  const files = Array.from(selectedFiles);
  console.log(selectedFiles)
  files.map((file) => {
      return formData.append('file', file);
    });

  return axios
    .post(UPLOAD_URL, formData)
    .catch((err) => alert("File Upload Error"));
};
