import { useEffect, useState } from "react";
import { ProjectModel } from "../../models/project.model";
import MinorProject from "./MinorProject";
import projects from "../../static/projects/projects.content";

const MinorProjects = () => {
  const minorProjects = projects.filter((project) => !project.featured);

  const projectPerRow = 3;

  const [currentRow, setCurrentRow] = useState(1);
  const [displayedProjects, setDisplayedProjects] = useState<
    Array<ProjectModel>
  >([]);
  const [reachedMax, setReachedMax] = useState(false);

  function toggleShow() {
    if (projectPerRow * currentRow < projects.length) {
      setCurrentRow(currentRow + 2);
      setReachedMax(true);
    } else {
      setCurrentRow(currentRow - 2);
      setReachedMax(false);
    }
  }

  useEffect(() => {
    const startIndex = 0;
    const endIndex = startIndex + projectPerRow * currentRow;
    const slicedProjects: Array<ProjectModel> = minorProjects.slice(
      startIndex,
      endIndex
    );

    setDisplayedProjects(slicedProjects);
  }, [currentRow, projectPerRow]);

  return (
    <div
      className={`container max-w-5xl mx-auto px-4 py-4transition-all duration-500 pt-60`}
    >
      <h1 className="text-red-600 font-Bebas text-7xl text-center md:text-start mt-10 md:mt-0">
        OTHER PROJECTS
      </h1>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div
          id="projects-grid"
          className="grid md:grid-cols-2 xl:grid-cols-3 mt-8 gap-6"
        >
          {displayedProjects.map((project, index) => (
            <MinorProject
              project={project}
              right={index % 2 != 0}
              key={index}
            />
          ))}
        </div>
        {minorProjects.length > projectPerRow && (
          <button
            className="text-xl font-RobotoCondensed text-red-600 border border-red-600 px-4 py-3 rounded-sm hover:bg-red-600 hover:text-white duration-300 font-bold"
            onClick={() => toggleShow()}
          >
            {reachedMax ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default MinorProjects;
