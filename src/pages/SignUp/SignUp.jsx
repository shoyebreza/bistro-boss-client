import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import {useForm} from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
const SignUp = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="Name" {...register("name", { required: true })} />
                                {errors.name && <p className="text-error">Name is required</p>}
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" {...register("email", { required: true })} />
                                {errors.email && <p className="text-error">Invalid email address</p>}
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" 
                                {...register("password", { 
                                    required: true, 
                                    minLength: 6, 
                                    maxLength: 12,
                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}$/
                                    })} />

                                {errors.password?.type==='required' && <p className="text-error">Password is required</p>}
                                {errors.password?.type==='minLength' && <p className="text-error">Password must be at least 6 characters</p>}
                                {errors.password?.type==='maxLength' && <p className="text-error">Password must be no more than 12 characters</p>}
                                {errors.password?.type==='pattern' && <p className="text-error">Password must contain at least one uppercase letter, one special character, and one number</p>}
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type="submit" className="btn btn-neutral mt-4">Sign Up</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;