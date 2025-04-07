
interface ProjectContent {
  title: string;
  description: string;
  imageSrc: string;
  url: string;
}

const PROJECT_CONTENT: ProjectContent[] = [
  {
   title: "Vitobot",
   description: "Vitobot is a Discord bot written in Typescript to manage your minecraft servers" ,
   imageSrc: "/images/discord.png",
   url: "https://github.com/ikiwq/vito-bot"
  },
  {
    title: "Blog",
    description: "My blog written in Java and Next.js, where I occasionally write",
    imageSrc: "/images/blog.webp",
    url: "https://github.com/ikiwq/blog"
  },
  {
    title: "DiaGL",
    description: "2D Game engine made in C++ and OpenGL",
    imageSrc: "/images/game.png",
    url: "https://github.com/ikiwq/dia-gl"
  }
];

export {PROJECT_CONTENT};