import { useDispatch, useSelector } from "react-redux"
import CategoryList from "./CategoryList";
import { clearCart } from "../utils/cardSlice";

const Cart = () => {
    // Inorder to read the ccart items we need to subscribe to the Store
    const cartItems = useSelector((store) => store.cart.items);

    // Dispatch Function
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <>
            <div className="text-center m-4 p-4">
                <h1 className="text-2xl font-bold">Cart</h1>
                {/* Displaying the Cart Items */}
                <div className="w-6/12 m-auto">
                <button onClick={handleClearCart} className="m-2 p-2 bg-black text-white rounded-lg">Clear Cart</button>
                    {cartItems.length === 0 && <h1 className="font-bold text mt-10">Cart Is Empty. Add Items to the Cart now !!</h1>}
                    <CategoryList items={cartItems}/>
                </div>
            </div>
        </>   
    )
}

export default Cart