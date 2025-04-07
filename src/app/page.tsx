import BlogCard from "@/components/blog-card";
import {IntroductionCard} from "@/components/introduction-card";
import ProjectsCard from "@/components/projects-card";
import SkillsCard from "@/components/skills-card";
import SocialsCard from "@/components/socials-card";
import SpotifyCard from "@/components/spotify-card";
import WorkCard from "@/components/work-card";

export default function Home() {
  return (
    <div 
      className={`
        bg-gradient-to-br from-indigo-600 from-0% via-black to-purple-600 to-100%
        w-screen h-screen flex items-center justify-center 
        text-black dark:text-white 
        bg-[length:400%_400%] animate-gradient
        overflow-y-scroll px-3 pt-3
      `}
    >
      <div
        className="w-full h-full md:h-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-2 group pointer-events-none" 
      >
        <div className="flex flex-col gap-2 xl:col-span-2">
          <IntroductionCard/>
          <SkillsCard/>
        </div>
        <div className="flex flex-col gap-2 xl:col-span-3">
          <WorkCard/>
          <ProjectsCard/>
        </div>
        <div className="flex flex-col md:flex-row xl:flex-col gap-2 md:col-span-2">
          <div className="w-full">
            <BlogCard/>
          </div>
          <div className="w-full space-y-2">
            <SpotifyCard/>
            <SocialsCard/>
          </div>
        </div>
        <div className="md:hidden h-3"/>
      </div>
    </div>
  );
}
