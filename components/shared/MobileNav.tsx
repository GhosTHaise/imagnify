import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
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
    </header>
  )
}

export default Mobilenav