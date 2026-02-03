import { useState } from "react";
import { createProduct } from "../../../services/api/products.service";

function ProductForm() {
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const formData = new FormData(e.target);

        try {
            await createProduct(formData);
            alert("Producto agregado correctamente");
            e.target.reset();
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            {error && <div className="alert alert-danger"> {error} </div>}

            <div className="mb-3">
                <label className="form-label"> Nombre </label>
                <input name="name" className="form-control" required />
            </div>

            <div className="mb-3">
                <label className="form-label">Descripción</label>
                <textarea name="description" className="form-control" required />
            </div>

            <div className="mb-3">
                <label className="form-label">Imágenes</label>
                <input
                    type="file"
                    name="images"
                    className="form-control"
                    multiple
                    accept="image/*"
                    required
                />
            </div>

            <button className="btn btn-success">
                Guardar producto
            </button>

        </form>
    );
}

export default ProductForm;