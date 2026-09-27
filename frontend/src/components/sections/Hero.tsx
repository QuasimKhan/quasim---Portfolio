import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";

export function Hero() {
    return (
        <section id="home" className="overflow-hidden">
            <Container>
                <div
                    className="
            grid
            items-center
            gap-12
            py-14
            sm:gap-14
            sm:py-20
            lg:min-h-[calc(100svh-5rem)]
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-16
            lg:py-20
            xl:gap-20
            xl:py-24
          "
                >
                    {/* Hero content */}
                    <div className="min-w-0">
                        {/* Eyebrow */}
                        <div className="mb-6 flex items-center gap-3 sm:mb-7">
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 shrink-0 rounded-full bg-accent"
                            />

                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted sm:text-xs sm:tracking-[0.18em]">
                                Full-Stack Developer · Freelance
                            </p>
                        </div>

                        {/* Main heading */}
                        <h1
                            className="
                max-w-4xl
                font-display
                text-[2.85rem]
                leading-[0.95]
                tracking-[-0.045em]
                text-foreground
                min-[380px]:text-[3.15rem]
                sm:text-6xl
                sm:leading-[0.94]
                lg:text-7xl
                xl:text-[5.5rem]
              "
                        >
                            You bring the idea.
                            <br />
                            <span className="text-accent">I build it.</span>
                        </h1>

                        {/* Description */}
                        <p
                            className="
                mt-7
                max-w-xl
                text-[15px]
                leading-7
                text-muted
                sm:mt-8
                sm:text-lg
                sm:leading-7
              "
                        >
                            I build professional websites, web applications,
                            mobile applications, and custom digital products for
                            individuals, professionals, businesses, and
                            organizations.
                        </p>

                        {/* CTAs */}
                        <div
                            className="
                mt-8
                flex
                flex-col
                gap-3
                sm:mt-10
                sm:flex-row
              "
                        >
                            <a
                                href="#contact"
                                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-accent
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-accent-hover
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-background
                  sm:min-h-0
                "
                            >
                                Start a Project
                                <ArrowUpRight
                                    size={17}
                                    strokeWidth={1.8}
                                    className="
                    transition-transform
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                                />
                            </a>

                            <a
                                href="#work"
                                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-foreground
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-foreground
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-background
                  sm:min-h-0
                "
                            >
                                View My Work
                            </a>
                        </div>

                        {/* Services */}
                        <div
                            className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-x-2
                gap-y-2
                text-sm
                text-muted
                sm:mt-10
                sm:gap-x-5
                sm:gap-y-3
              "
                        >
                            <span>Websites</span>

                            <span
                                aria-hidden="true"
                                className="h-1 w-1 shrink-0 rounded-full bg-border"
                            />

                            <span>Web Applications</span>

                            <span
                                aria-hidden="true"
                                className="h-1 w-1 shrink-0 rounded-full bg-border"
                            />

                            <span>Mobile Applications</span>
                        </div>
                    </div>

                    {/* Hero visual */}
                    <div className="relative mx-auto mt-2 w-full max-w-xl lg:mx-0 lg:mt-0 lg:max-w-2xl">
                        {/* Mobile visual */}
                        <div className="relative sm:hidden">
                            <div
                                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-white
                  p-3
                  shadow-[0_20px_60px_rgba(23,23,23,0.07)]
                "
                            >
                                <div className="rounded-xl border border-border bg-background p-6">
                                    {/* Mobile visual header */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-accent">
                                            Digital Product
                                        </span>

                                        <span
                                            aria-hidden="true"
                                            className="h-2 w-2 rounded-full bg-accent"
                                        />
                                    </div>

                                    {/* Main visual content */}
                                    <div className="mt-10">
                                        <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                                            From idea to product
                                        </p>

                                        <h2 className="mt-3 max-w-xs font-display text-[2.25rem] leading-[0.98] tracking-[-0.035em] text-foreground">
                                            Built around
                                            <br />
                                            your needs.
                                        </h2>

                                        <p className="mt-5 max-w-65 text-sm leading-6 text-muted">
                                            A thoughtful digital experience
                                            designed to solve a real problem and
                                            serve real people.
                                        </p>
                                    </div>

                                    {/* Visual cards */}
                                    <div className="mt-9 grid grid-cols-[1fr_0.7fr] gap-3">
                                        <div className="rounded-xl border border-border bg-white p-4">
                                            <div className="h-2 w-12 rounded-full bg-border" />

                                            <div className="mt-5 h-2 w-24 rounded-full bg-border/50" />

                                            <div className="mt-2 h-2 w-16 rounded-full bg-border/50" />

                                            <div className="mt-6 h-8 w-20 rounded-full border border-border" />
                                        </div>

                                        <div className="rounded-xl bg-accent p-4">
                                            <div className="h-2 w-10 rounded-full bg-white/40" />

                                            <div className="mt-5 h-14 rounded-lg bg-white/10" />

                                            <div className="mt-3 h-2 w-14 rounded-full bg-white/20" />
                                        </div>
                                    </div>

                                    {/* Mobile visual footer */}
                                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                                        <span className="text-[10px] uppercase tracking-[0.14em] text-muted">
                                            Websites
                                        </span>

                                        <span className="text-[10px] uppercase tracking-[0.14em] text-muted">
                                            Apps
                                        </span>

                                        <span className="text-[10px] uppercase tracking-[0.14em] text-muted">
                                            Products
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile floating label */}
                            <div
                                className="
                  absolute
                  -bottom-4
                  right-4
                  rounded-xl
                  border
                  border-border
                  bg-white
                  px-4
                  py-3
                  shadow-[0_10px_30px_rgba(23,23,23,0.07)]
                "
                            >
                                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
                                    What I build
                                </p>

                                <p className="mt-1 text-xs font-medium text-foreground">
                                    Websites · Apps · Products
                                </p>
                            </div>
                        </div>

                        {/* Desktop / tablet visual */}
                        <div className="relative hidden sm:block">
                            <div
                                className="
                  relative
                  aspect-4/3
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-white
                  p-3
                  shadow-[0_24px_80px_rgba(23,23,23,0.08)]
                "
                            >
                                <div className="h-full overflow-hidden rounded-xl border border-border bg-background">
                                    {/* Browser header */}
                                    <div className="flex h-10 items-center justify-between border-b border-border px-4">
                                        <div className="flex items-center gap-1.5">
                                            <span
                                                aria-hidden="true"
                                                className="h-2.5 w-2.5 rounded-full bg-border"
                                            />

                                            <span
                                                aria-hidden="true"
                                                className="h-2.5 w-2.5 rounded-full bg-border"
                                            />

                                            <span
                                                aria-hidden="true"
                                                className="h-2.5 w-2.5 rounded-full bg-border"
                                            />
                                        </div>

                                        <span className="text-[9px] uppercase tracking-[0.15em] text-muted/70">
                                            Your Digital Product
                                        </span>
                                    </div>

                                    {/* Product preview */}
                                    <div className="flex h-[calc(100%-2.5rem)] items-center justify-center p-8 lg:p-10">
                                        <div className="w-full max-w-sm">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                                                From idea to product
                                            </p>

                                            <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-0.03em] text-foreground lg:text-5xl">
                                                Built around
                                                <br />
                                                your needs.
                                            </h2>

                                            <p className="mt-5 max-w-xs text-sm leading-5 text-muted">
                                                A thoughtful digital experience
                                                designed to solve a real problem
                                                and serve real people.
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

                            {/* Desktop floating card */}
                            <div
                                className="
                  absolute
                  -bottom-5
                  -left-5
                  hidden
                  rounded-xl
                  border
                  border-border
                  bg-white
                  px-5
                  py-4
                  shadow-[0_12px_35px_rgba(23,23,23,0.08)]
                  md:block
                "
                            >
                                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                                    What I build
                                </p>

                                <p className="mt-1.5 text-sm font-medium text-foreground">
                                    Websites · Apps · Digital Products
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll cue */}
                <div
                    className="
            hidden
            items-center
            justify-center
            gap-2
            pb-8
            text-xs
            uppercase
            tracking-[0.16em]
            text-muted/60
            lg:flex
          "
                >
                    <ArrowDown size={14} strokeWidth={1.5} />
                    Scroll to explore
                </div>
            </Container>
        </section>
    );
}
