
import { getWorkContent } from "@/api/content";
import { WorkContent } from "@/api/types";
import Card from "@/ui/card";
import {IconBriefcase} from "@tabler/icons-react";
import Image from "next/image";
export default async function WorkCard(){
  const workContent = await getWorkContent();

  return (
    <Card className="h-full space-y-3">
      <div className="flex items-center gap-2">
        <IconBriefcase className="text-green-500 w-5 h-5" />
        <p className="font-semibold">
          Work experience
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {
          workContent.map((work: WorkContent, i: number) => (
            <CompanyCard
              key={`work-card-${i}`}
              {...work}
            />
          ))
        }
      </div>
    </Card>
  );
}

function CompanyCard({
  image,
  title,
  role,
  description,
  from,
  to
}: WorkContent){
  return (
    <div className="flex gap-2">
      <div className="w-10 h-10">
        <Image
          width={40}
          height={40}
          className="rounded-xl mt-1" 
          src={image} 
          alt="Work experience"
        />
      </div>
      <div className="w-full h-full">
        <div className="flex justify-between items-center">
          <p>{title}</p>
          <p className="text-xs text-neutral-400">
            {from} - {to ?? "Present"}
          </p>
        </div>
        <p className="text-xs text-neutral-400">
          {role}
        </p>
        <p className="text-sm text-neutral-200">
          {description}
        </p>
      </div>
    </div>
  );
}