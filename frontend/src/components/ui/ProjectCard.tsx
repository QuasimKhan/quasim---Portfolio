import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group border-t border-border pt-6">
            {/* Top row */}
            <div className="flex items-start justify-between gap-6">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        {project.number}
                    </p>

                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-muted">
                        {project.category}
                    </p>
                </div>

                <a
                    href={project.liveUrl ?? "#"}
                    target={project.liveUrl ? "_blank" : undefined}
                    rel={project.liveUrl ? "noreferrer" : undefined}
                    aria-label={`View ${project.title}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
                >
                    <ArrowUpRight
                        size={17}
                        strokeWidth={1.7}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                </a>
            </div>

            {/* Visual */}
            <div className="mt-7 aspect-video overflow-hidden rounded-2xl border border-border bg-[#ebe9e3]">
                <div className="flex h-full items-center justify-center p-8 transition-transform duration-500 group-hover:scale-[1.015]">
                    <div className="w-full max-w-lg overflow-hidden rounded-lg border border-[#d7d4cc] bg-white shadow-[0_18px_45px_rgba(23,23,23,0.08)]">
                        <div className="flex h-7 items-center gap-1.5 border-b border-border px-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#d6d3cb]" />
                            <span className="h-1.5 w-1.5 rounded-full bg-[#d6d3cb]" />
                            <span className="h-1.5 w-1.5 rounded-full bg-[#d6d3cb]" />
                        </div>

                        <div className="grid grid-cols-[0.8fr_1.2fr] gap-4 p-5">
                            <div>
                                <div className="h-2 w-16 rounded-full bg-[#dcd9d1]" />
                                <div className="mt-3 h-2 w-24 rounded-full bg-[#ebe9e3]" />
                                <div className="mt-2 h-2 w-20 rounded-full bg-[#ebe9e3]" />

                                <div className="mt-7 h-16 rounded-md bg-background" />
                            </div>

                            <div className="rounded-md bg-background p-4">
                                <div className="h-2 w-20 rounded-full bg-[#dcd9d1]" />

                                <div className="mt-4 grid grid-cols-2 gap-2">
                                    <div className="h-12 rounded-md bg-white" />
                                    <div className="h-12 rounded-md bg-accent" />
                                    <div className="h-12 rounded-md bg-white" />
                                    <div className="h-12 rounded-md bg-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mt-7 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                    <h3 className="font-display text-3xl tracking-tight sm:text-4xl">
                        {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted">
                        {project.description}
                    </p>
                </div>

                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                        What I built
                    </p>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#454540]">
                        {project.built}
                    </p>

                    {/* Technology is deliberately secondary */}
                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-border px-3 py-1.5 text-[11px] text-muted"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
