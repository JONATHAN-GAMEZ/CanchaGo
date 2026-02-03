import styles from "./Header.module.css"
import logo from "../../../assets/canchago-logotexto.svg"
import { useLocation } from "react-router-dom"

export const Header = () => {
    const location = useLocation();

    const shouldHideButtons = location.pathname.startsWith ('/products/')

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${styles.header}`}>
            <div className="container-fluid px-3">
                {/* Logo */}
                <a className="navbar-brand fw-bold" href="/">
                    <img src={logo} alt="logo" height="45" className="d-inline-block align-text-top" />
                </a>

                {/* Toggle mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCanchaGo"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Contenido */}
                <div className="collapse navbar-collapse" id="navbarCanchaGo">
                    { !shouldHideButtons && (
                    <div className="ms-auto d-flex gap-2">
                        <button className="btn btn-outline-primary">
                            Crear usuario
                        </button>

                        <button className="btn btn-primary">
                            Iniciar sesión
                        </button>
                    </div>
                    )}
                </div>
            </div>
        </nav>
    )
}
