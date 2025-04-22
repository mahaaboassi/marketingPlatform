import Image from "next/image"
import Style from "./page.module.css"
import SignInForm from "./signInForm"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


const SignIn = () => {

  const cookieStore = cookies();
  const token =  cookieStore.get('token')?.value
  
  if(token){
    redirect("/");
  }
    return <div className={`${Style.container}`}>
       <Image
          className=""
          src="/banner-ariz-2-1024x542.jpg"
          alt="Banner Ariz"
          width={1024}
          height={542}
          priority
        />
        <div className={`${Style.contentForm} px-5`}>
          <SignInForm/>  
        </div>
    </div>
}

export default SignIn