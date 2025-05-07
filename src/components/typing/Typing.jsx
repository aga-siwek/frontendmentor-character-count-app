import TypingSpace from "./TypingSpace.jsx";
import SelectSpace from "./SelectSpace.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import styles from "./Typing.module.css"
import {memo} from "react";

const MemoSelectSpace = memo(SelectSpace)

function Typing({
                    message,
                    setNewText,
                    handleCheckExclude,
                    excludeChecked,
                    handleCheckLimit,
                    limitChecked,
                    characterLimit,
                    changeCharacterLimit,
                    showErrorMessage,
                    isError,

                }) {

    return (
        <div className={styles.typing} id="typingSpace">
            <TypingSpace message={message} setNewText={setNewText} isError={isError}/>
            {showErrorMessage()}
            <MemoSelectSpace
                handleCheckExclude={handleCheckExclude}
                excludeChecked={excludeChecked}
                handleCheckLimit={handleCheckLimit}
                limitChecked={limitChecked}
                characterLimit={characterLimit}
                changeCharacterLimit={changeCharacterLimit}
            />
        </div>)
}

export default Typing