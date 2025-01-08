import {VehicleListResponse} from "@/lib/types";
import {carsEndpoint} from "@/lib/constants";
import {Separator} from "@/components/ui/separator";
import FindCarForm from "@/app/(landing)/components/find-car-form";

export async function HeroSection() {
    const data: VehicleListResponse = await fetch(carsEndpoint).then((res) =>
        res.json()
    );
    return (
        <section className="h-auto bg-black/85 hover:bg-black/60 transition-colors duration-1000 flex relative w-full">
            <video
                className="absolute motion-preset-blur-up h-full w-full -z-10 object-cover"
                autoPlay
                loop
            >
                <source src="/video_banner.mp4" type="video/mp4"/>
            </video>
            <div
                className="max-w-screen-2xl flex md:justify-between gap-x-12 flex-col md:flex-row px-12 sm:px-16 md:px-24 lg:px-44 py-36 xl:py-44 text-white w-full">
                <div className="w-full">
                    <h1 className="text-3xl motion-opacity-in-0 motion-duration-1000 -motion-translate-y-in-25">
                        Find your dream car
                    </h1>
                    <p className="mt-1 motion-opacity-in-0 motion-duration-500 motion-delay-300">
                        With our wide range of cars, you can find the perfect car for you.
                        We have a wide range of cars from different manufacturers and years.
                        You can find your{" "}
                        <span className="underline font-medium">dream</span> car with us.
                    </p>
                </div>
                <div className="w-full">
                    <Separator className="mt-2 mb-4 md:hidden"/>
                    <FindCarForm data={data}/>
                </div>
            </div>
        </section>
    );
}