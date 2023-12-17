export type ProjectModel = {
    linkUrl : string;
    githubUrl : string;
    postImage : {
        name : string;
    };
    projectDescription : string;
    technologies : Array<String>;
    title : string;
    featured: boolean;
}