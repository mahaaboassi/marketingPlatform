import Image from "next/image"
import Style from "./page.module.css"
import SignInForm from "./signInForm"

const SignIn = () => {
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