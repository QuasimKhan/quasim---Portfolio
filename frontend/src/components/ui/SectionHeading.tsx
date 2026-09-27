interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    description?: string;
}

export function SectionHeading({
    eyebrow,
    title,
    description,
}: SectionHeadingProps) {
    return (
        <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {eyebrow}
            </p>

            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
                {title}
            </h2>

            {description && (
                <p className="mt-6 max-w-xl text-base leading-7 text-muted">
                    {description}
                </p>
            )}
        </div>
    );
}
