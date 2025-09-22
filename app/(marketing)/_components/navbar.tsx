import Logo from "@/components/logo";
import { Button } from "@heroui/button";
import Link from "next/link";

export function Navbar(){
    return(
        <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo></Logo>
            </div>
            <div className="flex gap-4">
                <Button className="bg-white border-1 border-black text-black"><Link href='/'>Login</Link></Button>
                <Button className="bg-black text-white"><Link href='/'>Get Kanvia for free</Link></Button>
            </div>
        </div>
    );
}