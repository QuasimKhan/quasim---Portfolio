import {
    BriefcaseBusiness,
    Globe,
    Layers3,
    Smartphone,
    Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
    number: string;
    icon: LucideIcon;
    title: string;
    description: string;
    examples: string[];
}

export const services: Service[] = [
    {
        number: "01",
        icon: Globe,
        title: "Websites",
        description:
            "Professional websites that present you, your work, or your business clearly and make a strong impression across every screen.",
        examples: [
            "Business websites",
            "Professional portfolios",
            "Personal brands",
            "Landing pages",
            "Organization websites",
        ],
    },
    {
        number: "02",
        icon: Layers3,
        title: "Web Applications",
        description:
            "Custom web applications built around the way you work, the people you serve, and the problem you need to solve.",
        examples: [
            "Management systems",
            "Dashboards",
            "Customer portals",
            "Booking platforms",
            "Online platforms",
        ],
    },
    {
        number: "03",
        icon: Smartphone,
        title: "Mobile Applications",
        description:
            "Mobile applications that turn an idea or service into a useful experience people can access wherever they are.",
        examples: [
            "Business apps",
            "Customer apps",
            "Service platforms",
            "Community apps",
            "Custom mobile products",
        ],
    },
    {
        number: "04",
        icon: BriefcaseBusiness,
        title: "Custom Digital Products",
        description:
            "Have something that doesn't fit into a standard website or app? We can shape the idea into a practical digital product.",
        examples: [
            "SaaS products",
            "Internal tools",
            "Digital platforms",
            "AI-powered products",
            "Custom solutions",
        ],
    },
    {
        number: "05",
        icon: Wrench,
        title: "Improve an Existing Product",
        description:
            "Already have a website or application? I can redesign, extend, improve, or rebuild it to better serve your users.",
        examples: [
            "Redesigns",
            "New features",
            "Performance improvements",
            "Integrations",
            "Ongoing improvements",
        ],
    },
];