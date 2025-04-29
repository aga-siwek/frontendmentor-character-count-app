import Cart from "./Cart.jsx";
import styles from "./Carts.module.css"

function Carts({characters, words, sentences}) {
    return (
        <div className={styles.carts}>
            <p>carts</p>
            <p>{characters}</p>
            <p>{words}</p>
            <p>{sentences}</p>
    </div>)
}

export default Carts