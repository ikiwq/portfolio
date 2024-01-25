import { Experience } from "../../models/experience.model";

const workExperiences : Array<Experience> = [
    {
        role: "Backend Developer",
        company: "Blue Reply",
        from: "September 2023",
        to: "",
        technologies: ["Java", "Spring Webflux", "Aws", "Salesforce Services", "MySQL", "MongoDB"],
        customer: "Blue Reply",
        experience:`
- Worked with multiple teams of 10+ individuals to define requirements,
architecture and deliver high quality production code.
- Implemented event-driven software solutions using Spring and Kafka to
ensure asynchronous processing and improve request handling in critical
sections.
- Integrated MySQL and MongoDB databases and AWS products (S3, SQS
and Lambda Functions) directly with Spring, reducing the overall project
complexity.
- Leveraged Spring DataFlow to create vast and efficient data pipelines,
handling over one million lines of data in less than a minute and
exceeding the initial expectation of 10 minutes.
- Designed and implemented multiple Spring backends capable of
processing millions of daily requests, seamlessly communicating with the
frontend to deliver a smooth user experience.
- Written various documentations, both in English and Italian, to facilitate
the use and installation of the development environment.
`,
    companyUrl: "",
    customerUrl: "",
    projectUrl: ""
    }
]

export default workExperiences