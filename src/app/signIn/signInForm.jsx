// Client component

"use client"
import Link from "next/link"
import Style from "./page.module.css"

const SignInForm = ()=>{

    return <form className={`${Style.containerForm} flex flex-col gap-3 lg:gap-5 p-4 lg:p-10`}>
        <div>
            <h2 className="weight-semibold text-center">Sign In</h2>
        </div>
            <div>
                <input placeholder="Email"  />
            </div>
            <div>
                <input type="password" placeholder="Password"  />
            </div>
            <div className="flex justify-center">
                <Link href="/calendar"><button >Submit</button></Link>
                
            </div>


    </form>
}

export default SignInForm