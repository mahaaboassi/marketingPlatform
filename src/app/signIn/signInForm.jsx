// Client component

"use client"
import Style from "./page.module.css"
// for validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useAuth } from "./api/signIn";
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
    const onSubmit = async (data) => {
        const result = await signIn(data);
        

        if (result.success) {
          // redirect or navigate
            
          console.log("✅ Signed in:", result.message);
        } else {
            alert(result.message)
          console.log("❌ Error:", result.message);
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
            <div>
                <input {...register("password")} type="password" placeholder="Password"  />
                {errors.password && <p className="p-0.5 text-error">{errors.password.message}</p>}
            </div>
            <div className="flex justify-center">
                <button type="submit">{loading ? <div class="spinner"></div>:"submit"}</button>
            </div>


    </form>
}

export default SignInForm