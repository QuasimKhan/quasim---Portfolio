import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";

const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    function closeMenu() {
        setIsOpen(false);
    }

    return (
        <header className="sticky top-0 z-50 border-b border-[#dedcd5]/80 bg-[#f7f5f0]/90 backdrop-blur-md">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={closeMenu}
                        aria-label="Quasim — Home"
                        className="group inline-flex items-center font-display text-[1.7rem] font-medium tracking-[-0.045em] text-foreground sm:text-[1.85rem]"
                    >
                        Quas
                        <span className="relative inline-block">
                            <span>ı</span>

                            <span
                                aria-hidden="true"
                                className="absolute left-1/2 top-2 h-[0.24em] w-[0.24em] -translate-x-1/2 rounded-full bg-accent transition-transform duration-200 group-hover:scale-110"
                            />
                        </span>
                        m
                    </a>

                    {/* Desktop navigation */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-[#6b6b66] transition-colors hover:text-[#171717]"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 rounded-full bg-[#6e2525] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#541c1c]"
                        >
                            Let's Talk
                            <ArrowUpRight
                                size={15}
                                strokeWidth={1.7}
                                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-label={
                            isOpen ? "Close navigation" : "Open navigation"
                        }
                        aria-expanded={isOpen}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dedcd5] text-[#171717] transition-colors hover:border-[#171717] md:hidden"
                    >
                        {isOpen ? (
                            <X size={19} strokeWidth={1.7} />
                        ) : (
                            <Menu size={19} strokeWidth={1.7} />
                        )}
                    </button>
                </div>
            </Container>

            {/* Mobile menu */}
            <div
                className={`absolute left-0 right-0 top-full border-b border-border bg-background transition-all duration-200 md:hidden ${
                    isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                }`}
            >
                <Container>
                    <nav className="flex flex-col py-6">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="flex items-center justify-between border-b border-[#dedcd5] py-5 font-display text-2xl tracking-[-0.02em] text-[#171717]"
                            >
                                <span>{link.label}</span>

                                <span className="text-xs text-[#aaa79f]">
                                    0{index + 1}
                                </span>
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="mt-6 flex items-center justify-between rounded-xl bg-[#6e2525] px-5 py-4 text-sm font-medium text-white"
                        >
                            <span>Start a Project</span>

                            <ArrowUpRight size={17} strokeWidth={1.7} />
                        </a>
                    </nav>
                </Container>
            </div>
        </header>
    );
}
