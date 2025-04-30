import styles from "./Cart.module.css"

function Cart(props) {

    const formatNumber = () => {
        if (props.count) {
            if (props.count < 9) {
                return <h2>0{props.count}</h2>
            } else {
                return <h2>{props.count}</h2>
            }
        }
        return <h2>00</h2>
    }

    const kindOfCount = () => {
        if (props.kind === "characters") {
            return <p>Total Characters {props.excludeChecked ? '(no space)' : ''} </p>
        }
        if (props.kind === "words") {
            return <p>Total Words</p>
        }
        if (props.kind === "sentences") {
            return <p>Total Sentences</p>
        }

    }
    return (
        <div className={`${styles.cart} ${styles[props.kind]}`}>
            {formatNumber()}
            {kindOfCount()}

        </div>)

}

export default Cart