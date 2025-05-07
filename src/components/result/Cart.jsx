import styles from "./Cart.module.css"

function Cart(props) {

    const formatNumber = () => {
        if (props.count) {
            if (props.count < 9) {
                return <h2 className={styles.cart_counter}>0{props.count}</h2>
            } else {
                return <h2 className={styles.cart_counter}>{props.count}</h2>
            }
        }
        return <h2 className={styles.cart_counter}>00</h2>
    }

    const kindOfCount = () => {
        if (props.kind === "characters") {
            return <h3 className={styles.cart_text}>Total Characters {props.excludeChecked ? '(no space)' : ''} </h3>
        }
        if (props.kind === "words") {
            return <h3 className={styles.cart_text}>Total Words</h3>
        }
        if (props.kind === "sentences") {
            return <h3 className={styles.cart_text}>Total Sentences</h3>
        }
    }
    return (
        <div className={`${styles.cart} ${styles[props.kind]}`}>
            {formatNumber()}
            {kindOfCount()}
        </div>)
}

export default Cart