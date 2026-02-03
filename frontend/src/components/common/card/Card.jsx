import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ product }) {

  const navigate = useNavigate();

  const imageUrl = product.images?.[0]
    ? `${import.meta.env.VITE_API_URL}/${product.images[0]}`
    : "/src/assets/images/placeholders/no-image.png";


  return (
    <div className={`card h-100 ${styles.card}`}>
      <img src={imageUrl} className={styles.cardImg} alt={product.name} />

      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">{product.description}</p>
        <button className="btn btn-outline-success" onClick={() => navigate(`/products/${product.id}`)} >
          Detalle de la cancha
        </button>
      </div>
    </div>
  );
}

export default Card;

