import { useDispatch,useSelector } from "react-redux";
import { iteamadd } from "../utils/cartSlice";

const ItemList = ({items})=>{
const dispatch = useDispatch();

// const{items} = items;

const handledstate = (item) => {
    dispatch(iteamadd(item));
}

    return (
        <div>
            
            {items?.map((item,index) =><div key={item.id + "-" + index} className="flex justify-between bg-slate-100 py-4 px-3 font-bold cursor-pointer"> <p  className='border-b-2 my-2 py-2 bg-slate-100 hover:bg-slate-50 shadow-md'>{item.name} - {"₹"} {item.price}</p>
            
            <button className="border border-solid border-black rounded-lg bg-black text-white py-2 px-4 h-10" onClick={() =>handledstate(item)}>add+</button>
            </div>)}
        </div>
    )
}
export default ItemList;