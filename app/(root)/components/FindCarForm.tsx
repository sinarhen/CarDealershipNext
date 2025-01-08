'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { getYearsRangingFrom } from "@/lib/utils";

interface Props {
    data: ApiResponse;
}

export default function FindCarForm({ data }: Props) {
    const [selectedMake, setSelectedMake] = useState<string | null>(null);
    const [selectedYear, setSelectedYear] = useState<string | null>(null);

    const years = getYearsRangingFrom(2015);
    const isNextButtonDisabled = !selectedMake || !selectedYear;

    const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isNextButtonDisabled) {
            e.preventDefault(); // Prevent the default behavior of the link
        }
    };

    return (
        <div className="mt-2 flex w-full flex-col gap-y-2">
            <Select onValueChange={setSelectedMake}>
                <SelectTrigger>
                    <SelectValue placeholder="Select a make" />
                </SelectTrigger>
                <SelectContent>
                    {data.Results.map(car => (
                        <SelectItem key={car.MakeId} value={car.MakeId.toString()}>
                            {car.MakeName}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select onValueChange={setSelectedYear}>
                <SelectTrigger>
                    <SelectValue placeholder="Select a year" />
                </SelectTrigger>
                <SelectContent>
                    {years.map(year => (
                        <SelectItem key={year} value={year.toString()}>
                            {year}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Link className="w-full cursor-default" href={isNextButtonDisabled ? "#" : `/result/${selectedMake}/${selectedYear}`} onClick={handleButtonClick}>
                <Button className="w-full" disabled={isNextButtonDisabled}>
                    Next
                </Button>
            </Link>
        </div>
    );
}