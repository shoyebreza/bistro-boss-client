import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router";
import { useState } from "react";

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [isSigningIn, setIsSigningIn] = useState(false);


    const handleGoogleSignIn = () => {
        if (isSigningIn) return;

        setIsSigningIn(true);
        signInWithGoogle()
            .then(async result => {
                const loggedUser = result.user;
                const userInfo = { name: loggedUser.displayName, email: loggedUser.email };

                const tokenResponse = await axiosPublic.post('/jwt', {
                    email: loggedUser.email
                });
                localStorage.setItem('access-token', tokenResponse.data.token);

                await axiosPublic.post('/users', userInfo, {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.data.token}`
                    }
                });
                navigate('/');
            })
            .catch(error => {
                if (error.code !== 'auth/popup-closed-by-user') {
                    console.error('Google sign-in failed:', error);
                }
            })
            .finally(() => {
                setIsSigningIn(false);
            });
    };

    return (
        <div className="text-center my-4">
            <div>
                <button onClick={handleGoogleSignIn} className="btn" disabled={isSigningIn}>
                    <FaGoogle className="mr-4" /> Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;