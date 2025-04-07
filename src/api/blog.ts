import {API_URL, DEFAULT_TAKE} from "@/constants/api";
import {BlogArticle} from "./types.api";

export async function getLatestArticles(): Promise<BlogArticle[]> {
  try{
    const res = await fetch(`${API_URL}/api/v1/articles/?take=${DEFAULT_TAKE}&page=0`, {
      next: {
        revalidate: 0 
      }
    });

    if(!res.ok) {
      return [];
    }

    return res.json();
  } catch(err) {
    console.error(err);
    return [];
  }
}