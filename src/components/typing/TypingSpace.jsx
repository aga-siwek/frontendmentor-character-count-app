import styles from "./TypingSpace.module.css"

function TypingSpace ({message, setNewText}) {

    const hanleChange = (e) => {
        setNewText(e.target.value)
    }
    return (
        <div className={styles.typing_space}>
            <textarea
            name = "TypingSpace"
            type = "textarea"
            id = "TypingSpace"
            value={message}
            onChange={hanleChange} />
        </div>)
}

export default TypingSpace