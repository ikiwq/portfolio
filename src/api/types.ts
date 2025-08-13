type BlogArticle = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  readingTimeSeconds: number;
  pinned: boolean;
  createdAt: string;
}

type WorkContent = {
  image: string;
  title: string;
  description: string;
  role: string;
  from: string;
  to?: string;
}

type SpotifyContent = {
  title: string,
  author: string,
  image: string;
  href: string;
}

type SocialsContent = {
  title: string;
  icon: string;
  href: string; 
}

type SkillContent = {
  title: string,
  description: string;
}

type ProjectContent = {
  title: string;
  description: string;
  image: string;
  url: string;
}

type IntroductionContent = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

type CurriculumContent = {
  title: string;
  description: string;
  href: string;
}

export {
  type BlogArticle,
  type WorkContent,
  type SpotifyContent,
  type SocialsContent,
  type ProjectContent,
  type IntroductionContent,
  type SkillContent,
  type CurriculumContent
};