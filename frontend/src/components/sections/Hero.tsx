import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";

export function Hero() {
    return (
        <section id="home" className="overflow-hidden">
            <Container>
                <div className="grid min-h-[calc(100svh-5rem)] items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-24">
                    {/* Hero content */}
                    <div>
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-accent" />

                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                                Full-Stack Developer · Freelance
                            </p>
                        </div>

                        <h1 className="max-w-4xl font-display text-[2.9rem] leading-[0.94] tracking-[-0.045em] text-foreground min-[380px]:text-[3.25rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                            You bring the idea.
                            <br />
                            <span className="text-accent">I build it.</span>
                        </h1>

                        <p className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg">
                            I build professional websites, web applications,
                            mobile applications, and custom digital products for
                            individuals, professionals, businesses, and
                            organizations.
                        </p>

                        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover"
                            >
                                Start a Project
                                <ArrowUpRight
                                    size={17}
                                    strokeWidth={1.8}
                                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>

                            <a
                                href="#work"
                                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground"
                            >
                                View My Work
                            </a>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
                            <span>Websites</span>

                            <span
                                aria-hidden="true"
                                className="h-1 w-1 rounded-full bg-border"
                            />

                            <span>Web Applications</span>

                            <span
                                aria-hidden="true"
                                className="h-1 w-1 rounded-full bg-border"
                            />

                            <span>Mobile Applications</span>
                        </div>
                    </div>

                    {/* Hero visual */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-[0_24px_80px_rgba(23,23,23,0.08)] sm:aspect-[4/3]">
                            <div className="h-full overflow-hidden rounded-xl border border-border bg-background">
                                {/* Browser header */}
                                <div className="flex h-10 items-center justify-between border-b border-border px-4">
                                    <div className="flex items-center gap-1.5">
                                        <span className="h-2.5 w-2.5 rounded-full bg-border" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-border" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-border" />
                                    </div>

                                    <span className="text-[9px] uppercase tracking-[0.15em] text-muted/70">
                                        Your Digital Product
                                    </span>
                                </div>

                                {/* Product preview */}
                                <div className="flex h-[calc(100%-2.5rem)] items-center justify-center p-7 sm:p-10">
                                    <div className="w-full max-w-sm">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                                            From idea to product
                                        </p>

                                        <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-0.03em] text-foreground sm:text-5xl">
                                            Built around
                                            <br />
                                            your needs.
                                        </h2>

                                        <p className="mt-5 max-w-xs text-xs leading-5 text-muted sm:text-sm">
                                            A thoughtful digital experience
                                            designed to solve a real problem and
                                            serve real people.
                                        </p>

                                        <div className="mt-8 grid grid-cols-2 gap-3">
                                            <div className="h-20 rounded-xl border border-border bg-white p-3">
                                                <div className="h-2 w-12 rounded-full bg-border" />

                                                <div className="mt-3 h-2 w-20 rounded-full bg-border/60" />

                                                <div className="mt-2 h-2 w-14 rounded-full bg-border/60" />
                                            </div>

                                            <div className="h-20 rounded-xl bg-accent p-3">
                                                <div className="h-2 w-10 rounded-full bg-white/40" />

                                                <div className="mt-3 h-2 w-16 rounded-full bg-white/20" />

                                                <div className="mt-2 h-2 w-11 rounded-full bg-white/20" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating card */}
                        <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-white px-5 py-4 shadow-[0_12px_35px_rgba(23,23,23,0.08)] sm:block">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                                What I build
                            </p>

                            <p className="mt-1.5 text-sm font-medium text-foreground">
                                Websites · Apps · Digital Products
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scroll cue */}
                <div className="hidden items-center justify-center gap-2 pb-8 text-xs uppercase tracking-[0.16em] text-muted/60 lg:flex">
                    <ArrowDown size={14} strokeWidth={1.5} />
                    Scroll to explore
                </div>
            </Container>
        </section>
    );
}
