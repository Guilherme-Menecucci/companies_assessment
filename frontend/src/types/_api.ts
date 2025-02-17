interface IPagination<T> {
  items: T[];
  total: number;
}

export type TCompany = {
  uuid: string;
  images: {
    '32x32': string;
    '74x74': string;
    '100x100': string;
  };
  income_streams: {
    id: number;
    name: string;
  }[];
  industries: {
    id: number;
    name: string;
  }[];
  name: string;
  tagline: string;
  total_jobs_available: number;
};

export type TCompanies = IPagination<TCompany>;
