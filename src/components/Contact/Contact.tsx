import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const contacts = [
    {
      href: "https://github.com/ikiwq",
      text: "ikiwq",
      icon: <AiFillGithub />,
    },
    {
      href: "https://www.linkedin.com/in/christopher-domenicano-169468251/",
      text: "christopher.domenicano",
      icon: <AiFillLinkedin />,
    },
    {
      href: "mailto:domenicano.chris@gmail.com",
      text: "domenicano.chris@gmail.com",
      icon: <AiOutlineMail />,
    },
  ];

  const openContactUrl = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div
      name="contact"
      className={`w-full h-screen transition-all mt-44 md:mt-20 flex items-center px-2`}
    >
      <div className="max-w-5xl mx-auto mt-10 w-full px-4 md:px-0 font-RobotoCondensed">
        <h1 className="text-7xl text-red-600 font-Bebas">Contact Me!</h1>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 space-x-0 space-y-4 xl:space-x-4 xl:space-y-0">
          <div className=" col-span-1 flex justify-center items-center">
            <span
              className={`text-black dark:text-white text-3xl duration-200`}
            >
              As a developer, I am seeking new opportunities everyday. I am
              willing to learn new things and give my contribute to interesting
              and innovative works.
            </span>
          </div>
          <div className="col-span-1 text-red-600 text-6xl flex xl:flex-col justify-around items-start h-full">
            {contacts.map((contact, index) => (
              <button
                onClick={() => {
                  openContactUrl(contact.href);
                }}
                key={"contactLink" + index}
                className="flex gap-2 items-center justify-center text-4xl hover:text-black dark:hover:text-white duration-100 transition-all"
              >
                <div className="text-6xl duration-100">{contact.icon}</div>
                <p className="hidden xl:flex duration-100">{contact.text}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
