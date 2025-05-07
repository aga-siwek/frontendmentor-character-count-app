import styles from "./CharacterLimit.module.css"

function CharacterLimit({changeCharacterLimit, characterLimit}) {
    return (
        <div className={styles.characterLimit}>
            <input
                type="number"
                value={characterLimit}
                className={styles.characterLimit__input}
                onChange={(e) => changeCharacterLimit(e.target.value)}/>
        </div>
    )
}

export default CharacterLimit;