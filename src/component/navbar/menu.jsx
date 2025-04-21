"use client"


const { useEffect ,useState } = require("react")
import Link from "next/link"
// Style
import Style from "./page.module.css"

const MenuNav = ({childern,isView})=>{
    const [ isOpen, setIsOpen ] = useState(false)
    const handleChange = ()=>setIsOpen(!isOpen)
    useEffect(()=>{setIsOpen(isView)},[isView])

    
    return <div className={`${Style.menu} ${isOpen ? Style.open :""} p-2 flex-col gap-2`}>
        <div className={Style.arrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 10 5" fill="none">
             <path d="M0 5L5 0L10 5H0Z" fill="white"/>
            </svg>
        </div>
        {childern.map((e,idx)=>(<Link key={`aubMenuNavbar_${e.name}_${idx}`} href={e.link}>
        <div className={Style.option}>{e.name}</div>
        </Link>))}
    </div>
}

export default MenuNav