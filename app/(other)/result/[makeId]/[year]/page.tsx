import {carsEndpoint} from "@/lib/constants";
import {getYearsRangingFrom} from "@/lib/utils";
import {VehicleListResponse} from "@/lib/types";
import {Suspense} from "react";
import Results from "./components/results";
import {ResultsSkeleton} from "./components/results-skeleton";

export async function generateStaticParams(): Promise<Params[]> {
    const cars: VehicleListResponse = await fetch(carsEndpoint).then((res) =>
        res.json()
    );
    const years = getYearsRangingFrom(2015);

    return cars.Results.flatMap((car) =>
        years.map((year) => ({
            makeId: car.MakeId.toString(),
            year: year.toString(),
        }))
    );
}

interface Params {
    makeId: string;
    year: string;
}

export default async function ResultPage({params}: { params: Params }) {
    return (
        <Suspense
            fallback={<ResultsSkeleton/>}>
            <Results params={params}/>
        </Suspense>
    );
}

