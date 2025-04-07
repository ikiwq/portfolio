interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  readingTimeSeconds: number;
  pinned: boolean;
  createdAt: string;
}

export {type BlogArticle};