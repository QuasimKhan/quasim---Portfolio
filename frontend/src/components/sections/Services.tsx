import {
    ArrowUpRight,
    BriefcaseBusiness,
    Globe2,
    LayoutDashboard,
    Smartphone,
    Wrench,
} from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const services = [
    {
        number: "01",
        icon: Globe2,
        title: "Websites",
        description:
            "Professional websites for businesses, professionals, organizations, personal brands, and other ideas that need a strong presence online.",
        examples: "Business · Portfolio · Organization · Landing Page",
    },
    {
        number: "02",
        icon: LayoutDashboard,
        title: "Web Applications",
        description:
            "Interactive platforms and custom web applications built around the way your users and business actually work.",
        examples: "Dashboards · Platforms · Portals · SaaS Products",
    },
    {
        number: "03",
        icon: Smartphone,
        title: "Mobile Applications",
        description:
            "Mobile experiences designed to make your product accessible and useful wherever your users are.",
        examples: "Business Apps · Customer Apps · Utility Apps",
    },
    {
        number: "04",
        icon: BriefcaseBusiness,
        title: "Custom Digital Products",
        description:
            "Have an idea that doesn't fit into a predefined category? We can shape the idea into a practical digital product.",
        examples: "New Ideas · Internal Tools · Platforms · MVPs",
    },
    {
        number: "05",
        icon: Wrench,
        title: "Improve an Existing Product",
        description:
            "Already have a website or application? I can help improve its experience, add functionality, or take it further.",
        examples: "Redesign · New Features · Improvements · Modernization",
    },
];

export function Services() {
    return (
        <section
            id="services"
            className="border-y border-border bg-surface py-[88px] sm:py-28 lg:py-36"
        >
            <Container>
                <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                    {/* Section introduction */}
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <SectionHeading
                            eyebrow="What I Build"
                            title="Digital products for real needs."
                            description="Whether you need a simple online presence or a complete digital product, the approach starts with understanding what you need to accomplish."
                        />

                        <a
                            href="#contact"
                            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                            Tell me what you're building
                            <ArrowUpRight
                                size={16}
                                strokeWidth={1.7}
                                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                    </div>

                    {/* Services */}
                    <div>
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <article
                                    key={service.number}
                                    className="group border-t border-border py-8 sm:py-10 lg:py-11"
                                >
                                    <div className="grid gap-6 sm:grid-cols-[56px_1fr]">
                                        {/* Number / icon */}
                                        <div className="flex items-start justify-between sm:block">
                                            <span className="text-xs font-semibold tracking-[0.14em] text-accent">
                                                {service.number}
                                            </span>

                                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-accent transition-all duration-200 group-hover:border-accent sm:mt-6">
                                                <Icon
                                                    size={18}
                                                    strokeWidth={1.5}
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="font-display text-3xl tracking-[-0.025em] text-foreground sm:text-4xl">
                                                {service.title}
                                            </h3>

                                            <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                                                {service.description}
                                            </p>

                                            <p className="mt-5 text-xs uppercase tracking-[0.12em] text-muted/70">
                                                {service.examples}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
