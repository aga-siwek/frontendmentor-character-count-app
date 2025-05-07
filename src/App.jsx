import './App.css'
import Header from './components/header/Header.jsx'
import Title from './components/title/Title.jsx'
import Typing from "./components/typing/Typing.jsx";
import Result from './components/result/Result.jsx'
import ErrorMessage from "./components/typing/ErrorMessage.jsx";
import {useState, useCallback, memo} from "react";

const MemoHeader = memo(Header)
const MemoTitle = memo(Title)
const MemoResult = memo(Result)

function App() {
    const [message, setMessage] = useState("")
    const [excludeChecked, setExcludeChecked] = useState(false);
    const [limitChecked, setLimitChecked] = useState(false);
    const [characterLimit, setCharacterLimit] = useState();
    const [isDark, setIsDark] = useState(true)
    const [isError, setIsError] = useState(false);


    const setNewText = useCallback((newMessage) => {
        setMessage(newMessage)
    },);
    const handleCheckExclude = useCallback(() => {
        setExcludeChecked(!excludeChecked)
    }, [excludeChecked]);

    const handleCheckLimit = useCallback(() => {
        setLimitChecked(!limitChecked)
    }, [limitChecked])

    const changeCharacterLimit = useCallback((newLimit) => {
        setCharacterLimit(newLimit)
    }, [])

    const handleSwitch = useCallback(() => {
        setIsDark(!isDark)
    }, [isDark])

    const showErrorMessage = useCallback(() => {
        if (limitChecked && characterLimit) {
            if (characterLimit < message.length) {
                setIsError(true)
                return <ErrorMessage characterLimit={characterLimit}/>
            } else {
                setIsError(false)
            }
        } else {
            setIsError(false)
        }
    })


    return (
        <>
            <main className='container'>
                <MemoHeader isDark={isDark} handleSwitch={handleSwitch}/>
                <MemoTitle/>
                <Typing
                    message={message}
                    setNewText={setNewText}
                    handleCheckExclude={handleCheckExclude}
                    excludeChecked={excludeChecked}
                    handleCheckLimit={handleCheckLimit}
                    limitChecked={limitChecked}
                    characterLimit={characterLimit}
                    changeCharacterLimit={changeCharacterLimit}
                    showErrorMessage={showErrorMessage}
                    isError={isError}
                />
                <MemoResult
                    message={message}
                    excludeChecked={excludeChecked}
                    limitChecked={limitChecked}
                    characterLimit={characterLimit}
                />
            </main>
        </>
    )
}

export default App
