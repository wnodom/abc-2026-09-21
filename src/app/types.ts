interface ViewDetail {
  age: string;
  region: string;
  date: string;
}

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetail[];
}
