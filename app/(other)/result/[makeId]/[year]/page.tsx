import { carsEndpoint } from "@/lib/constants";
import { getYearsRangingFrom } from "@/lib/utils";
import { VehicleDetailsResponse, VehicleListResponse } from "@/lib/types";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { Suspense } from "react";
import Results from "./components/results";

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

export default async function ResultPage({ params }: { params: Params }) {
  return (
    <Suspense
      fallback={
        <>
          <h1 className="text-xl animate-pulse">Loading</h1>
          <Separator className="mt-4 mb-6" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="p-3 h-[400px] animate-pulse bg-gray-200 transition-colors rounded border"></div>
            ))}
          </div>
        </>
      }
    >
      <Results params={params} />
    </Suspense>
  );
}

