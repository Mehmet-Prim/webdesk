"use client";

import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import {Button} from "@/components/ui/button";
import {ModeToggle} from "@/app/components/landing-page/mode-toggle";

export default function Header() {
    return(
        <>
            <header className="fixed top-0 left-0 z-50 w-full">
                <div className="backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-white/20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="flex h-16 items-center justify-between">
                            <Link href="/" className="text-xl font-semibold tracking-tight">
                                Webdesk
                            </Link>

                            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                                <Link href="#warum-webdesk" className="hover:opacity-70 transition">
                                    Warum Webdesk?
                                </Link>
                                <Link href="#vergleich" className="hover:opacity-70 transition">
                                    Vergleich
                                </Link>
                                <Link href="#vorteile" className="hover:opacity-70 transition">
                                    Vorteile
                                </Link>
                                <Link href="#preise" className="hover:opacity-70 transition">
                                    Preise
                                </Link>
                                <Link href="#faq" className="hover:opacity-70 transition">
                                    FAQ
                                </Link>
                            </nav>

                            <div className="flex items-center gap-4">
                                <ModeToggle/>
                                <Button>Jetzt starten <ArrowRight /> </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}