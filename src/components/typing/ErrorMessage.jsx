import styles from "./ErrorMessage.module.css"

function ErrorMessage ({characterLimit}) {
    return (
        <p className={styles.ErrorMessage}>🛈 Limit reached! Your text exceeds {characterLimit} characters.</p>
    )
}

export default ErrorMessage

