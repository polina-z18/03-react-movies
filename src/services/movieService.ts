import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const API_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get<MoviesResponse>(`${API_URL}/search/movie`, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.data.results;
}
