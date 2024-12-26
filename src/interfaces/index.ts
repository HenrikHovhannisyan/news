export interface INews {
  author: string;
  category: CategoriesType[];
  description: string;
  id: NewsId;
  image: string;
  language: string;
  published: string;
  title?: string | number | null;
  url: UrlType;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

export interface CategoriesApiResponse {
  categories: CategoriesType[];
  description: string;
  status: string;
}

export interface IPaginationProps {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: () => (page: number) => void;
  totalPages: number;
  currentPage: number;
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string | number | null;
}

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";

export type ParamsType = Partial<IFilters>;

type UrlType = string | null | undefined;
type NewsId = string;

export type CategoriesType =
  | "regional"
  | "technology"
  | "lifestyle"
  | "business"
  | "general"
  | "programming"
  | "science"
  | "entertainment"
  | "world"
  | "sports"
  | "finance"
  | "academia"
  | "politics"
  | "health"
  | "opinion"
  | "food"
  | "game"
  | "fashion"
  | "academic"
  | "crap"
  | "travel"
  | "culture"
  | "economy"
  | "environment"
  | "art"
  | "music"
  | "notsure"
  | "CS"
  | "education"
  | "redundant"
  | "television"
  | "commodity"
  | "movie"
  | "entrepreneur"
  | "review"
  | "auto"
  | "energy"
  | "celebrity"
  | "medical"
  | "gadgets"
  | "design"
  | "EE"
  | "security"
  | "mobile"
  | "estate"
  | "funny";
