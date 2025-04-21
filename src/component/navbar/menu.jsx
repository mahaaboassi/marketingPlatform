"use client"
const { useEffect ,useState, useRef } = require("react")
import Link from "next/link"
// Style
import Style from "./page.module.css"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { useDispatch } from "react-redux"
import { login } from "@/app/redux/slices/user"

const MenuNav = ({childern,isView,menuUser = false})=>{
    const [ isOpen, setIsOpen ] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(()=>{setIsOpen(isView)},[isView])


    const contentRef = useRef(null);
    const logout = ()=>{
        localStorage.removeItem("$user")
        Cookies.remove("token")
        dispatch(login(null))
        router.push("/")

    }
    return <div  className={`${menuUser?Style.menuUser:Style.menu} overflow-hidden transition-all duration-500 ease-in-out flex-col gap-2`}
            style={{
                height: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
                transition: 'height 0.5s ease',
                
            }}>
                <div className="p-3" ref={contentRef}>
                <div  className={Style.arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 10 5" fill="none">
                    <path d="M0 5L5 0L10 5H0Z" fill="white"/>
                    </svg>
                </div>
                {childern.map((e,idx)=>{
                        return <Link key={`aubMenuNavbar_${e.name}_${idx}`} onClick={()=>{
                            if(e.name=="logout") logout()
                        }}  href={e.link}>
                        <div className={Style.option}>{e.name}</div>
                        </Link>
                })}
                </div>
       
    </div>
}

export default MenuNav