import { ProjectModel } from "../../models/project.model";

export const projects : Array<ProjectModel> = [
    {
        linkUrl : "https://ikiwq-blog.vercel.app",
        githubUrl : "https://github.com/ikiwq/ikiwq-blog-v1",
        postImage : {
            name : "ikiwq-blog.png",
        },
        projectDescription : `This the second iteration of my blog, the Ikiwq-Blog! I actually tried NextJS 14 this time. I was very satisfied with the end result, a very minimalistic but working blog. The user can read articles and filter them by a category. The API was written in Go from scratch with the standard HTTP library.`,
        technologies : ["React", "NextJS", "Tailwind", "Go", "MySQL"],
        title : "The ikiwq blog",
        featured: true
    },
    {
        linkUrl : "",
        githubUrl : "https://github.com/ikiwq/pixelexa-frontend",
        postImage : {
            name : "pixelexa.jpg",
        },
        projectDescription : `Pixelexa is an open-source online newspaper inspired by the Washington Post. It was meant to give the users an opportunity to publish articles of all kinds. The user can interact with the articles: read them, star them, comment on them, and filter them by a specific text or by a category.`,
        technologies : ["Angular", "Flask", "MySQL", "JWTs"],
        title : "Pixelexa",
        featured: true
    },
    {
        linkUrl : "",
        githubUrl : "https://github.com/ikiwq/new-annex-frontend",
        postImage : {
            name : "annex.png",
        },
        projectDescription : `Annex is a social network inspired by Facebook and Twitter. This project was meant to give users an open-source social network. The user can register, log in, modify their profile, publish new posts and also interact with them.`,
        technologies : ["Angular", "Spring", "Hibernate", "MySQL", "JWTs"],
        title : "Annex",
        featured: false
    },
    {
        linkUrl : "",
        githubUrl : "https://github.com/ikiwq/KromiSDL",
        postImage : {
            name : "kromisdl.jpg",
        },
        projectDescription : `While I was leaning C++, I was coding a 2D game engine. I used a lot of C++ features to make a flexible, perfomant and customizable game engine with collisions and physics without having to download big tools such as Unity or Unreal Engine.`,
        technologies : ["C++", "OOP", "SDL"],
        title : "KromiSDL",
        featured: false
    },
    {
        linkUrl : "",
        githubUrl : "https://github.com/ikiwq/PathfindingVisualizer",
        postImage : {
            name : "pathfindingvisualizer.png",
        },
        projectDescription : `This is a simple pathfinding visualizer made with Python and the Pygame library. The user can choose between A* or Dijkstra algorithm to find a path between two nodes. The user can position the nodes and create/remove barriers.`,
        technologies : ["Python", "Pygame"],
        title : "Pathfinding Visualizer",
        featured: false
    },
    {
        linkUrl : "",
        githubUrl : "https://github.com/ikiwq/DinoAI",
        postImage : {
            name : "dinoai.jpg",
        },
        projectDescription : `This is a replica of the famous Chrome's dino game. I have implemented an AI that learns how to jump and play the game.`,
        technologies : ["Python", "NEAT"],
        title : "Dino AI",
        featured: false
    },
    {
        linkUrl : "",
        githubUrl : "https://github.com/ikiwq/ZephyrBackend",
        postImage : {
            name : "zephyr.jpg",
        },
        projectDescription : `Zephyr is a small - but yet very scalable - assistant built with AI. The AI is trained to recognize the context of the message sent by the user; for example, "hi" is associated with a greeting context. The developer can then write the functions to be executed once a certain context is identified.`,        
        technologies : ["Python", "Tensorflow", "Flask", "Angular"],
        title : "Zephyr",
        featured: false
    },
    {
        linkUrl : "",
        githubUrl : "https://github.com/ikiwq/SortingVisualizer",
        postImage : {
            name : "sortingvisualizer.jpg",
        },
        projectDescription : `This is a sorting visualizer built with Java and Swing. The user can choose between Bubble Sort and Insert algorithm and then visualize the sorting.`,        
        technologies : ["Java"],
        title : "Sorting Visualizer",
        featured: false
    },
    {
        linkUrl : "",
        githubUrl : "https://github.com/ikiwq/data-structures-cpp",
        postImage : {
            name : "datastructurescpp.jpg",
        },
        projectDescription : `To better understand how data structures work, I have decided to rewrite the STD library in C++.`,        
        technologies : ["C++"],
        title : "Data Structures",
        featured: false
    }
];

export default projects;