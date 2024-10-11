import { Experience } from "../../models/experience.model";

const workExperiences: Array<Experience> = [
  {
    role: "Backend Developer",
    company: "Blue Reply",
    from: "August 2023",
    to: "May 2024",
    technologies: [
      "Java",
      "Spring",
      "Aws",
      "Kafka",
      "MySQL",
      "MongoDB",
    ],
    customer: "Blue Reply",
    experience: `
- Worked with a team of 10+ individuals from Italy, Germany and USA to
define requirements, architecture, and deliver **high quality** production
**code** for multi-bilion dollar companies.
- Implemented event-driven software solutions using **Kafka** and **SQS** to
ensure **asynchronous processing** and improve request handling in critical
sections.
- Integrated **AWS** products (**S3**, **SQS**, and **Lambda Functions**) along with
**MySQL** and **MongoDB** databases directly into **Spring**, significantly
reducing overall project complexity.
- Leveraged **Spring DataFlow** to create vast and efficient data pipelines,
handling over 1GB of data per minute.
- Designed and implemented multiple backend applications within a
**microservice architecture** with **Redis**, efficiently processing millions of
daily requests, while maintaining both scalability and maintainability.
`,
    companyUrl: "",
    customerUrl: "",
    projectUrl: "",
  },
  {
    role: "Frontend Developer",
    company: "Sinnefo",
    from: "May 2024",
    to: "",
    technologies: ["Typescript", "React", "React Native"],
    customer: "Sinnefo",
    experience: `
- Collaborated with a team of frontend and backend developers to mantain
already existing projects using technologies such as React.
- Created mobile solutions using Expo and React Native.
`,
    companyUrl: "",
    customerUrl: "",
    projectUrl: "",
  },
];

export default workExperiences;
