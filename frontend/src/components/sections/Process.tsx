import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const steps = [
    {
        number: "01",
        title: "Tell me about it",
        description:
            "Share your idea, business, problem, or simply what you want to achieve. You don't need to have everything figured out before reaching out.",
    },
    {
        number: "02",
        title: "We figure it out",
        description:
            "We discuss your goals, audience, requirements, possibilities, and the right approach for your project.",
    },
    {
        number: "03",
        title: "I build it",
        description:
            "Once we agree on the direction, I turn the plan into a polished digital experience designed around your needs.",
    },
    {
        number: "04",
        title: "You take it forward",
        description:
            "After the project is ready, you receive the finished product and the support or guidance needed to move forward.",
    },
];

export function Process() {
    return (
        <section
            id="process"
            className="border-y border-border bg-surface py-22 sm:py-28 lg:py-36"
        >
            <Container>
                <SectionHeading
                    eyebrow="How It Works"
                    title="From a rough idea to something real."
                    description="The process stays simple. You bring the idea, and we work through the details together."
                />

                <div className="mt-16 sm:mt-20">
                    <div className="grid border-t border-border md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <article
                                key={step.number}
                                className="group relative border-b border-border py-8 md:border-r md:px-7 md:py-10 lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                            >
                                {/* Number */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold tracking-[0.16em] text-accent">
                                        {step.number}
                                    </span>

                                    {index < steps.length - 1 && (
                                        <ArrowRight
                                            size={16}
                                            strokeWidth={1.5}
                                            className="text-muted/50 transition-transform duration-200 group-hover:translate-x-1 lg:block"
                                        />
                                    )}
                                </div>

                                {/* Content */}
                                <h3 className="mt-12 font-display text-2xl tracking-[-0.02em] text-foreground sm:text-3xl">
                                    {step.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-muted">
                                    {step.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Bottom note */}
                <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xl text-sm leading-6 text-muted">
                        Not sure exactly what you need yet? That's okay. We can
                        start with a conversation and work out the right
                        direction together.
                    </p>

                    <a
                        href="#contact"
                        className="shrink-0 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
                    >
                        Start a conversation
                    </a>
                </div>
            </Container>
        </section>
    );
}
