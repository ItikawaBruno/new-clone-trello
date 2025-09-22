import Link from "next/link";


export default function Logo(){
    return(
        <Link href='/'>
        <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
            <p className="text-lg text-neutral-700 pb-1">Kanvia</p>
        </div>
        </Link>
    );
}