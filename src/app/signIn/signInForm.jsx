"use client"
import Style from "./page.module.css"
// for validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useAuth } from "./api/signIn";
import { useDispatch } from "react-redux";
import { message } from "../redux/slices/message";
import { useState } from "react";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format') // Ensures the email is valid
    .required('Email is required'),
    password: Yup.string().min(6,"Password must be at least 6 characters long").required('Password is required'),   
  });

const SignInForm = ()=>{
    const { register, handleSubmit, formState: { errors } } = useForm(
        {resolver: yupResolver(validationSchema), 
            mode: 'onChange'   }
    );
    const {signIn, loading} = useAuth()
    const dispatch = useDispatch()
    const [ viewPassword, setViewPassword ] = useState(false)
    const router = useRouter()
    const onSubmit = async (data) => {
        const result = await signIn(data);
        

        if (result.success) {
            if(result.role && result.role == "client") router.push("/calendar")
            if(result.role && (result.role == "admin" || result.role == "developer")) router.push("/company")
          
        } else {
            console.log(result,message);
            
           dispatch(message({
            isOpen : true,
            msg : `❌ Error ${result.message}`,
            status : "error"
           }))
        }

    }
    return <form onSubmit={handleSubmit(onSubmit)} className={`${Style.containerForm} flex flex-col gap-3 lg:gap-5 p-4 lg:p-10`}>
        <div>
            <h2 className="weight-semibold text-center">Sign In</h2>
        </div>
            <div>
                <input {...register("email")} placeholder="Email"  />
                {errors.email && <p className="p-0.5 text-error">{errors.email.message}</p>}
            </div>
            <div className="relative">
                <input {...register("password")} type={viewPassword ? "text":"password"} placeholder="Password"  />
                <div onClick={()=>setViewPassword(!viewPassword)} className="absolute cursor-pointer right-5 top-1/2 -translate-y-1/2 z-50" >
                    {
                        viewPassword ? <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <g clipPath="url(#clip0_227_767)">
                        <path d="M11 5.49999C14.4741 5.49999 17.5725 7.45249 19.085 10.5417C18.5441 11.66 17.7833 12.6225 16.8758 13.4017L18.1683 14.6942C19.4425 13.5667 20.4508 12.155 21.0833 10.5417C19.4975 6.51749 15.5833 3.66665 11 3.66665C9.83579 3.66665 8.71746 3.84999 7.66329 4.18915L9.17579 5.70165C9.77163 5.58249 10.3766 5.49999 11 5.49999ZM10.0191 6.54499L11.9166 8.44249C12.4391 8.67165 12.8608 9.09332 13.09 9.61582L14.9875 11.5133C15.0608 11.2017 15.1158 10.8717 15.1158 10.5325C15.125 8.25915 13.2733 6.41665 11 6.41665C10.6608 6.41665 10.34 6.46249 10.0191 6.54499ZM1.84246 3.54749L4.29913 6.00415C2.80496 7.17749 1.62246 8.73582 0.916626 10.5417C2.50246 14.5658 6.41663 17.4167 11 17.4167C12.3933 17.4167 13.7316 17.1508 14.96 16.665L18.095 19.8L19.3875 18.5075L3.13496 2.24582L1.84246 3.54749ZM8.71746 10.4225L11.11 12.815C11.0733 12.8242 11.0366 12.8333 11 12.8333C9.73496 12.8333 8.70829 11.8067 8.70829 10.5417C8.70829 10.4958 8.71746 10.4683 8.71746 10.4225V10.4225ZM5.60079 7.30582L7.20496 8.90999C6.99413 9.41415 6.87496 9.96415 6.87496 10.5417C6.87496 12.815 8.72663 14.6667 11 14.6667C11.5775 14.6667 12.1275 14.5475 12.6225 14.3367L13.5208 15.235C12.7141 15.455 11.8708 15.5833 11 15.5833C7.52579 15.5833 4.42746 13.6308 2.91496 10.5417C3.55663 9.23082 4.49163 8.14915 5.60079 7.30582Z" fill="#C3996B"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_227_767">
                        <rect width="22" height="22" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        :<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <g clipPath="url(#clip0_227_763)">
                        <path d="M11 5.95833C14.4741 5.95833 17.5725 7.91083 19.085 11C17.5725 14.0892 14.4833 16.0417 11 16.0417C7.51663 16.0417 4.42746 14.0892 2.91496 11C4.42746 7.91083 7.52579 5.95833 11 5.95833ZM11 4.125C6.41663 4.125 2.50246 6.97583 0.916626 11C2.50246 15.0242 6.41663 17.875 11 17.875C15.5833 17.875 19.4975 15.0242 21.0833 11C19.4975 6.97583 15.5833 4.125 11 4.125ZM11 8.70833C12.265 8.70833 13.2916 9.735 13.2916 11C13.2916 12.265 12.265 13.2917 11 13.2917C9.73496 13.2917 8.70829 12.265 8.70829 11C8.70829 9.735 9.73496 8.70833 11 8.70833ZM11 6.875C8.72663 6.875 6.87496 8.72667 6.87496 11C6.87496 13.2733 8.72663 15.125 11 15.125C13.2733 15.125 15.125 13.2733 15.125 11C15.125 8.72667 13.2733 6.875 11 6.875Z" fill="#C3996B"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_227_763">
                        <rect width="22" height="22" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    }
                </div>
            </div>
            {errors.password && <p className="p-0.5 text-error">{errors.password.message}</p>}
            <div className="flex justify-center">
                <button type="submit">{loading ? <div className="spinner"></div>:"submit"}</button>
            </div>
    </form>
}

export default SignInForm