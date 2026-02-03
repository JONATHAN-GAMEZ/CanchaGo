import Card from "../../common/card/Card/";
import styles from "./ProductGrid.module.css";

function ProductGrid({ products }) {
   if (!products.length) return <p>No hay productos</p>;
  return (
    <section className={styles.grid}>
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductGrid;
