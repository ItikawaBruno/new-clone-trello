import { Navbar } from "./organization/_components/page";

export default function DashboardLayout({children}:{children:React.ReactNode}){
    return(
        <div className="h-full">
            <Navbar></Navbar>
            {children}
        </div>
    )
}