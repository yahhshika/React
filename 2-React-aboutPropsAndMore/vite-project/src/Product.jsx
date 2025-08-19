function Product({title, features, features2, price=10}){ //default price = 10
    const featuresArray = features.map((feature)=><li>{feature}</li>)
    let isDiscount = price>30000;
    let styles = {backgroundColor: isDiscount? "pink": ""};
    return (
        
        <div style={styles}>
            <div> title: {title}</div>
            <p>price: {price}</p>
            <p>{featuresArray}</p>
            <p>{features2.a}</p>
            <p>{features2.b}</p>
            {/* {price>30000 ? <p>Discount of 5%</p>: null} */}
            {isDiscount && <p>Discount of 5</p>}
        </div>
    )
}

export default Product;