import Search from "../components/home/search/Search"
import Categories from "../components/home/categories/Categories"
import { useState, useEffect } from "react";
import { getRandomProducts } from "../services/api/products.service";
import ProductGrid from "../components/home/recommendations/ProductGrid";

function Home() {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        getRandomProducts().then(data => {
            console.log("PRODUCTOS RANDOM:", data);
            setProducts(data);
        });
    }, []);


    return (
        <>
            <Search />
            <Categories />
            <ProductGrid products={products} />

        </>
    );
}

export default Home;
