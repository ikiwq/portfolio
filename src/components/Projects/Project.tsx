import { useEffect } from "react";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { ProjectModel } from "../../models/project.model";
import "./Styles.scss";

const Project = ({
  right,
  project,
}: {
  right: boolean;
  project: ProjectModel;
}) => {
  const projectImagePath = `/images/${project.postImage.name}`;

  const projectsRight = document.getElementsByClassName("start-right");
  const projectsLeft = document.getElementsByClassName("start-left");

  const projectsRightMobile =
    document.getElementsByClassName("start-right-mobile");
  const projectsLeftMobile =
    document.getElementsByClassName("start-left-mobile");

  useEffect(() => {
    for (let i = 0; i < projectsRight.length; i++) {
      observerRight.observe(projectsRight[i]);
    }

    for (let i = 0; i < projectsLeft.length; i++) {
      observerLeft.observe(projectsLeft[i]);
    }

    for (let i = 0; i < projectsRightMobile.length; i++) {
      observerRightMobile.observe(projectsRightMobile[i]);
    }

    for (let i = 0; i < projectsLeftMobile.length; i++) {
      observerLeftMobile.observe(projectsLeftMobile[i]);
    }
  }, [projectsRight, projectsLeft, projectsLeftMobile, projectsRightMobile]);

  const observerLeft = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("end-left");
        }
      });
    },
    { threshold: 0.4 }
  );

  const observerLeftMobile = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("end-left");
      }
    });
  });

  const observerRight = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("end-right");
        }
      });
    },
    { threshold: 0.4 }
  );

  const observerRightMobile = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("end-right");
      }
    });
  });

  const openImageLink = () => {
    let url;
    if (project.linkUrl) {
      url = project.linkUrl;
    } else {
      url = project.githubUrl;
    }
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const openProjectUrl = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="">
      <div
        className={`hidden ${
          right ? "justify-end" : "justify-start"
        } "items-end relative md:flex`}
      >
        <div
          className={`relative w-3/5 hover:cursor-pointer transition-all duration-1000 img-effect bg-red-500 ${
            right ? "left-0 start-right" : "right-0 start-left"
          }`}
          onClick={() => {
            openImageLink();
          }}
        >
          <div className="overflow-hidden max-h-80">
            <img
              src={projectImagePath}
              className={`block object-cover w-full h-96 img-class duration-1000`}
            />
          </div>
          <div
            className={`absolute bottom-0 left-0 right-0 overflow-hidden h-full img-cover ${
              right ? "start-right" : "start-left"
            }`}
          />
        </div>
        <div
          className={`z-10 col-span-3 flex flex-col absolute ${
            right ? "left-0 start-left" : "right-0 start-right"
          } md:top-0 xl:top-10 md:gap-2`}
        >
          <h1
            className={`text-red-600 font-Bebas text-5xl ${
              right ? "text-start" : "text-end"
            } md:relative`}
          >
            {project.title}
          </h1>
          <div
            className={`${
              right ? "text-start pr-2" : "text-end"
            } text-white font-RobotoCondensed font-light px-4 py-4 bg-red-600 md:max-w-md xl:max-w-md rounded-sm shadow-black`}
          >
            <span>{project.projectDescription}</span>
          </div>
          <div className={`flex ${right ? "justify-start" : "justify-end"}`}>
            <div
              className={`${
                right ? "text-start" : "text-end"
              } third-color font-light font-RobotoCondensed max-w-xs flex gap-3`}
            >
              {project.technologies &&
                project.technologies.map((technology, index) => {
                  return (
                    <span
                      className="text-black dark:text-white transition-200"
                      key={"technologyMaxscreen" + index}
                    >
                      {" "}
                      {technology}{" "}
                    </span>
                  );
                })}
            </div>
          </div>
          <div
            className={`flex text-4xl text-red-600 items-center ${
              right ? "justify-star" : "justify-end"
            }`}
          >
            {project.linkUrl ? (
              <a target="_blank" href={project.linkUrl} rel="noreferr noopener">
                <AiOutlineLink className="hover:cursor-pointer duration-200 hover:text-black dark:hover:text-white" />
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                target="_blank"
                href={project.githubUrl}
                rel="noreferr noopener"
              >
                <AiFillGithub className="hover:cursor-pointer duration-200 hover:text-black dark:hover:text-white" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col ${
          right ? "items-end" : "items-start"
        } "justify-end relative md:hidden `}
      >
        <h1
          className={`text-red-600 font-Bebas w-full text-7xl ${
            right
              ? "text-start start-right-mobile"
              : "text-end start-left-mobile"
          } md:relative`}
        >
          {project.title}
        </h1>
        <div
          className={`relative h-70 w-4/5 hover:cursor-pointer img-effect bg-red-500 ${
            right ? "left-0 start-right" : "right-0 start-left"
          }`}
          onClick={() => {
            openImageLink();
          }}
        >
          <div className="overflow-hidden max-h-72">
            <img
              src={projectImagePath}
              className={`block object-cover w-full h-72 img-class duration-300`}
            />
          </div>
          <div
            className={`absolute bottom-0 left-0 right-0 overflow-hidden h-full img-cover ${
              right ? "start-right" : "start-left"
            }`}
          />
        </div>
        <div
          className={`${
            right
              ? "text-start left-0 start-left-mobile"
              : "text-end right-0 start-right-mobile"
          } px-4 py-4 text-white font-RobotoCondensed bg-red-600 w-4/5 absolute top-48 right-0 flex flex-col gap-1`}
        >
          <span className="text-md font-light">
            {project?.projectDescription}
          </span>
          <div
            className={`text-neutral-900 text-sm flex gap-2.5 ${
              right ? "justify-start" : "justify-end"
            }`}
          >
            {project.technologies &&
              project.technologies.map((technology, index) => {
                return (
                  <span key={"technologyMiniScreen" + index}>
                    {" "}
                    {technology}{" "}
                  </span>
                );
              })}
          </div>
          <div
            className={`flex text-3xl text-neutral-900 items-center ${
              right ? "justify-star" : "justify-end"
            }`}
          >
            {project.linkUrl ? (
              <button
                onClick={() => {
                  openProjectUrl(project.linkUrl);
                }}
              >
                <AiOutlineLink className="hover:cursor-pointer hover:scale-110 duration-200 transition-all" />
              </button>
            ) : null}
            {project.githubUrl ? (
              <button
                onClick={() => {
                  openProjectUrl(project.githubUrl);
                }}
              >
                <AiFillGithub className="hover:cursor-pointer hover:scale-110 duration-200 transition-all" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
