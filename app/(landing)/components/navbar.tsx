import {Button} from "@/components/ui/button";
import Link from "next/link";
import {CarFront, DollarSign, Home, Settings, User} from "lucide-react";

export const Navbar = () => {
    return (
        <header
            className="flex justify-between max-w-screen-2xl px-12 sm:px-16 md:px-24 lg:px-44 py-4 bg-black text-white ">
            <div className="flex items-center gap-x-3">
                <Button
                    className="motion-opacity-in-0 motion-duration-500"
                    size="sm"
                    variant="ghost"
                >
                    <Link href="/">
                        <Home size="20"/>
                    </Link>
                </Button>
                <Button
                    className="motion-opacity-in-0 motion-duration-500"
                    size="sm"
                    variant="ghost"
                >
                    <CarFront size="20"/>
                </Button>
                <Button
                    className="motion-opacity-in-0 motion-duration-500"
                    size="sm"
                    variant="ghost"
                >
                    <DollarSign size="20"/>
                </Button>
            </div>

            <div className="flex items-center ">
                <Button
                    className="motion-opacity-in-0 motion-duration-500"
                    size="sm"
                    variant="ghost"
                >
                    <Settings className="w-fit" href="/sales"></Settings>
                </Button>
                <Button
                    className="motion-opacity-in-0 motion-duration-500"
                    size="sm"
                    variant="ghost"
                >
                    <Link className="w-fit" href="/sales">
                        <User size="20"/>
                    </Link>
                </Button>
            </div>
        </header>
    );
};
