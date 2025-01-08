import {HeroSection} from "@/app/(landing)/components/hero-section";
import {WhyUsSection} from "@/app/(landing)/components/why-us-section";
import {ContactSection} from "@/app/(landing)/components/contact-section";

export default async function Home() {
    return (
        <div className="flex flex-col gap-y-32">
            <HeroSection/>
            <WhyUsSection/>
            <ContactSection/>
        </div>
    );
}

