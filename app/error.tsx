"use client";

import {Button} from "@/components/ui/button";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="absolute flex z-50 bg-black/80 w-full flex-col items-center h-full justify-center">
            <h1 className="text-white text-xl">An error occurred</h1>
            <Button onClick={reset}>Please try again</Button>
        </div>
    );
}
