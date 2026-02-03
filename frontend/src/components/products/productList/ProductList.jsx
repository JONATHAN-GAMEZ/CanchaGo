import { useEffect, useState } from "react";
import { getProducts } from "../../../services/api/products.service";
import ProductCard from "../productCard/ProductCard";


function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    return(
        <div className="row g-4">
            {products.map(product => (
                <div className="col-md-4" key={product.id}>
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
}

export default ProductList;