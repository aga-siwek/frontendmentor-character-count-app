import styles from "./SelectSpace.module.css"
import CharacterLimit from "./CharacterLimit.jsx";

function SelectSpace ({
                          handleCheckExclude,
                          handleCheckLimit,
                          excludeChecked,
                          limitChecked,
                          characterLimit,
                          changeCharacterLimit,
                      }) {

    return (
        <div className={styles.select_space}>
            <div className={styles.chestbox_options}>
                <div className={styles.chestbox_option}>
                    <input type="checkbox" id="exclude" name="exclude" value="exclude" onClick={handleCheckExclude} checked={excludeChecked} />
                    <label htmlFor="exclude"> Exclude Spaces</label>
                </div>
                <div className={styles.chestbox_option}>
                    <input type="checkbox" id="character" name="character" value="character" onClick={handleCheckLimit} checked={limitChecked} />
                    <label htmlFor="character">Set Character Limit</label>
                    <CharacterLimit
                        changeCharacterLimit={changeCharacterLimit}
                        characterLimit={characterLimit} />
                </div>
            </div>
            <p className={styles.information}>{'Approx.  reading time: <1 minute'}</p>

        </div>)
}

export default SelectSpace