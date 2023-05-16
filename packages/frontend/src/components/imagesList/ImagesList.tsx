import { useEffect } from "react";
import { useImages, useImagesDispatch } from "../../context/ImageContext";
import { getImages } from "../../services/imageFetcher";
import "./ImagesList.css";

export const ImagesList = () => {
  const { images, status } = useImages();
  const dispatch = useImagesDispatch();

  useEffect(() => {
    if (status === "outdated") {
      getImages().then(({ data: newImages }) => {
        dispatch!!({ type: "loaded", images: newImages });
      });
    }
  }, [status, dispatch]);

  return (
    <>
      <section>
        <h3>Images from server:</h3>
        {status === "outdated" && <div>Images need to be updated</div>}
        {status === "loaded" && (
          <div className="gallery">
            {images?.map((image) => (
              <img key={image} src={image} alt={image} className="gallery__card"/>
            ))}

          </div>
        )}
      </section>
    </>
  );
};
