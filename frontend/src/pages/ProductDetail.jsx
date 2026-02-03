import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api/products.service";
import styles from "./ProductDetail.module.css";
import { Header } from "../components/layout/Header/Header";
import { Footer } from "../components/layout/Footer/Footer";
import ProductGallery from "../components/products/productGallery/ProductGallery";
import GalleryModal from "../components/products/productGallery/GalleryModal"

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  const handleShowMore = () => {
    setShowGallery(true);
  };

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p className="text-center mt-5">Cargando...</p>;

  return (
    <>
      <Header />

      {showGallery &&(
        <GalleryModal
          images ={product.images.map(img =>`${import.meta.env.VITE_API_URL}/${img}`)}
          onClose = {() => setShowGallery(false)}
        />
      )}

      <div className={styles.detailContainer}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{product.name}</h2>
          <button className={styles.backBtn} onClick={() => navigate(-1)}>
            ← Volver
          </button>
        </div>

        {/* Content */}
        <div className={styles.body}>

          {/* GALERÍA */}
          <ProductGallery
            images={product.images.map(img => `${import.meta.env.VITE_API_URL}/${img}`)}
            onShowMore={handleShowMore}
          />

          <p className={styles.description}>{product.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
