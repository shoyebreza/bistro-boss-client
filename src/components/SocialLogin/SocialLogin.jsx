import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
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