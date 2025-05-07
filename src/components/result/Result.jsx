import Carts from "./Carts.jsx";
import Chart from "./Chart.jsx";
import styles from "./Result.module.css"

function Result({message, excludeChecked, limitChecked, characterLimit}) {
    let charactersToCount = message
    let wordsToCount = message
    let sentencesToCount = message
    let letterCountSorted

    const countCharacters = () => {
        return charactersToCount.length
    }
    const countWords = () => {
        return wordsToCount.split(" ").filter((sentence) => sentence !== "").length
    }
    const countSentences = () => {
        if (!sentencesToCount) {
            return 0
        }
        if (sentencesToCount.includes(".")) {
            return sentencesToCount.split(".").filter((sentence) => sentence !== "").length
        } else {
            return 1
        }
    }

    if (message.length > 0) {
// carts
        if (limitChecked && characterLimit) {
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
// chart
        const letterCount = {}
        const matches = sentencesToCount.match(/[a-zA-Z]/g);
        matches.forEach(char => {
            const upperChar = char.toUpperCase()
            letterCount[upperChar] = (letterCount[upperChar] || 0) + 1
        })

        letterCountSorted = Object.fromEntries(
            Object.entries(letterCount).sort(([, a], [, b]) => b - a))
    }


    return (
        <section className={styles.result}>
            <Carts
                characters={countCharacters()}
                words={countWords()}
                sentences={countSentences()}
                excludeChecked={excludeChecked}/>
            <Chart letterCountSorted={letterCountSorted}/>
        </section>)
}

export default Result