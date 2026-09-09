export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

/**
 * Swap these out for your real projects whenever you like —
 * this is the only file you need to touch.
 */
export const projects: Project[] = [
  {
    title: "this website",
    description:
      "A little scrapbook corner of the internet, built with Next.js — no particular purpose, just a place to exist.",
    tags: ["Next.js", "TypeScript", "Design"],
    link: "https://github.com/vedikabhoite/my-corner-",
  },
  {
    title: "3D CARGO OPTIMIZER",
    description:
      " Worked on this in vietnam at van lang university. Basically makes lives of the people who have to load and unload loads of cargo. something which actually has an impact!",
    tags: ["nextjs", "API"],
    link: "https://github.com/vedikabhoite/CargoOpt3D",
  },
  {
    title: "Smart Academic Progess & Grievance Redressal System using Agentic Ai ",
    description:
      " All the queries or problems related to marks, attendance or projects will be addressed",
    tags: ["Python", "Data"],
  
  },
];
