import styles from "./Chart.module.css"

function Chart({letterCountSorted}) {
    if (letterCountSorted) {

        return (
            <div>
                {Object.entries(letterCountSorted).map(([key, value]) => (<p>{key}: {value}</p>))}
            </div>)
    }
}

export default Chart