import styles from "./Search.module.css";

function Search() {
  return (
    <section className="container mb-5">
      <div className={`card p-4 ${styles.searchCard}`}>
        <h2 className="mb-3">Encuentra tu cancha</h2>

        <div className="row g-2">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar deporte"
            />
          </div>

          <div className="col-md-4">
            <button className="btn btn-success w-100">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;

