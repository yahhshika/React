import Card from "./Card";
import "./CardBox.css";

function CardBox(){
    return (<div className="cardBox">
    <Card title="This is Title1" description="This is Desc1" price={30000}/>
    <Card title="This is Title2" description="This is Desc2" price={40000}/>
    <Card title="This is Title1" description="This is Desc1" price={50000}/>
    
    
    </div>)
}
export default CardBox;