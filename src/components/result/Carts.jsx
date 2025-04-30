import Cart from "./Cart.jsx";
import styles from "./Carts.module.css"

function Carts({characters, words, sentences, excludeChecked}) {
    return (
        <div className={styles.carts}>
            <Cart kind = "characters"
                excludeChecked={excludeChecked}
                count={characters}/>
            <Cart kind = "words" count={words}/>
            <Cart kind = "sentences"  count={sentences}/>
        </div>)
}

export default Carts