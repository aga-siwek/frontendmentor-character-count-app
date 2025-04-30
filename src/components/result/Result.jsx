import Carts from "./Carts.jsx";
import Chart from "./Chart.jsx";
import styles from "./Result.module.css"


function Result({message, excludeChecked, limitChecked, characterLimit}) {
    let charactersToCount = message
    let wordsToCount = message
    let sentencesToCount = message
    let countCharacter
    let countWord
    let countSentence
    let letterCountSorted

    if (message) {

// carts
        if (limitChecked) {
            if (charactersToCount.length > characterLimit) {
                charactersToCount = charactersToCount.slice(0, characterLimit)
                wordsToCount = wordsToCount.slice(0, characterLimit)
                sentencesToCount = sentencesToCount.slice(0, characterLimit)
            }
        }

        if (excludeChecked) {
            charactersToCount = charactersToCount.split(" ")
            charactersToCount = charactersToCount.join("")
        }
        countCharacter = charactersToCount.length
        countWord = wordsToCount.split(" ").filter((sentence) => sentence !== "").length
        if (sentencesToCount.includes(".")) {
            countSentence = sentencesToCount.split(".").filter((sentence) => sentence !== "").length
        } else {
            countSentence = 1
        }
// chart
        const letterCount = {}
        const matches = sentencesToCount.match(/[a-zA-Z]/g);
        matches.forEach(char => {
            const upperChar = char.toUpperCase()
            letterCount[upperChar] = (letterCount[upperChar] || 0) + 1
        })

        console.log(letterCount)
        letterCountSorted = Object.fromEntries(
            Object.entries(letterCount).sort(([, a], [, b]) => b - a))
        console.log(letterCountSorted)
    }

    return (
        <div className={styles.result}>
            <Carts
                characters={countCharacter}
                words={countWord}
                sentences={countSentence}
                excludeChecked={excludeChecked}/>
            <Chart letterCountSorted={letterCountSorted}/>
        </div>)

}

export default Result