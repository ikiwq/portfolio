import { useEffect } from 'react';

import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { ProjectModel } from '../../models/project.model';
import "./Styles.scss";

const MinorProject = ({ right, project }: { right: boolean, project: ProjectModel }) => {
  const projectImage = `images/${project.postImage.name}`
  const es = document.getElementsByClassName("start");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("end");
      }
    })
  }, { threshold: 0.35 })

  useEffect(() => {
    for (let i = 0; i < es.length; i++) {
      observer.observe(es[i]);
    }
  }, [es])

  const openImageLink = () => {
    let url;
    if (project.linkUrl) {
      url = project.linkUrl;
    } else {
      url = project.githubUrl;
    }
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const openProjectUrl = (event: any, url: string) => {
    event.stopPropagation()
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className='flex relative rounded-sm hover:scale-110 duration-500 cursor-pointer text-white text-sm start' onClick={() => openImageLink()}>
      <div className='absolute top-0 left-0 z-10 w-full h-full'>
        <img src={projectImage} className='w-full h-full object-cover object-center'/>
      </div>
      <div className='flex flex-col z-20 justify-between w-full h-full bg-red-600 px-4 py-4 bg-opacity-90 hover:bg-opacity-75 duration-300'>
        <div>
          <div className='flex justify-between items-center'>
            <h1 className='font-Bebas text-5xl'>{project.title}</h1>
          </div>
          <div className='flex flex-col justify-start items-start gap-4 flex-grow'>
            <p className='font-RobotoCondensed font-light text-lg lg:text-base' style={{ letterSpacing: "0.02em" }}>{project.projectDescription}</p>
          </div>
        </div>
        <footer className='pt-8 flex justify-between' style={{ letterSpacing: "0.02em" }}>
          <div className='font-RobotoCondensed font-light flex gap-2.5'>
            {project.technologies &&
              project.technologies.map((technology, index) => {
                return (
                  <span key={"minorProjectTechnology" + index}>{technology}</span>
                );
              })
            }
          </div>
          <div className={`flex text-4xl items-center ${right ? "justify-star" : "justify-end"}`}>
            {project.linkUrl ? <div onClick={(event) => openProjectUrl(event, project.linkUrl)}><AiOutlineLink className='hover:cursor-pointer duration-200 hover:text-black' /></div> : null}
            {project.githubUrl ? <div onClick={(event) => openProjectUrl(event, project.githubUrl)}><AiFillGithub className='hover:cursor-pointer duration-200 hover:text-black' /></div> : null}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MinorProject