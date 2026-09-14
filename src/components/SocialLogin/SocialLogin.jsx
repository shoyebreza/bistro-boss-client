import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router";

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
                const loggedUser = result.user;
                const userInfo = { name: loggedUser.displayName, email: loggedUser.email };
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res);
                        navigate('/');
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="text-center my-4">
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle className="mr-4" /> Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;