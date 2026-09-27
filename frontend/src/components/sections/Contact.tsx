import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { Container } from "../ui/Container";

import { site, whatsappUrl, whatsappMessage } from "../../data/site";

export function Contact() {
    return (
        <section
            id="contact"
            className="bg-foreground py-22 text-white sm:py-28 lg:py-36"
        >
            <Container>
                <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
                    {/* Main CTA */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                            Start a Project
                        </p>

                        <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                            Have an idea?
                            <br />
                            Let's talk about it.
                        </h2>

                        <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
                            You don't need a technical brief or a finished plan.
                            Tell me what you're trying to build, what you're
                            trying to solve, or simply what you have in mind.
                        </p>

                        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                            {/* WhatsApp */}
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover"
                            >
                                <MessageCircle size={17} strokeWidth={1.8} />
                                Chat on WhatsApp
                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.8}
                                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>

                            {/* Email */}
                            <a
                                href={`mailto:${site.contact.email}`}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/50"
                            >
                                <Mail size={17} strokeWidth={1.8} />
                                Send an Email
                            </a>
                        </div>
                    </div>

                    {/* Contact details */}
                    <div className="border-t border-white/10 lg:border-t-0">
                        <div className="lg:border-l lg:border-white/10 lg:pl-10">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                                Contact
                            </p>

                            <div className="mt-6 space-y-5">
                                {/* WhatsApp */}
                                <a
                                    href={`${whatsappUrl}?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group block"
                                >
                                    <span className="text-xs text-white/40">
                                        WhatsApp
                                    </span>

                                    <span className="mt-1 flex items-center gap-2 text-base text-white/85 transition-colors group-hover:text-white">
                                        {site.contact.whatsapp}
                                        <ArrowUpRight
                                            size={15}
                                            strokeWidth={1.7}
                                            className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                        />
                                    </span>
                                </a>

                                {/* Email */}
                                <a
                                    href={`mailto:${site.contact.email}`}
                                    className="group block"
                                >
                                    <span className="text-xs text-white/40">
                                        Email
                                    </span>

                                    <span className="mt-1 flex items-center gap-2 break-all text-base text-white/85 transition-colors group-hover:text-white">
                                        {site.contact.email}
                                        <ArrowUpRight
                                            size={15}
                                            strokeWidth={1.7}
                                            className="shrink-0 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                        />
                                    </span>
                                </a>
                            </div>

                            {/* Professional profiles */}
                            <div className="mt-10 border-t border-white/10 pt-7">
                                <p className="text-xs text-white/40">
                                    Professional profiles
                                </p>

                                <div className="mt-4 flex flex-wrap gap-3">
                                    {/* Replace # with your actual profile URLs */}
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/75 transition-colors hover:border-white/40 hover:text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill={"white"}
                                            role="img"
                                            aria-label="LinkedIn"
                                        >
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                        LinkedIn
                                    </a>

                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/75 transition-colors hover:border-white/40 hover:text-white"
                                    >
                                        Peerlist
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple closing line */}
                <div className="mt-16 border-t border-white/10 pt-6">
                    <p className="text-sm text-white/35">
                        Whether you have a clear requirement or just an idea,
                        you're welcome to reach out.
                    </p>
                </div>
            </Container>
        </section>
    );
}
