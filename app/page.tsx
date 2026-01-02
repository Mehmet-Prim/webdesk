import Header from "@/app/components/landing-page/header";
import Image from "next/image";

import HeroBG from "@/public/hero/bg-hero.png";

export default function Home() {
    return (
        <>
            <Header />

            <main>
                <div className="relative min-h-screen w-full">
                    <Image
                        src={HeroBG}
                        alt="Hero Background"
                        objectFit="cover"

                    />
                </div>
            </main>
        </>
    );
}
