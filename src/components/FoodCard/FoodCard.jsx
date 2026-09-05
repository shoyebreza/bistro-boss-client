
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location
    const axiosSecure = useAxiosSecure();
    const { _id, name, image, price, recipe } = item;
    const { user } = useAuth();

    const handleBuyNow = () => {
        if (user && user.email) {
            // Create a new cart item
            const cartItem = { menuId:_id, email: user.email, name, image, price };
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: `${name} added to your cart`,
                            icon: 'success',
                            confirmButtonText: 'Continue Shopping'
                        });
                    }
                });
        }else {
            Swal.fire({
                title: 'Please log in to order the food',
                icon: 'warning',
                confirmButtonText: 'Go to Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {
                        state: { from: location },
                        replace: true
                    });
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