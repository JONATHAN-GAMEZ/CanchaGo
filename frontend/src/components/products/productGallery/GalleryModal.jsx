import { useState } from "react"
import styles from "./GalleryModal.module.css"

function GalleryModal({images, onClose}) {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) =>(c === 0 ? images.length -1 : c-1));
    const next = () => setCurrent((c) => (c === images.length -1 ? 0 : c+1));

    return(
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>X</button>

                <img src={images[current]} alt="full" className={styles.mainImage}/>

                <div className={styles.controls}>
                    <button onClick={prev}>←</button>
                    <span>{current +1} / {images.length}</span>
                    <button onClick={next}>→</button>
                </div>

                <div className={styles.thumbs}>
                    {images.map((img,i) =>(
                        <img
                            key={i}
                            src={img}
                            className={i === current ? styles.activeThumb : ""}
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GalleryModal;