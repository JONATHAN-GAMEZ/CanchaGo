function ProductCard ({product}) {

    const imageUrl = product.images?.[0]
    ? `${import.meta.env.VITE_API_URL}/${product.images[0]}`
    : "/src/assets/images/placeholders/no-image.png";

    return (
        <div className="card h-100">
            <img 
                src={imageUrl}
                className="card-img-top" 
                alt={product.name}
            />

            <div className="card-body">
                <h5>{product.name}</h5>
                <p className="text-muted"> {product.description} </p>
            </div>
        </div>
    );
}

export default ProductCard;