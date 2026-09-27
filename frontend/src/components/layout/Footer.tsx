import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { site, whatsappMessage, whatsappUrl } from "../../data/site";

const footerLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export function Footer() {
    return (
        <footer className="bg-foreground text-white">
            <Container>
                <div className="border-t border-white/10 py-10">
                    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                        {/* Brand */}
                        <div>
                            <a
                                href="#home"
                                aria-label="Quasim — Home"
                                className="group inline-flex items-center font-display text-3xl font-medium tracking-[-0.045em]"
                            >
                                Quas
                                <span className="relative inline-block">
                                    <span>ı</span>

                                    <span
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-[0.04em] h-[0.24em] w-[0.24em] -translate-x-1/2 rounded-full bg-accent transition-transform duration-200 group-hover:scale-110"
                                    />
                                </span>
                                m
                            </a>

                            <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
                                Building thoughtful digital experiences for
                                people, businesses, and organizations.
                            </p>
                        </div>

                        {/* Navigation */}
                        <nav aria-label="Footer navigation">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                                Navigate
                            </p>

                            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                                {footerLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="text-sm text-white/60 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </nav>

                        {/* Contact */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                                Get in touch
                            </p>

                            <div className="mt-4 flex flex-col gap-3">
                                <a
                                    href={`${whatsappUrl}?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                                >
                                    <MessageCircle
                                        size={15}
                                        strokeWidth={1.7}
                                    />
                                    WhatsApp
                                    <ArrowUpRight
                                        size={13}
                                        strokeWidth={1.7}
                                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>

                                <a
                                    href={`mailto:${site.contact.email}`}
                                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                                >
                                    <Mail size={15} strokeWidth={1.7} />
                                    Email
                                    <ArrowUpRight
                                        size={13}
                                        strokeWidth={1.7}
                                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © {new Date().getFullYear()} Quasim. All rights
                            reserved.
                        </p>

                        <p>Websites · Web Apps · Mobile Apps</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
