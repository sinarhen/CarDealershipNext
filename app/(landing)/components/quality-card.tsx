import {Star} from "lucide-react";

export async function QualityCard({index}: { index: number }) {
    return (
        <div
            style={{"--delay:": (index + 1) * 200 + 500} as React.CSSProperties}
            className={
                "bg-white motion-opacity-in-0 motion-delay-1000 h-[200px] flex items-center justify-center flex-col w-full rounded border p-5"
            }
        >
            <div className="flex gap-x-1">
                <Star size="30" strokeWidth={1}/>
                <Star size="30" className="-translate-y-3" strokeWidth={1}/>
                <Star size="30" strokeWidth={1}/>
            </div>
            <h1 className="text-center mt-2">Quality</h1>
            <p className="text-center text-sm">
                Our cars are of the highest quality. We make sure that all our
            </p>
        </div>
    );
}