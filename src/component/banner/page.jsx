"use client"
import Image from "next/image"
import Style from "./page.module.css"
import Link from "next/link"

const Banner = ({firstPathTitle , firstPathLink ="#", secondTitle  })=>{
    return(<div className={`${Style.container}`}>
        <div >
            <Image src="/bla.jpg"
                      alt="Banner "
                      width={1024}
                      height={542}
                      priority
            />
        </div>
        <div className={`${Style.path} gap-1 right-5 md:right-10`}>
            <Link href={firstPathLink}> <div>{firstPathTitle}</div> </Link>
            
            {secondTitle && <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                    <g clipPath="url(#clip0_5_2954)">
                    <line x1="2.62128" y1="20.4091" x2="11.6213" y2="-0.590879" stroke="#ccc" strokeWidth="3"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5_2954">
                    <rect width="14" height="18" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>}
            <div> {secondTitle} </div>
            </div>
        </div>)
}


export default Banner