import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export const socials = [
  {
    name: "GitHub",
    link: "https://github.com/ikiwq",
    component: <AiFillGithub />,
    tooltip: "GitHub",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/christopher-domenicano/",
    component: <AiFillLinkedin />,
    tooltip: "LinkedIn",
  },
  {
    name: "Email",
    link: "mailto:domenicano.chris@gmail.com",
    component: <AiOutlineMail />,
    tooltip: "Email",
  },
  /*{
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCwdhc-Phu8SVeQkwyjQUfsA",
      component: <AiFillYoutube/>
    },*/
];
