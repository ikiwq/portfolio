import {Icon, IconBrandGithub, IconBrandLinkedin, IconMail} from "@tabler/icons-react";

interface SocialsContent {
  title: string;
  icon: Icon;
  href: string; 
}

const SOCIALS_CONTENT: SocialsContent[] = [
  {
    title: "Mail",
    icon: IconMail,
    href: "mailto:domenicano.chris@gmail.com"
  },
  {
    title: "Linkedin",
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/christopher-domenicano/"
  },
  {
    title: "Github",
    icon: IconBrandGithub,
    href: "https://github.com/ikiwq"
  }
];

export {SOCIALS_CONTENT};