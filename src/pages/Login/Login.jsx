import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleValidateCaptcha = (e) => {
        e.preventDefault();
        const userCaptchaValue = e.target.value;
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }






    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // Handle login logic here
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'Login Successful',
                    text: 'You have successfully logged in!',
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: 'Login Failed',
                    text: 'Invalid email or password.',
                    icon: 'error'
                });
            });

    };

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <label className="label"><LoadCanvasTemplate /></label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" className="input" placeholder="Enter Captcha" />
                                
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type="submit" disabled={disabled} className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <p><small>New Here? <Link to="/signup">Sign Up</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;