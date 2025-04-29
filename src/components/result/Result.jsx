import Carts from "./Carts.jsx";
import Chart from "./Chart.jsx";
import styles from "./Result.module.css"


function Result({message, excludeChecked, limitChecked, characterLimit}) {
    console.log(limitChecked)

    if (message) {

        let charactersToCount = message
        let wordsToCount = message
        let sentencesToCount = message
        let countCharacter
        let countWord
        let countSentence

        if (excludeChecked) {
            charactersToCount = charactersToCount.split(" ")
            charactersToCount = charactersToCount.join("")
            console.log(charactersToCount)
        }
        if (limitChecked) {
            if (charactersToCount.length > characterLimit) {
                charactersToCount = charactersToCount.slice(0, characterLimit)
                wordsToCount = wordsToCount.slice(0, characterLimit)
                sentencesToCount = sentencesToCount.slice(0, characterLimit)
                console.log(charactersToCount)
            }}


        countCharacter = charactersToCount.length
        countWord = wordsToCount.split(" ").filter((sentence) => sentence !== "").length

        if (sentencesToCount.includes(".")){
            console.log(sentencesToCount.split("."))
            countSentence =  sentencesToCount.split(".").filter((sentence) => sentence !== "").length
        }
        else {
            countSentence = 1
        }

        return (
            <div className={styles.result}>
                <Carts characters={countCharacter} words={countWord} sentences={countSentence}  />
                <Chart />
            </div>)}
}

export default Result