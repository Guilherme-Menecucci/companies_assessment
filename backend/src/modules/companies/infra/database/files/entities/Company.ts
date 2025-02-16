interface IImageSizes {
  '32x32': string;
  '74x74': string;
  '100x100': string;
}

interface INameAttr {
  id: number;
  name: string;
}

class Company {
  uuid: string;
  images: IImageSizes;
  income_streams: INameAttr[];
  industries: INameAttr[];
  name: string;
  tagline: string;
  total_jobs_available: number;
}

export default Company;
