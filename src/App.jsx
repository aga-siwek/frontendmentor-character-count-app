import './App.css'
import Header from './components/header/Header.jsx'
import Title from './components/title/Title.jsx'
import Typing from "./components/typing/Typing.jsx";
import Result from './components/result/Result.jsx'
import {useState} from "react";

function App() {
    const [message, setMessage] = useState("")
    const [excludeChecked, setExcludeChecked] = useState(false);
    const [limitChecked, setLimitChecked] = useState(false);
    console.log("limit")
    console.log(limitChecked)
    const [characterLimit, setCharacterLimit] = useState();

    const setNewText = (newMessage) => {
        setMessage(newMessage)
    };
    const handleCheckExclude = () => {
        setExcludeChecked(!excludeChecked)
    }

    const handleCheckLimit = () => {
        setLimitChecked(!limitChecked)
    }

    const changeCharacterLimit = (newLimit) => {
        setCharacterLimit(newLimit)
    }

    return (
        <>
            <div className='container'>
                <Header/>
                <Title/>
                <Typing
                    message={message}
                    setNewText={setNewText}
                    handleCheckExclude={handleCheckExclude}
                    excludeChecked={excludeChecked}
                    handleCheckLimit={handleCheckLimit}
                    limitChecked={limitChecked}
                    characterLimit={characterLimit}
                    changeCharacterLimit={changeCharacterLimit}
                />
                <Result
                    message={message}
                    excludeChecked={excludeChecked}
                    limitChecked={limitChecked}
                    characterLimit={characterLimit}
                />
            </div>
        </>
    )
}

export default App
