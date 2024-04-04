import { Experience } from "../../models/experience.model";

const workExperiences : Array<Experience> = [
    {
        role: "Backend Developer",
        company: "Blue Reply",
        from: "August 2023",
        to: "",
        technologies: ["Java", "Spring Webflux", "Aws", "Kafka", "MySQL", "MongoDB"],
        customer: "Blue Reply",
        experience:`
- Worked with multiple teams of 10+ individuals to define requirements, 
architecture, and deliver high quality production code.
- Implemented event-driven software solutions using Spring and Kafka 
to ensure asynchronous processing and improve request handling in critical sections.
- Integrated MySQL and MongoDB databases and AWS products (S3, SQS, and Lambda Functions) 
directly with Spring, reducing the overall project complexity.
- Leveraged Spring DataFlow to create vast and efficient data pipelines, 
handling over 1GB of data per minute.
- Designed and implemented multiple Spring applications with a microservice architecture 
that processed millions of daily requests and delivered a smooth user experience.
- Written various documentations, both in English and Italian, 
to facilitate the use and installation of the development environment.
`,
    companyUrl: "",
    customerUrl: "",
    projectUrl: ""
    },
]

export default workExperiences