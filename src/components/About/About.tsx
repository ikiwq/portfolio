import { useEffect, useRef } from "react";
import { IoMdPaper } from "react-icons/io";
import Markdown from "react-markdown";
import { Typewriter } from "react-simple-typewriter";
import Logo from "../../assets/logo.jpg";

import aboutMe from "../../static/about/about.content";
import "./Styles.scss";

const About = () => {
  const description = aboutMe.description;

  function openCurriculum() {
    const url = "curriculum.pdf";
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  }

  const paragraphDivsRef = useRef<NodeListOf<Element>>(
    document.querySelectorAll("#paragraph-div")
  );
  useEffect(() => {
    paragraphDivsRef.current = document.querySelectorAll("#paragraph-div");
  }, []);

  const paragraphObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("paragraph-start-position");
          entry.target.classList.add("paragraph-end-position");
        }
      });
    },
    { threshold: 0.2 }
  );

  // Paragraph appearing stuff
  useEffect(() => {
    for (let i = 0; i < paragraphDivsRef.current.length; i++) {
      paragraphObserver.observe(paragraphDivsRef.current[i]);
    }
  }, [paragraphDivsRef]);

  return (
    <div
      name="about"
      className={`w-full flex flex-col items-center justify-center pb-10 transition-all duration-500 md:h-screen`}
    >
      <div className="max-w-5xl mt-2 md:mt-10 gap-5 md:grid md:grid-cols-5">
        <div className="col-span-2 px-4 flex justify-center">
          <img
            src={Logo}
            className="rounded-sm object-cover h-96 w-96 md:max-h-max md:h-full"
            style={{ maxHeight: "500px" }}
          ></img>
        </div>
        <div
          className={`col-span-3 flex flex-col gap-3 px-5 md:px-0 items-center md:items-start`}
        >
          <h1 className="text-red-600 font-Bebas text-5xl lg:text-7xl mt-2 md:mt-0 duration-200">
            ABOUT{" "}
            <Typewriter
              words={["ME", "WHAT I LIKE", "WHAT I DO"]}
              loop={true}
              cursor={true}
              cursorStyle="_"
            />
          </h1>
          <div
            className="paragraph-start-position transition-300"
            id="paragraph-div"
          >
            <div className="flex flex-col items-center justify-between md:text-start md:items-start md:justify-start gap-0.5">
              <Markdown className="prose prose-lg prose-neutral dark:prose-invert duration-200 prose-strong:text-red-600">
                {description}
              </Markdown>
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                className={`bg-red-600 text-white text-lg px-3 py-4 transition-all mt-5
                                duration-300 rounded-sm flex items-center gap-2 font-RobotoCondensed hover:scale-110`}
                onClick={() => openCurriculum()}
              >
                Download my curriculum!
                <IoMdPaper className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
