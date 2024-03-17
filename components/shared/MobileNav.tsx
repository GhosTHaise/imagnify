import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { SignedIn, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
  

const Mobilenav = () => {
  return (
    <header className="header">
        <Link 
            href="/" 
            className="flex items-center gap2 md:py-2">
                <Image
                    src="/assets/images/logo-text.svg"
                    alt="logo"
                    width={180}
                    height={28}
                />
        </Link>

        <nav className="flex gap-2">
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
                <Sheet>
                  <SheetTrigger>
                    <Image
                      src="/assets/icons/menu.svg"
                      alt="menu"
                      width={32}
                      height={32}
                      className="cursor-pointer"
                    />
                  </SheetTrigger>
                  <SheetContent className="sheet-content sm:w-64">
                      
                  </SheetContent>
                </Sheet>
            </SignedIn>
        </nav>
    </header>
  )
}

export default Mobilenav