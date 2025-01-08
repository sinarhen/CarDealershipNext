import {QualityCard} from "@/app/(landing)/components/quality-card";

export async function WhyUsSection() {
    return (
        <section className="max-w-screen-2xl gap-x-12 flex-col md:flex-row px-12 sm:px-16 md:px-24 lg:px-44 w-full">
            <h1 className="text-2xl motion-opacity-in-0 motion-delay-500">Why us?</h1>
            <p className="motion-opacity-in-0 motion-delay-700">
                We are the best car dealer in the world
                <br/> These are the reasons why you should choose us
            </p>
            <div className="grid mt-4 gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({length: 4}).map((_, index) => (
                    <QualityCard key={index} index={index}/>
                ))}
            </div>
        </section>
    );
}