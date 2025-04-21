import Image from "next/image"
import Style from "./page.module.css"

const Banner = ()=>{
    return(<div className={`${Style.container}`}>
        <div>
            <Image src="/bla.jpg"
                      alt="Banner "
                      width={1024}
                      height={542}
                      priority
            />
        </div>
        </div>)
}


export default Banner