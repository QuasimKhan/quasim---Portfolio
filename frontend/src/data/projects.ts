export interface Project {
    number: string;
    title: string;
    category: string;
    description: string;
    built: string;
    technologies: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        number: "01",
        title: "Bunchly",
        category: "SaaS · Web Application",
        description:
            "A platform for creating and managing personalized digital profiles and links.",
        built:
            "A complete product experience with user accounts, dashboards, content management, and payment functionality.",
        technologies: ["React", "Node.js", "MongoDB", "Razorpay"],
        featured: true,
    },

    {
        number: "02",
        title: "Al Falah Art",
        category: "Business Website · Web Application",
        description:
            "A digital platform for a printing business to showcase its services and manage its online operations.",
        built:
            "A responsive business experience with product and service presentation, administration, and customer-oriented workflows.",
        technologies: ["React", "Node.js", "MongoDB"],
        featured: true,
    },

    {
        number: "03",
        title: "AI Productivity Hub",
        category: "AI · Web Application",
        description:
            "A productivity platform designed to help users create and manage useful digital content.",
        built:
            "A product architecture combining AI-powered functionality with a modern web interface and structured backend services.",
        technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
        featured: true,
    },
];