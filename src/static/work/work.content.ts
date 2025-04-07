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
    imageSrc: "/images/sinnefo.png",
    title: "Sinnefo",
    role: "Frontend/Mobile developer",
    description: "Developed mobile solutions using React Native and Expo. Maintained existing projects built with Next.js and Vite, leveraging React for development.",
    from: "2024",
  },
  {
    imageSrc: "/images/reply.webp",
    title: "Reply (Bit SpA)",
    role: "Backend developer",
    description: "Collaborated with a European team to develop and deploy highly scalable multiservice applications using Spring, Kafka, Redis, SQL/NoSQL databases, S3, and other various AWS services.",
    from: "2023",
    to: "2024"
  }
]

export {type WorkInformation, WORK_CONTENT};