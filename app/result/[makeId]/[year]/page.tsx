import {carsEndpoint} from "@/lib/constants";
import {getYearsRangingFrom} from "@/lib/utils";
import {VehicleDetailsResponse, VehicleListResponse} from "@/lib/types";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {Info} from "lucide-react";

export async function generateStaticParams(): Promise<Params[]>{
    const cars: VehicleListResponse = await fetch(carsEndpoint).then(res => res.json());
    const years = getYearsRangingFrom(2015);

    return cars.Results.flatMap(car => years.map(year => ({
        makeId: car.MakeId.toString(), year: year.toString()
    })));
}

interface Params {
    makeId: string;
    year: string;
}

export default async function ResultPage({params}: {
    params: Params
}){
    const {year, makeId} = await params;
    const result: VehicleDetailsResponse = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`).then(res => res.json());

    return (
        <>
            <h1 className="text-xl">Found {result.Count} {result.Results[0].Make_Name} cars for {year}</h1>
            <Separator className="mt-4 mb-6"/>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">

                {result.Results.map(car => <div key={car.Model_ID} className="p-3 hover:border-black/50 transition-colors rounded border">
                    <div className="bg-gray-200 flex items-center text-sm text-black/50 justify-center h-[200px] rounded border">
                        No image
                    </div>
                    <h2 className="mt-2 flex gap-x-1">
                        <span>{car.Model_Name}</span>
                        <Separator orientation="vertical"/>
                    </h2>
                    <p className="text-sm opacity-75 mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias aspernatur atque
                    </p>
                    <div className="flex justify-between w-full items-end">
                        <Button disabled className="mt-4" size="sm">
                            <Info size="16"/> View details
                        </Button>
                        <p className="text-sm">
                            $ 15.999
                        </p>
                    </div>

                </div>)}
            </div>
        </>

    )
}