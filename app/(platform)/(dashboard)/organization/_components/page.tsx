import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Button } from "@heroui/button";
import { Plus } from "lucide-react";

export function Navbar(){
    return(
        <div className="fixed z-50 w-full px-4 border-b bg-white shadow-sm top-0 flex items-center h-14">
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    Kanvia
                </div>
                <Button size="sm" className="rounded-ms hidden md:block h-auto py-1.5 px-2">Create</Button>
                <Button size="sm" className="rounded-md block md:hidden">
                    <Plus className="h-4 w-4"></Plus>
                </Button>
            </div>
            <div className="ml-auto flex items-center gap-x-2">
                <OrganizationSwitcher
                hidePersonal
                afterCreateOrganizationUrl='/organization/:id'
                afterLeaveOrganizationUrl="/select-org"
                afterSelectOrganizationUrl='/organization/:id'
                appearance={{
                    elements:{
                        rootBox:{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }
                    }
                }}
                />
                <UserButton afterSignOutUrl="/"
                appearance={{
                    elements:{
                        avatarBox:{
                            height:30,
                            width:30
                        }
                    }
                }}
                ></UserButton>
            </div>
        </div>
    )
}