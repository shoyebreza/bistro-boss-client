import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();

    return (
        <div>
            <div className="flex justify-evenly items-center gap-8">
                <h2 className="text-4xl">Items : {cart.length}</h2>
                <h2 className="text-4xl">Total Price : {cart.reduce((total, item) => total + (item.price * item.quantity), 0)}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => (
                                <tr key={item._id}>
                                    <td>
                                        #{index + 1}
                                    </td>
                                    <td><img src={item.image} alt={item.name} className="w-16 h-16 object-cover" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button className="btn btn-warning btn-xs"><FaTrash /></button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;