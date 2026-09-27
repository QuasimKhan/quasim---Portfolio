import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";

const capabilities = [
    "Websites",
    "Web applications",
    "Mobile applications",
    "Custom digital products",
];

export function About() {
    return (
        <section id="about" className="py-[88px] sm:py-28 lg:py-36">
            <Container>
                <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                    {/* Label */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                            About
                        </p>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-muted">
                            A developer focused on turning ideas into useful
                            digital experiences.
                        </p>
                    </div>

                    {/* Main content */}
                    <div>
                        <h2 className="max-w-4xl font-display text-4xl leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
                            I work with people who have something they want to
                            build.
                        </h2>

                        <div className="mt-8 max-w-2xl space-y-5 text-base leading-7 text-muted">
                            <p>
                                I'm a full-stack developer who enjoys taking an
                                idea from an early conversation to a finished
                                digital product.
                            </p>

                            <p>
                                That could mean creating a website for a
                                professional, building an application for a
                                business, developing a mobile experience, or
                                helping turn an early product idea into
                                something people can actually use.
                            </p>

                            <p>
                                My focus is simple: understand what needs to be
                                achieved, build it thoughtfully, and make the
                                final result feel clear, professional, and
                                useful.
                            </p>
                        </div>

                        {/* Capabilities */}
                        <div className="mt-10 grid gap-x-8 gap-y-3 border-t border-border pt-7 sm:grid-cols-2">
                            {capabilities.map((capability) => (
                                <div
                                    key={capability}
                                    className="flex items-center gap-3 text-sm text-foreground"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    {capability}
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                            Have something in mind?
                            <ArrowUpRight
                                size={16}
                                strokeWidth={1.7}
                                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
