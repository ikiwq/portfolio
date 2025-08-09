import {INTRODUCTION_CONTENT} from "@/static/introduction/introduction.content";
import Card from "@/ui/card";
import Image from "next/image";

export function IntroductionCard(){
  return (
    <Card className="h-full flex flex-col gap-3 justify-between">
      <div className="space-y-4">
        <div className="flex gap-2 items-center">
          <Image
            width={40}
            height={40}
            className="rounded-xl" 
            src={INTRODUCTION_CONTENT.imageSrc} 
            alt="Introduction image"
          />
          <div>
            <p className="font-semibold">
              {INTRODUCTION_CONTENT.title}
            </p>
            <p className="text-xs text-neutral-400">
              {INTRODUCTION_CONTENT.subtitle}
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm text-neutral-200 whitespace-pre-line">
            {INTRODUCTION_CONTENT.description}
          </p>
        </div>
      </div>
    </Card>
  );
}


