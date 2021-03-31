export interface IPostResponse<T> {
  code: string;
  data: T;
  message: string;
}
