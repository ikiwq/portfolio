import projects from "../../static/projects/projects.content";
import Project from "./Project";

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div
      name="portfolio"
      className={`container max-w-5xl mx-auto px-4 py-4transition-all duration-500 md:mt-40 xl:mt-0`}
    >
      <h1 className="text-red-600 font-Bebas text-7xl text-center md:text-end mt-10 md:mt-0">
        MY PORTFOLIO
      </h1>
      <div className="flex flex-col gap-32 mt-8 md:gap-16">
        {featuredProjects.map((project, index) => (
          <Project
            project={project}
            right={index % 2 != 0}
            key={"majorProject" + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
