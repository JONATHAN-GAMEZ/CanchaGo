import ProductForm from "../components/products/productForm/ProductForm";

function AddProduct() {
    return (
        <div className="container py-4" >
            <h2 className="mb-4" > Agregar productos </h2>
            <ProductForm/>
        </div>
    );
}

export default AddProduct;