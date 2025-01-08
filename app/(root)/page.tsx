import { Separator } from "@/components/ui/separator";
import { carsEndpoint } from "@/lib/constants";
import { VehicleListResponse } from "@/lib/types";
import FindCarForm from "./components/find-car-form";
import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default async function Home() {
  const data: VehicleListResponse = await fetch(carsEndpoint).then((res) =>
    res.json()
  );

  return (
    <div className="flex flex-col gap-y-32">
      <section className="h-auto bg-black/85 hover:bg-black/60 transition-colors duration-1000 flex relative w-full">
        <video
          className="absolute motion-preset-blur-up h-full w-full -z-10 object-cover"
          autoPlay
          loop
        >
          <source src="/video_banner.mp4" type="video/mp4" />
        </video>
        <div className="max-w-screen-2xl flex md:justify-between gap-x-12 flex-col md:flex-row  px-12 sm:px-16 md:px-24 lg:px-44  py-36 xl:py-44  text-white w-full">
          <div className="w-full">
            <h1 className="text-3xl motion-opacity-in-0 motion-duration-1000 -motion-translate-y-in-25">
              Find your dream car
            </h1>
            <p className="mt-1 motion-opacity-in-0 motion-duration-500 motion-delay-300">
              With our wide range of cars, you can find the perfect car for you.
              We have a wide range of cars from different manufacturers and
              years. You can find your{" "}
              <span className="underline font-medium">dream</span> car with us.
            </p>
          </div>

          <div className="w-full">
            <Separator className="mt-2 mb-4 md:hidden" />
            <FindCarForm data={data} />
          </div>
        </div>
      </section>
      <section className="max-w-screen-2xl gap-x-12 flex-col md:flex-row  px-12 sm:px-16 md:px-24 lg:px-44   w-full">
        <h1 className="text-2xl motion-opacity-in-0 motion-duration-1000 motion-delay-500">Why us?</h1>
        <p>
          We are the best car dealer in the world
          <br /> These are the reasons why you should choose us
        </p>
        <div className="grid mt-4 gap-3 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div 
              style={{"--delay:": (index + 1) * 200 + 500} as React.CSSProperties}
              className={"bg-white motion-opacity-in-0 motion-delay-1000 h-[200px] flex items-center justify-center flex-col w-full rounded border p-5"}>
              
              <div className="flex gap-x-1">
                <Star size="30" strokeWidth={1} />
                <Star size="30" className="-translate-y-3" strokeWidth={1} />
                <Star size="30" strokeWidth={1} />
              </div>
              <h1 className="text-center mt-2">Quality</h1>
              <p className="text-center text-sm">
                Our cars are of the highest quality. We make sure that all our
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-black motion-opacity-in-0 motion-delay-1500 text-white flex flex-col items-center py-24 w-full h-full">
        <h1 className="text-2xl">Contact Us</h1>
        <form className="w-[400px]">
          <Label>Email</Label>
          <Input id="email-contact" name="email" />

          <Label>Description</Label>
          <Textarea />

          <Button type="submit" className="w-full mt-3">
            Send
          </Button>
        </form>
      </section>
    </div>
  );
}
