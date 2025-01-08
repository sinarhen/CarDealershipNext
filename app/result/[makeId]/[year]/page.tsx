import {carsEndpoint} from "@/lib/constants";
import {getYearsRangingFrom} from "@/lib/utils";

export async function generateStaticParams(): Promise<Params[]>{
    const cars: ApiResponse = await fetch(carsEndpoint).then(res => res.json());
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

    const result = await fetch("<https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json>");
    return (
        <h2>
            Result
        </h2>
    )
}