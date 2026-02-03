import styles from "./Categories.module.css";

const categories = [
  "Fútbol",
  "Baloncesto",
  "Tenis",
];

function Categories() {
  return (
    <section className="container mb-5">
      <h2 className="mb-4">Categorías</h2>

      <div className="row g-3">
        {categories.map((cat) => (
          <div className="col" key={cat}>
            <div className={`card text-center p-3 ${styles.categoryCard}`}>
              {cat}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;

