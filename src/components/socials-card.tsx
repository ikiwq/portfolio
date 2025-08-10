import {CURRICULUM_CONTENT} from "@/static/socials/curriculum.content";
import { SOCIALS_CONTENT } from "@/static/socials/socials.content";
import Card from "@/ui/card";
import {IconArrowUpRight} from "@tabler/icons-react";

export default function SocialsCard() {
  return (
    <div className="flex flex-col gap-2">
      <a
        className="w-full"
        href={CURRICULUM_CONTENT.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open my curriculum in a new tab`}
      >
        <Card className="social-card">
          <div className="flex items-center">
            <p className="font-semibold social-link">{CURRICULUM_CONTENT.title}</p>
            <IconArrowUpRight className="social-icon w-4 h-4"/>
          </div>
          <p className="text-xs text-neutral-400">{CURRICULUM_CONTENT.description}</p>
        </Card>
      </a>
      <div className="flex gap-2">
        {SOCIALS_CONTENT.map((social) => (
          <a 
            key={`${social.title}-social`} 
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Open my ${social.title} in a new tab`}
          >
            <Card 
              className="flex items-center justify-center hover:text-purple-600"
            >
              <social.icon
                className="w-8 h-8"
              />
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
