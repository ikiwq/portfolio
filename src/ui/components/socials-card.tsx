import { getCurriculumContent, getSocialsContent } from "@/api/content";
import { SocialsContent } from "@/api/types";
import Card from "@/ui/card";
import {
  IconArrowUpRight,
  IconBrandFacebook, 
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandSpotify,
  IconQuestionMark,
  IconMail,
  IconBrandX
} from "@tabler/icons-react";

export default async function SocialsCard() {
  const [curriculumContent, socialsContent] = await Promise.all([
    getCurriculumContent(),
    getSocialsContent()
  ]);

  return (
    <div className="flex flex-col gap-2">
      <a
        className="w-full"
        href={curriculumContent.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open my curriculum in a new tab`}
      >
        <Card className="social-card">
          <div className="flex items-center">
            <p className="font-semibold social-link">{curriculumContent.title}</p>
            <IconArrowUpRight className="social-icon w-4 h-4"/>
          </div>
          <p className="text-xs text-neutral-400">{curriculumContent.description}</p>
        </Card>
      </a>
      <div className="flex gap-2">
        {socialsContent.map((social: SocialsContent) => (
          <a 
            key={`${social.title}-social`} 
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Open my ${social.title} in a new tab`}
          >
            <Card 
              className="flex items-center justify-center hover:text-purple-600 p-3"
            >
              {getSocialIcon(social.icon)}
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}

const icons: Record<string, React.ElementType> = {
  linkedin: IconBrandLinkedin,
  github: IconBrandGithub,
  x: IconBrandX,
  instagram: IconBrandInstagram, 
  facebook: IconBrandFacebook,
  spotify: IconBrandSpotify,
  question: IconQuestionMark,
  mail: IconMail, 
};

function getSocialIcon(icon: string) {
  const IconComponent = icons[icon];
  if(!IconComponent) {
    return <IconQuestionMark className="w-8 h-8" stroke={1.5}/>;
  }

  return <IconComponent className="w-8 h-8" stroke={1.5}/>;
}
