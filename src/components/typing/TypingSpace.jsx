import styles from "./TypingSpace.module.css"
import {useEffect} from "react";

function TypingSpace({message, setNewText, isError}) {

    const hanleChange = (e) => {
        setNewText(e.target.value)
    }
    useEffect(() => {
        const typingArea = document.querySelector("#typeArea")
        if (!typingArea) {
            return
        }
        if (isError) {
            typingArea.classList.add(styles.error)
        } else {
            typingArea.classList.remove(styles.error);
        }
    }, [isError])


    return (
        <textarea
            className={styles.typing_space}
            name="TypingSpace"
            id="typeArea"
            value={message}
            onChange={hanleChange}/>)
}

export default TypingSpace