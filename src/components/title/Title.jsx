import styles from "./Title.module.css"

function Title () {
    return (
        <div className={styles.title}>
            <h1 className={styles.title__content}>Analyze your text in real-time.</h1>
        </div>)
}

export default Title