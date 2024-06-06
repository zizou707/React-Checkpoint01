import product from "./product";


function Image() {
    return(
        <img className='logo1' alt="product" src={product.image_path}></img>
    );
}

export default Image