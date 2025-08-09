import {ReactNode} from "react";
import {ClassNameValue, twMerge} from "tailwind-merge";

interface CardProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}

const defaultClassName: ClassNameValue = `
  card bg-neutral-900/60
  group-hover:opacity-60
  hover:bg-neutral-900/70
  hover:opacity-100
  border-t border-neutral-800 
  rounded-xl p-4
  duration-200
  pointer-events-auto
`;

export default function Card({children, className}: CardProps){

  return (
    <div
      className={twMerge(defaultClassName, className)}
    >
      {children}
    </div>
  );
}