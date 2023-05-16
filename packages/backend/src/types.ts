export type ControllerActionResult<T> = {
  data: T;
  code: number;
}

export type ControllerAction<T> = (req: Request) => Promise<ControllerActionResult<T>>;