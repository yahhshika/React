import "./Card.css";
import CardUpper from "./CardUpper";
import CardLower from "./CardLower";

function Card({title, description, price}){
    return (
        <>
        <div className="card">
            <CardUpper title={title} Desc={description} />
            <CardLower price={price}/>
        </div>
        </>
    )
}

export default Card;