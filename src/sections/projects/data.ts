export interface ProjectProps {
  title: string;
  desc: string;
  tools: string[];
  url?: string;
  githubUrl: string;
}

export const projects: Array<ProjectProps> = [
  {
    title: "Geo-Map",
    desc: "A path-finder visualization algorithm which finds and animates the shortest path between two points on a grid map. Used: React js.",
    tools: ["React", "Javascript"],
    githubUrl: "https://github.com/geob70/geoMap",
    url: "https://ecstatic-benz-8d2eab.netlify.app",
  },
  {
    title: "Shopping",
    desc: "GiftHub is an e-commerce site, that was created to enable customers purchase gift items for various occasions and to allow them customise the print on them. This website serves as a link between the customer and the retailer, whilst providing a hassle free experience.",
    tools: ["Vue", "Tailwind", "Node.js", "Typescript"],
    githubUrl: "https://github.com/geob70/joyce",
  },
  {
    title: "Geo Space",
    desc: " A web application that help maintain daily task within a team.",
    tools: [
      "React",
      "Javascript",
      "Node.js (Adonis)",
      "PostgresSql",
      "Postman",
    ],
    githubUrl: "https://github.com/geob70/geo-space-web",
  },
  {
    title: "The Maze",
    desc: "A simple web application multiplayer game that allows to characters (the runner and chaser) run around on the screen.",
    tools: ["Vue", "Node.js", "Web socket", "Javascript"],
    githubUrl: "https://github.com/geob70/TheMaze-client",
  },
  {
    title: "Data structure Implementation",
    desc: "Implement various data structures to help deepen my understand in data structures.",
    tools: ["Python"],
    githubUrl: "https://github.com/geob70/Data-Structures",
  },
  {
    title: "Bykugan",
    desc: "A desktop search engine application that scans through any uploaded document and creates a Trie object which helps during searching.",
    tools: ["React", "Electron", "Javascript"],
    githubUrl: "https://github.com/geob70/Byakugan",
  },
];
