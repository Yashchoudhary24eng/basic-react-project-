import { card_img } from "../utils/constants";
export const CardComponent = ({data}) => {
    const {id,name,cuisines,avgRatingString,cloudinaryImageId,sla} = data.info;
return (
    <div className="card">
        <img  src={card_img + cloudinaryImageId} alt="food img"/>
        <h3 className="htag">{name}</h3>
        <h4 className="htag">{cuisines.join(", ")}</h4>
        <h4 className="htag">{avgRatingString}</h4>
        <h4 className="htag">{sla.slaString}</h4>
    </div>
)
}


export const promotedCard =  (Restaurantcard)=>{

    return (props)=>{

        return(
            <div className="relative">
                <h3 className="absolute top-0 left-0 bg-black rounded-lg text-white px-2 ">Promoted</h3>
                <Restaurantcard {...props} />
            </div>
        )
    }


}