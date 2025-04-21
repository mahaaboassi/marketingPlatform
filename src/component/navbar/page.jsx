"use client"
import { navbarData } from "@/data/data"
import Style from "./page.module.css"
import Image from "next/image"
import Link from "next/link"
import MenuNav from "./menu"
import { useState} from "react"
import { useRouter, usePathname } from "next/navigation"

const Navbar = ()=>{
    const [ isView, setIsView ] = useState(false)
    const router = useRouter()
    const pathname = usePathname(); 

    return (<div className={`px-5 md:px-10 ${Style.container} `}>
        <div className="md:px-10 flex items-center">
            <Image
                className=""
                src="/arizlogo.svg"
                alt="Banner Ariz"
                width={240}
                height={200}
                priority
            />
        </div>
        <div className={`${Style.contentMenu} px-5 md:px-10  gap-5`}>
            <ul className="gap-5">
                {navbarData.map((e,idx)=>( <li key={`Navbar_${e.name}_${idx}`} className={pathname == e.link ? Style.active:""} 
                onClick={()=>{
                        if(e.children.length>0){setIsView(!isView)}
                        else{
                            router.push(e.link)
                        }
                }}>
                {e.name} 
                {e.children.length>0 && <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 12 8" fill="none">
                        <path d="M10.59 0.589966L6 5.16997L1.41 0.589966L0 1.99997L6 7.99997L12 1.99997L10.59 0.589966Z" fill="white"/>
                    </svg>
                </span>}
                {e.children.length> 0 && <MenuNav isView={isView} childern={e.children} />}
            </li>))}
            </ul>
            <div>
                <Link href={"/signIn"}> <button> Sign In </button> </Link>
            </div>

        </div>



    </div>)

}

export default Navbar