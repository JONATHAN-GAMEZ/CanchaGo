import styles from "./Footer.module.css"
import logo from "../../../assets/canchago-logofooter.svg"
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className=" container-fluid p-2 ">
                <a className="footer-logo " href="#">
                    <img src={logo} alt="logo" height="35" />
                </a>
                <small className={styles.copyYear} >© {new Date().getFullYear()} </small>
                
            </div>
        </footer>
    )
}

