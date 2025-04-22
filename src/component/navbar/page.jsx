"use client"
import { navbarData } from "../../data/data"
import Style from "./page.module.css"
import Image from "next/image"
import Link from "next/link"
import MenuNav from "./menu"
import { useEffect, useRef, useState} from "react"
import { useRouter, usePathname } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import Cookies from "js-cookie"
import { login } from "../../app/redux/slices/user"

const Navbar = ()=>{
    const [ isView, setIsView ] = useState(false)
    const [ isMenuUser, setIsMenuUser] = useState(false)
    const router = useRouter()
    const pathname = usePathname(); 
    let user = useSelector(state=> state.user)
    const dispatch = useDispatch()
    const [ currentUser, setCurrentUser ] = useState({})
    

    useEffect(() => {
        const token = Cookies.get("token");
        const localUser = localStorage.getItem("$user");
    
        if (token && localUser) {
          try {
            const parsedUser = JSON.parse(localUser);
            setCurrentUser(parsedUser);
            dispatch(login(parsedUser));
          } catch (e) {
            console.error("Failed to parse user from localStorage:", e);
          }
        }
      }, [user]);
      useEffect(()=>{
        const handleClickOutside = (e) => {
        if (targetServicesRef.current && !targetServicesRef.current.contains(e.target)
           && targetUserRef.current && !targetUserRef.current.contains(e.target)) {
            setIsView(false);
            setIsMenuUser(false)
        }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
        document.removeEventListener("click", handleClickOutside);
        };
    },[])
    const targetServicesRef = useRef(null)
    const targetUserRef = useRef(null)
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
            <ul  className="gap-5">
                {navbarData.map((e,idx)=>( <li  ref={e.children.length > 0 ? targetServicesRef : null} key={`Navbar_${e.name}_${idx}`} className={pathname == e.link ? Style.active:""} 
                onClick={()=>{
                        if(e.children.length>0){
                            setIsView(!isView)
                            setIsMenuUser(false)
                        }
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
                {e.children.length> 0 && <MenuNav  isView={isView} childern={e.children} />}
            </li>))}
            </ul>
            <div>
                {
                   currentUser &&  Object.keys(currentUser).length>0 ? 
                   <div ref={targetUserRef} onClick={()=>{
                    setIsView(false)
                    setIsMenuUser(!isMenuUser)
                   }} className={`${Style.avatar}`}>
                    <span className="uppercase">{currentUser.name.substring(0,2)}</span>
                   <MenuNav  menuUser={true} isView={isMenuUser} childern={[{
                        name: "History",
                        link : "/history",
                    },{
                        name: "Users",
                        link : "/user",
                    },{
                        name: "Companies",
                        link : "/company",
                    },{
                        name: "logout",
                        link : "/",
                    },]} />
                   </div>
                   :<Link href={"/signIn"}> <button> Sign In </button> </Link>
                }
                
            </div>

        </div>



    </div>)

}

export default Navbar