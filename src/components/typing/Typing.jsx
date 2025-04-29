import TypingSpace from "./TypingSpace.jsx";
import SelectSpace from "./SelectSpace.jsx";
import styles from "./Typing.module.css"

function Typing ({
                     message,
                     setNewText,
                     handleCheckExclude,
                     excludeChecked,
                     handleCheckLimit,
                     limitChecked,
                     characterLimit,
                     changeCharacterLimit
}) {
    return (
        <div className = {styles.typing}>
            <TypingSpace message={message} setNewText={setNewText} />
            <SelectSpace
                handleCheckExclude={handleCheckExclude}
                excludeChecked = {excludeChecked}
                handleCheckLimit={handleCheckLimit}
                characterChecked = {limitChecked}
                characterLimit={characterLimit}
                changeCharacterLimit={changeCharacterLimit}
            />
        </div>)
}

export default Typing