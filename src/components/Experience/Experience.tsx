import { useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown';
import { Experience } from '../../models/experience.model';
import workExperiences from '../../static/experience/experience.content';

const Work = () => {
    const experienceData: Array<Experience> = workExperiences;

    const [experienceIndex, setExperienceIndex] = useState<number>(0);

    const experienceParagraphsRef = useRef<NodeListOf<Element>>(document.querySelectorAll("#experience-paragraph"));
    useEffect(() => {
        experienceParagraphsRef.current = document.querySelectorAll("#experience-paragraph");
    }, []);

    const resetAndSetExperienceIndex = (index: number) => {
        setExperienceIndex(index);
        for (let experienceParagraph of experienceParagraphsRef.current) {
            experienceParagraph.classList.add("paragraph-start-position");
            experienceParagraph.classList.remove("paragraph-end-position");
        }

        setTimeout(() => {
            for (let experienceParagraph of experienceParagraphsRef.current) {
                experienceParagraph.classList.remove("paragraph-start-position");
                experienceParagraph.classList.add("paragraph-end-position");
            }
        }, 50)
    }

    let experienceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("paragraph-start-position");
                entry.target.classList.add("paragraph-end-position");
                experienceObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.35 });

    useEffect(() => {
        for (let i = 0; i < experienceParagraphsRef.current.length; i++) {
            experienceObserver.observe(experienceParagraphsRef.current[i]);
        }
    }, [experienceParagraphsRef])

    return (
        <div name="experience" className={`w-full flex flex-col items-center justify-center pb-10 transition-all h-screen`}>
            <div className='container mx-auto px-4 rounded-xl py-4 divRef mt-10 md:mt-0 flex flex-col items-center justify-center max-w-4xl'>
                <div className='w-full flex items-start'>
                    <h1 className='font-Bebas w-full text-center text-red-600 text-6xl md:text-start lgpy-2.5 py-0' id="skill-text">MY EXPERIENCE<span className='font-Source'></span></h1>
                </div>
                <div className="flex w-full justify-center items-center font-RobotoCondensed">
                    <div className="flex flex-col md:flex-row h-full md:gap-4 justify-center items-center md:items-start w-full max-w-3xl">
                        <div className="flex md:flex-col text-xl font-thin md:w-1/5">
                            {experienceData.length > 0 &&
                                experienceData.map((project: any, index: number) => (
                                    <div
                                        key={'experienceProject' + index} onClick={() => resetAndSetExperienceIndex(index)}
                                        className={"cursor-pointer duration-300 px-3 py-2 border-b-2 md:border-b-0 md:border-r-2 " + (experienceIndex == index ? "bg-neutral-200 dark:bg-neutral-900 border-red-500" : "border-neutral-300 dark:border-neutral-800")}>
                                        <p className='duration-200 text-black dark:text-white'>{project.customer}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="h-full font-RobotoCondensed w-full md:w-4/5 paragraph-start-position" id='experience-paragraph'>
                            <p className="text-2xl md:text-3xl font-semibold text-red-600 pt-1 md:pt-0 duration-200">{experienceData[experienceIndex]?.role}<span className="text-black dark:text-white duration-200"> <span className='text-3xl text-black dark:text-white duration-200'>@</span>{experienceData[experienceIndex]?.company}</span></p>
                            <div>
                                <p className="text-lg md:py-1 text-black dark:text-white duration-200 pb-1 md:pb-2">{experienceData[experienceIndex]?.from} - {experienceData[experienceIndex]?.to.length > 0 ? experienceData[experienceIndex]?.to : 'Present'}</p>
                                <div className='flex gap-1.5'>
                                    {experienceData[experienceIndex]?.technologies.map((technology, index) =>
                                        <div key={'technologyExperience' + index} className="bg-neutral-200 dark:bg-neutral-900 px-2.5 py-0.5 rounded-xl duration-300"><p className='text-black dark:text-white duration-200'>{technology}</p></div>
                                    )}
                                </div>
                                <div>
                                    <Markdown className="prose prose-lg prose-li:marker:text-red-600 prose-neutral dark:prose-invert prose-strong:text-red-600">
                                        {experienceData[experienceIndex]?.experience}
                                    </Markdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;