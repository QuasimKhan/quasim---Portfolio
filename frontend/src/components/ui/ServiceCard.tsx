import { ArrowUpRight } from "lucide-react";
import type { Service } from "../../data/services";

interface ServiceCardProps {
    service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
    const Icon = service.icon;

    return (
        <article className="group relative border-t border-border py-8 sm:py-10">
            <div className="grid gap-7 lg:grid-cols-[80px_1fr_auto] lg:items-start lg:gap-10">
                {/* Number */}
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {service.number}
                </p>

                {/* Main content */}
                <div>
                    <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-accent transition-colors duration-200 group-hover:border-accent">
                            <Icon size={18} strokeWidth={1.5} />
                        </div>

                        <h3 className="font-display text-3xl tracking-tight sm:text-4xl">
                            {service.title}
                        </h3>
                    </div>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                        {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {service.examples.map((example) => (
                            <span
                                key={example}
                                className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
                            >
                                {example}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Arrow */}
                <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-white lg:flex">
                    <ArrowUpRight
                        size={17}
                        strokeWidth={1.6}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                </div>
            </div>
        </article>
    );
}
