import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const projects = [
    {
        number: "01",
        title: "Bunchly",
        category: "Web Application",
        description:
            "A platform for creating and managing a personalized digital presence, with tools designed around creators and professionals.",
        tags: ["Platform", "Dashboard", "Payments"],
        href: "#",
    },
    {
        number: "02",
        title: "Al Falah Art",
        category: "Business Website",
        description:
            "A digital presence for a printing and design business, making its services easier to showcase and helping customers get in touch.",
        tags: ["Business", "Services", "Admin"],
        href: "#",
    },
    {
        number: "03",
        title: "AI Productivity Hub",
        category: "Digital Product",
        description:
            "A productivity platform bringing useful AI-powered tools together in one place for students and everyday users.",
        tags: ["AI", "Productivity", "SaaS"],
        href: "#",
    },
];

export function SelectedWork() {
    return (
        <section
            id="work"
            className="border-t border-border py-22 sm:py-28 lg:py-36"
        >
            <Container>
                <SectionHeading
                    eyebrow="Selected Work"
                    title="A few things I've built."
                    description="Different projects, different needs — each one shaped around the people and purpose behind it."
                />

                <div className="mt-16 sm:mt-20">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group border-t border-border py-10 sm:py-12 lg:py-16"
                        >
                            <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-16">
                                {/* Project visual */}
                                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
                                    <div className="aspect-16/10 overflow-hidden">
                                        <div className="relative flex h-full items-center justify-center p-6 sm:p-10">
                                            {/* Temporary project preview */}
                                            <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-background shadow-[0_20px_50px_rgba(23,23,23,0.08)] transition-transform duration-500 group-hover:scale-[1.015]">
                                                {/* Browser bar */}
                                                <div className="flex h-9 items-center gap-1.5 border-b border-border px-3">
                                                    <span className="h-2 w-2 rounded-full bg-border" />
                                                    <span className="h-2 w-2 rounded-full bg-border" />
                                                    <span className="h-2 w-2 rounded-full bg-border" />
                                                </div>

                                                {/* Preview */}
                                                <div className="grid min-h-47.5 grid-cols-[0.7fr_1.3fr] sm:min-h-62.5">
                                                    <div className="border-r border-border bg-surface p-4 sm:p-6">
                                                        <div className="h-2 w-14 rounded-full bg-border" />

                                                        <div className="mt-8 space-y-2">
                                                            <div className="h-2 w-full rounded-full bg-border/60" />
                                                            <div className="h-2 w-4/5 rounded-full bg-border/60" />
                                                            <div className="h-2 w-3/5 rounded-full bg-border/60" />
                                                        </div>

                                                        <div className="mt-8 h-8 w-20 rounded-lg bg-accent" />
                                                    </div>

                                                    <div className="p-4 sm:p-6">
                                                        <div className="flex items-center justify-between">
                                                            <div className="h-3 w-24 rounded-full bg-border" />

                                                            <div className="h-6 w-6 rounded-full bg-surface" />
                                                        </div>

                                                        <div className="mt-6 grid grid-cols-2 gap-3">
                                                            <div className="h-20 rounded-lg border border-border bg-white sm:h-28" />
                                                            <div className="h-20 rounded-lg bg-accent/90 sm:h-28" />
                                                        </div>

                                                        <div className="mt-3 h-10 rounded-lg border border-border bg-surface" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Project number */}
                                            <span className="absolute right-5 top-5 rounded-full border border-border bg-background/90 px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] text-muted backdrop-blur-sm">
                                                {project.number}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Project information */}
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                                        {project.category}
                                    </p>

                                    <h3 className="mt-4 font-display text-4xl tracking-[-0.03em] text-foreground sm:text-5xl">
                                        {project.title}
                                    </h3>

                                    <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
                                        {project.description}
                                    </p>

                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.href}
                                        className="group/link mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                                    >
                                        View project
                                        <ArrowUpRight
                                            size={16}
                                            strokeWidth={1.7}
                                            className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                                        />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* More work */}
                <div className="border-t border-border pt-8 text-center">
                    <p className="text-sm text-muted">
                        More projects and case studies coming soon.
                    </p>
                </div>
            </Container>
        </section>
    );
}
