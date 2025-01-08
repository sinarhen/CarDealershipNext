import {Button} from "@/components/ui/button";
import Link from "next/link";
import {CarFront, DollarSign, Home, Settings, User} from "lucide-react";

export const Navbar = () =>
    <header
        className="flex justify-between max-w-screen-2xl px-12 sm:px-16 md:px-24 lg:px-44 py-4 bg-black text-white ">
        <div className="flex items-center gap-x-3">
            <Button size="sm" variant="ghost">
                <Link href="/src/public">
                    <Home size="20"/>
                </Link>
            </Button>
            <Button size="sm" variant="ghost">
                <CarFront size="20"/>
            </Button>
            <Button size="sm" variant="ghost">
                <DollarSign size="20"/>
            </Button>
        </div>

        <div className="flex items-center ">
            <Button size="sm" variant="ghost">

                <Settings className="w-fit" href="/sales">
                </Settings>
            </Button>
            <Button size="sm" variant="ghost">
                <Link className="w-fit" href="/sales">
                    <User size="20"/>
                </Link>
            </Button>
        </div>
    </header>