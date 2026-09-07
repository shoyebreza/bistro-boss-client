import useCart from "../../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();

    return (
        <div className="flex justify-center items-center flex-col gap-4">
            <h2 className="text-4xl">Items : {cart.length}</h2>
            <h2 className="text-4xl">Total Price : {cart.reduce((total, item) => total + (item.price * item.quantity), 0)}</h2>
            <button className="btn btn-primary">Pay Now</button>
        </div>
    );
};

export default Cart;