import {SKILL_CONTENT} from "@/static/skills/skills.content";
import Card from "@/ui/card";
import {IconDeviceDesktop} from "@tabler/icons-react";

export default function SkillsCard(){
  return (
    <Card className="h-full space-y-3">
      <div className="flex items-center gap-2">
        <IconDeviceDesktop className="text-red-500 w-5 h-5" />
        <p className="font-semibold">Skills</p>
      </div>
      <div className="space-y-2">
        {
          SKILL_CONTENT.map((skill, i) => (
            <div key={`skill-card-${i}`}>
              <p className="text-neutral-400 text-xs">{skill.title}</p>
              <p className="text-sm">{skill.description}</p>
            </div>
          ))
        }
      </div>
    </Card>
  )
}