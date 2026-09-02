
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const FoodCard = ({ item }) => {
    const navigate = useNavigate();
    const { name, image, price, recipe } = item;
    const { user } = useAuth();

    const handleBuyNow = (foodItem) => {
        if (user && user.email) {
            console.log("Buying item:", foodItem);
        }else {
            Swal.fire({
                title: 'Please log in to order the food',
                icon: 'warning',
                confirmButtonText: 'Go to Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt={name} />
            </figure>
            <p className="text-xl font-bold">${price}</p>
            <div className="card-body items-center text-center flex flex-col">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleBuyNow(item)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;