export interface PaginatorModel {
  current_page: number;
  from?: number;
  last_page?: number;
  per_page: number;
  to?: number;
  total: number;
}
