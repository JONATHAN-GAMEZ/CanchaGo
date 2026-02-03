import styles from "./ProductGallery.module.css"


function ProductGallery ({images, onShowMore}) {
    if (!images?.length) return null;

    // toma solo 5 imagenes para la grilla
    const mainImage = images[0];
    const sideImages = images.slice(1,5);

    return (
        <div className={styles.gallery}>

            {/* Imagen principal */}
            <div className={styles.mainImage}>
                <img src={mainImage} alt="main" />
            </div>

             {/* Cuatro mini imágenes */}
             <div className={styles.sideGrid}>
                {sideImages.map((img,i) => (
                    <img key={i} src={img} alt={`thumb-${i}`} />
                ))}

                {/* Botón ver más */}
                <button type="button" 
                onClick={onShowMore} 
                className={styles.seeMore} >
                    Ver mas
                </button>
             </div>
        </div>
    )
}

export default ProductGallery;