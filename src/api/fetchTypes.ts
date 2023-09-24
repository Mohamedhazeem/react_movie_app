export type movieType = {
  page: number;
  results: [
    {
      adult: boolean;
      backdrop_path: string;
      id: number;
      title: string;
      original_language: string;
      original_title: string;
      overview: string;
      poster_path: string;
      media_type: string;
      genre_ids: number[];
      popularity: number;
      release_date: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }
  ];
};

export type seriesType = {
  page: number;
  results: [
    {
      adult: boolean;
      backdrop_path: string;
      id: number;
      name: string;
      original_language: string;
      original_name: string;
      overview: string;
      poster_path: string;
      media_type: string;
      genre_ids: number[];
      popularity: number;
      first_air_date: string;
      vote_average: number;
      vote_count: number;
      origin_country: string[];
    }
  ];
};

export type searchResult = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name?: string;
  title?: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
};

export type searchType = {
  page?: number;
  results: searchResult[];
};

export type details = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string; // url for movie homepage
  id: number;
  imdb_id: string; //https://www.imdb.com/title/tt10638522/?ref_=hm_top_tt_i_3
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;

  production_companies: [
    {
      id: number;
      name: string;
      logo_path: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  vote_average: number;
  vote_count: number;
}
