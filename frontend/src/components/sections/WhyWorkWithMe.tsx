import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "../ui/Container";

const reasons = [
    {
        title: "Understand before building",
        description:
            "I take time to understand your idea, goals, audience, and requirements before deciding what needs to be built.",
    },
    {
        title: "Direct communication",
        description:
            "You work directly with the person building your product, making communication simpler and keeping decisions clear.",
    },
    {
        title: "Built for people",
        description:
            "The product should not only work technically. It should be clear, responsive, practical, and easy for people to use.",
    },
    {
        title: "Clear throughout the project",
        description:
            "You stay informed about what is being built, what comes next, and where your project stands throughout the process.",
    },
];

export function WhyWorkWithMe() {
    return (
        <section id="why-me" className="py-22 sm:py-28 lg:py-36">
            <Container>
                <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                    {/* Introduction */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                            Why Work With Me
                        </p>

                        <h2 className="mt-5 max-w-lg font-display text-4xl leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
                            More than just someone who writes the code.
                        </h2>

                        <p className="mt-6 max-w-md text-base leading-7 text-muted">
                            A successful project needs more than technical
                            implementation. It needs communication,
                            understanding, attention to detail, and a clear
                            focus on the people who will use it.
                        </p>

                        <a
                            href="#contact"
                            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                            Let's discuss your idea
                            <ArrowUpRight
                                size={16}
                                strokeWidth={1.7}
                                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                    </div>

                    {/* Reasons */}
                    <div className="border-t border-border">
                        {reasons.map((reason, index) => (
                            <div
                                key={reason.title}
                                className="grid gap-5 border-b border-border py-8 sm:grid-cols-[40px_1fr] sm:py-10"
                            >
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white">
                                    <Check size={14} strokeWidth={2} />
                                </div>

                                <div>
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-xs font-medium text-muted/60">
                                            0{index + 1}
                                        </span>

                                        <h3 className="font-display text-2xl tracking-[-0.02em] text-foreground sm:text-3xl">
                                            {reason.title}
                                        </h3>
                                    </div>

                                    <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
