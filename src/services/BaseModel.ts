export interface IBaseResponse {
  message: string;
}

export type Pagination = {
  take: number;
  page: number;
};
