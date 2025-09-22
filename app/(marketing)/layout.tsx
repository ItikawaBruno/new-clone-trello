import { Navbar } from "./_components/navbar";


export default function MarketngLayout({children}:{children:React.ReactNode}){
    return(
        <div className="h-full bg-slate-100">
            <Navbar></Navbar>
            <main className="pt-40 pb-20 bg-slate-100 h-full">
                {children}
            </main>
        </div>
    );
}