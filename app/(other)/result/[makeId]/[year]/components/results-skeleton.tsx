import {Separator} from "@/components/ui/separator";

export function ResultsSkeleton() {
    return (
        <>
            <h1 className="text-xl animate-pulse">Loading</h1>
            <Separator className="mt-4 mb-6"/>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                {Array.from({length: 8}).map((_, index) => (
                    <div key={index}
                         className="p-3 h-[400px] animate-pulse bg-gray-200 transition-colors rounded border"></div>
                ))}
            </div>
        </>
    );
}
