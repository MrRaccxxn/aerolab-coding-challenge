export interface Paginator<T> {
  page: number;
  firstItemIndex: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  categoryBy?: string;
  sortBy?: string;
  data: T[];
  dataFiltered: T[];
}
