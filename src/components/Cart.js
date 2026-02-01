
import { iteamclear, iteamremove } from "../utils/cartSlice";
import ItemList from "./ItemList";
import {  useSelector,useDispatch } from "react-redux";





const Cart = () => {
    const dispatch = useDispatch();
    const data = useSelector((store)=> store.cart.iteams);
    
    const handlecart = ()=>{
        dispatch(iteamclear());
    }

    const handlecartpop = ()=> {
        dispatch(iteamremove());
    }


    return  (
        <div className="min-h-screen w-6/12  font-bold text-center mx-auto mt-8 text-3xl">
        <div >cart</div>
        <button className="border-solid border-black rounded-lg border px-2 bg-black text-white" onClick={handlecart}>clear cart</button>
        <div className="p-4">
        <button className="border-solid border-black rounded-lg border px-2 bg-black text-white" onClick={handlecartpop}>remove</button>
        </div>
        <div className="mt-4">
        {data.length===0 && <h1>cart is empty</h1>}
        <ItemList items={data}/>
       </div>
        </div>
    )
}
export default Cart;