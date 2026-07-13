export interface IMeta {
  page?: number;

  limit?: number;

  total?: number;

  totalPage?: number;
}

export interface IApiResponse<T> {
  statusCode: number;

  success: boolean;

  message: string;

  meta?: IMeta;

  data?: T;
}
