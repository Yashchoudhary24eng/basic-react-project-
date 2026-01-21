import { card_img } from "../utils/constants";
export const CardComponent = ({data}) => {
    const {id,name,cuisines,rating,deliveryTime} = data;
return (
    <div className="card">
        <img src={card_img} alt="food img"/>
        <h3 className="htag">{name}</h3>
        <h4 className="htag">{cuisines.join(", ")}</h4>
        <h4 className="htag">{rating} stars</h4>
        <h4 className="htag">{deliveryTime}</h4>
    </div>
)
}
