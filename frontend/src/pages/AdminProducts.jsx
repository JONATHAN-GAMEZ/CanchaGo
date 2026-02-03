import { Link } from "react-router-dom";
import ProductList from "../components/products/productList/ProductList";

function AdminProducts() {
    return (
        <div className="container py-4" >
            <div className="d-flex justify-content-between align-items-center mb-4 " >
                <h2>Productos</h2>
                <Link
                    to="/admin/products/new"
                    className="btn btn-success"
                >
                    Agregar Producto
                </Link>
            </div>

            <ProductList/>

        </div>
    );
}

export default AdminProducts;