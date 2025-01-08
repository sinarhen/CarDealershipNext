import { carsEndpoint } from "@/lib/constants";
import {Separator} from "@/components/ui/separator";
import FindCarForm from "@/app/(root)/components/FindCarForm";

export default async function Home() {
    const data: ApiResponse = await fetch(carsEndpoint).then((res) => res.json());

    return (
        <section className="flex items-center relative  justify-center py-32 w-full   ">

            <div className="bg-white w-[350px] rounded px-4 py-6">
                <h1 className="text-2xl">Buy a car</h1>
                <p className="text-sm">Please choose make and year</p>
                <Separator className="mt-2 mb-4"/>
                <FindCarForm data={data} />
            </div>


        </section>

    );
}
