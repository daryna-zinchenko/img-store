import { Reducer, useReducer } from "react";

export type ImagesStatus = 'outdated' | 'loaded';

export type ImagesState = {
  status: ImagesStatus;
  images: string[];
}

export type ImagesAction = {
  type: ImagesStatus,
  images?: string[]
}

export const imagesReducer: Reducer<ImagesState, ImagesAction> = (prevImages: ImagesState, action: ImagesAction) => {
  switch (action.type) {
    case 'outdated': {
      return { ...prevImages, status: action.type };
    }
    case 'loaded': {
      return { images: action.images!, status: 'loaded' };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export function useTypedReducer<S, A>(reducer: Reducer<S, A>, initialState: S) {
  return useReducer(reducer, initialState);
}
