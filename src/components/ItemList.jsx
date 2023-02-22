import Item from "./Item";

export const ItemList = ({productList})=>{
    return(
        <div className='container'>
           {
            productList.map((product)=>(
                <div key={product.id}>
                    <Item product={product}/>
                </div>
            )) 
           }
        </div>
    );
}