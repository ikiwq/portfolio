import {CACHE_ONE_HOUR, DEFAULT_TAKE} from "@/constants/api";
import {BlogArticle} from "./types";

export async function getLatestArticles(): Promise<BlogArticle[]> {
  try{
    const res = await fetch(`${process.env.PUBLIC_API_URL}/api/v1/articles?take=${DEFAULT_TAKE}&page=0`, {
      next: {
        revalidate: CACHE_ONE_HOUR,
      }
    });

    if(!res.ok) {
      return [];
    }

    return res.json();
  } catch {
    return [];
  }
}