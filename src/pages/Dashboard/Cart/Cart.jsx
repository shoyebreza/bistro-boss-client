import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Cart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const axiosSecure = useAxiosSecure();
    
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (!result.isConfirmed) return;

            axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your item has been deleted.',
                            'success'
                        );
                    }
                })
                .catch(error => {
                    console.error('Error deleting item:', error);
                    Swal.fire(
                        'Delete failed',
                        'The server could not find this cart item. Check the API delete route.',
                        'error'
                    );
                });
        });
    }

    
    return (
        <div>
            <div className="flex justify-evenly items-center gap-8 mb-8">
                <h2 className="text-4xl">Items : {cart.length}</h2>
                <h2 className="text-4xl">Total Price : {total}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-warning btn-xs"><FaTrash /></button>
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