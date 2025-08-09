interface WorkInformation {
  imageSrc: string;
  title: string;
  description: string;
  role: string;
  from: string;
  to?: string;
}

const WORK_CONTENT: WorkInformation[] = [
  {
    imageSrc: "/images/humans.jpeg",
    title: "Humans.tech",
    role: "Backend engineer",
    description: "Maintained high-performance backend services using a TypeScript stack and AWS cloud infrastructure. Led feature deployments and critical bug fixes, achieving up to a 5x improvement in API performance.",
    from: "2025",
  },
  {
    imageSrc: "/images/sinnefo.png",
    title: "Sinnefo",
    role: "Frontend/Mobile developer",
    description: "Developed mobile solutions using React Native and Expo. Maintained existing projects built with Next.js and Vite, leveraging React for development.",
    from: "2024",
    to: "2025"
  },
  {
    imageSrc: "/images/reply.webp",
    title: "Reply (Bit SpA)",
    role: "Backend developer",
    description: "Collaborated with a European team to develop and deploy highly scalable, microservice applications that handled millions of daily requests using Spring, Kafka, Redis, SQL/NoSQL databases, S3, and various other AWS services.",
    from: "2023",
    to: "2024"
  }
];

export {type WorkInformation, WORK_CONTENT};