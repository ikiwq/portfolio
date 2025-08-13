import Card from "@/ui/card";
import Image from "next/image";
import { getIntroductionContent } from "@/api/content";

export default async function IntroductionCard(){
  const introductionContent = await getIntroductionContent();

  return (
    <Card className="h-full flex flex-col gap-3 justify-between">
      <div className="space-y-4">
        <div className="flex gap-2 items-center">
          <Image
            width={40}
            height={40}
            className="rounded-xl" 
            src={introductionContent.image} 
            alt="Introduction image"
          />
          <div>
            <p className="font-semibold">
              {introductionContent.title}
            </p>
            <p className="text-xs text-neutral-400">
              {introductionContent.subtitle}
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm text-neutral-200 whitespace-pre-line">
            {introductionContent.description}
          </p>
        </div>
      </div>
    </Card>
  );
}


