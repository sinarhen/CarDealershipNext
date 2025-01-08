import {VehicleDetailsResponse} from "@/lib/types";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {Info} from "lucide-react";

interface Params {
    makeId: string;
    year: string;
}

export default async function Results({params}: { params: Params }) {
    const {year, makeId} = await params;

    const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    const result: VehicleDetailsResponse = await response.json();


    // Imitate long loading to use suspense at the parent component
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve("done");
        }, 5000)
    );

    if (!response.ok) {
        return (
            <div>
                <h1>Failed to fetch data</h1>
                <p>{result.Message}</p>
            </div>
        );
    }

    return (
        <>
            <h1 className="text-xl">
                Found {result.Count} {result.Results[0].Make_Name} cars for {year}
            </h1>
            <Separator className="mt-4 mb-6"/>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                {result.Results.map((car) => (
                    <div
                        key={car.Model_ID}
                        className="p-3 hover:border-black/50 h-[400px] flex-col justify-between transition-colors rounded border"
                    >
                        <div>
                            <div
                                className="bg-gray-200 flex items-center text-sm text-black/50 justify-center h-[200px] rounded border">
                                No image
                            </div>
                            <h2 className="mt-2 flex gap-x-1">
                                <span>{car.Model_Name}</span>
                                <Separator orientation="vertical"/>
                            </h2>
                            <p className="text-sm opacity-75 mt-1">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Adipisci, alias aspernatur atque
                            </p>
                        </div>

                        <div className="flex justify-between w-full items-end">
                            <Button disabled className="mt-4" size="sm">
                                <Info size="16"/> View details
                            </Button>
                            <p className="text-sm">$ 15.999</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
