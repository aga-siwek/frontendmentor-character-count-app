import styles from "./SelectSpace.module.css"
import CharacterLimit from "./CharacterLimit.jsx";

function SelectSpace({
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
                    <input type="checkbox" id="exclude" name="exclude" value="exclude" onChange={handleCheckExclude}
                           checked={excludeChecked} className={styles.hidden_checkbox}/>
                    <label htmlFor="exclude" className={styles.custom_label}>
                        <span className={styles.custom_check}></span>
                        Exclude Spaces</label>
                </div>
                <div className={styles.chestbox_option}>
                    <div>
                        <input type="checkbox" id="character" name="character" value="character"
                               onChange={handleCheckLimit}
                               checked={limitChecked} className={styles.hidden_checkbox}/>
                        <label htmlFor="character" className={styles.custom_label}>
                            <span className={styles.custom_check}></span>
                            Set Character Limit</label></div>
                    {limitChecked &&
                        <CharacterLimit
                            changeCharacterLimit={changeCharacterLimit}
                            characterLimit={characterLimit}/>}
                </div>
            </div>
            <p className={styles.information}>{'Approx.  reading time: <1 minute'}</p>
        </div>)
}

export default SelectSpace