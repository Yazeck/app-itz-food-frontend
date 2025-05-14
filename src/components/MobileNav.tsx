import {  Menu} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

export default function MobileNav() {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-3xl text-orange-500" />

            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated ? (
                        <MobileNavLinks />
                    
                    ):(

                   <Button onClick={() => loginWithRedirect()}
                    className="flex-1 font-bold bg-orange-500">LogIn</Button>
                        )   
                }
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-orange-500">Login</Button>
                </SheetDescription>
            </SheetContent>

        </Sheet>
    )
}