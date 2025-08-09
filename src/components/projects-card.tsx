import {PROJECT_CONTENT} from "@/static/projects/projects.content";
import Card from "@/ui/card";
import {IconArrowUpRight, IconCode} from "@tabler/icons-react";
import Image from "next/image";

export default function ProjectsCard(){
  return (
    <Card className="flex flex-col space-y-3">
      <div className="flex items-center gap-2">
        <IconCode className="text-blue-500 w-5 h-5"/>
        <p className="font-semibold">Personal projects</p>
      </div>
      <div className="h-full flex flex-col gap-2 justify-between">
        {
          PROJECT_CONTENT.map((project, i) => (
            <Project
              key={`project-card-${i}`}
              {...project}
            />
          ))
        }
      </div>
    </Card>
  );
}

interface ProjectProps {
  imageSrc: string;
  title: string;
  description: string;
  url: string;
}

function Project({
  imageSrc, 
  title,
  description,
  url
}: ProjectProps){
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="w-full flex items-start space-x-2 cursor-pointer project-card">
        <Image width={40} height={40} className="rounded-xl mt-1" src={imageSrc} alt="Project image"/>
        <div className="w-full">
          <div className="flex items-center">
            <p className="project-link">{title}</p>
            <IconArrowUpRight className="project-icon w-4 h-4"/>
          </div>
          <p className="text-sm text-neutral-400">{description}</p>
        </div>
      </div>
    </a>
  );
}