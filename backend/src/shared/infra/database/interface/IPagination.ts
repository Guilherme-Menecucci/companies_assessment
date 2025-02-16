interface IPagination<T> {
  items: T[];
  total: number;
}

export default IPagination;
