import { Dispatch, createContext, useContext } from "react";
import { ImagesAction, ImagesState, imagesReducer, useTypedReducer } from "../reduces/images";

const ImagesContext = createContext<ImagesState>({ images: [], status: "outdated" });
const ImagesDispatchContext = createContext<Dispatch<ImagesAction> | null>(null);

export const ImagesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, dispatch] = useTypedReducer(
    imagesReducer,
    { images: [], status: "outdated" }
  );

  return (
    <ImagesContext.Provider value={images} >
      <ImagesDispatchContext.Provider value={dispatch}>
        {children}
      </ImagesDispatchContext.Provider>
    </ImagesContext.Provider>
  );
}

export function useImages() {
  return useContext(ImagesContext);
}

export function useImagesDispatch() {
  return useContext(ImagesDispatchContext);
}
