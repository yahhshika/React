import Product from "./Product";

function ProductGroup(){ //you must pass number in {} to treat them as number not strings.
    // let options = [ <li>"abcd"</li>,<li>"def</li> ,<li> "ijkl"</li>]; or better will be pass the array as it is and in the product.jsx, converti each item to list ki item using map.
    let options = ["abcd", "efgh", "ijkl"];
    let options2 = {a:"abcd", b:"def"};
    return (
        <>
        <button>

            <Product title="Phone" price="30k" features={options} features2={options2}/>
        </button>
        <button>

            <Product title="TV" price={44000} features={["hu-tech", "durable"]} features2={{a:"abcd", b:"def"}}/>
        </button>
        <button>

            <Product title="TV" price={24000} features={["hu-tech", "durable"]} features2={{a:"abcd", b:"def"}}/>
        </button>
      
        
        </>
    )
}

export default ProductGroup;