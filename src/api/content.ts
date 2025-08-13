import { CACHE_ONE_HOUR } from "@/constants/api";
import { 
  CurriculumContent,
  IntroductionContent, 
  ProjectContent, 
  SkillContent, 
  SocialsContent, 
  SpotifyContent, 
  WorkContent 
} from "./types";

async function getWorkContent(): Promise<WorkContent[]> {
  const res = await fetch(`${process.env.PUBLIC_STORAGE_URL}/content/work.json`, {
    next: {
      revalidate: CACHE_ONE_HOUR
    }
  });
  const data = await res.json();
  return data;
}

async function getIntroductionContent(): Promise<IntroductionContent> {
  const res = await fetch(`${process.env.PUBLIC_STORAGE_URL}/content/introduction.json`, {
    next: {
      revalidate: CACHE_ONE_HOUR
    }
  });
  const data = await res.json();
  return data;
}

async function getSkillsContent(): Promise<SkillContent[]> {
  const res = await fetch(`${process.env.PUBLIC_STORAGE_URL}/content/skills.json`, {
    next: {
      revalidate: CACHE_ONE_HOUR
    }
  });
  const data = await res.json();
  return data;
}

async function getProjectsContent(): Promise<ProjectContent[]> {
  const res = await fetch(`${process.env.PUBLIC_STORAGE_URL}/content/projects.json`, {
    next: {
      revalidate: CACHE_ONE_HOUR
    }
  });
  const data = await res.json();
  return data;
}

async function getSpotifyContent(): Promise<SpotifyContent> {
  const res = await fetch(`${process.env.PUBLIC_STORAGE_URL}/content/spotify.json`, {
    next: {
      revalidate: CACHE_ONE_HOUR
    }
  });
  const data = await res.json();
  return data;
}

async function getSocialsContent(): Promise<SocialsContent[]> {
  const res = await fetch(`${process.env.PUBLIC_STORAGE_URL}/content/socials.json`, {
    next: {
      revalidate: CACHE_ONE_HOUR
    }
  });
  const data = await res.json();
  return data;
}

async function getCurriculumContent(): Promise<CurriculumContent> {
  const res = await fetch(`${process.env.PUBLIC_STORAGE_URL}/content/curriculum.json`, {
    next: {
      revalidate: CACHE_ONE_HOUR
    }
  });
  const data = await res.json();
  return data;
}

export {
  getWorkContent,
  getIntroductionContent,
  getSkillsContent,
  getProjectsContent,
  getSpotifyContent,
  getSocialsContent,
  getCurriculumContent
};