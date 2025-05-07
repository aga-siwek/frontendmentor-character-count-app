import styles from "./Chart.module.css"
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Cell} from "recharts";
import {useState} from "react";
import arrowDown from "../../assets/arrow-light.png"

function Chart({letterCountSorted}) {
    const [availableCharts, setAvailableCharts] = useState(5)
    if (letterCountSorted) {
        const total = Object.values(letterCountSorted).reduce((sum, val) => sum + val, 0);

        const handleShowMore = () => {
            setAvailableCharts(availableCharts + 5)

        }

        const showChart =  Object.entries(letterCountSorted).map(([key, value]) => {
                return (
                <div key={key} className={styles.chart__component}>
                    <div className={styles.chart__component__charakter}>{key}</div>
                    <div className={styles.chart__component__full} style={{
                        width: "100%",
                        backgroundColor: 'var(--chart-progress-color)',
                        borderRadius: '12px',
                        display: 'block',
                        height: '12px'
                    }}>
                        <div className={styles.chart__component__progress} style={{
                            width: value/total * 100 + '%',
                            backgroundColor: 'hsl(274, 90%, 80%)',
                            borderRadius: '12px',
                            display: 'block',
                            color: 'hsl(274, 90%, 80%)',
                            height: '12px'

                        }}></div>
                    </div>
                    <div className={styles.chart__component__value}>
                        <p className={styles.chart__component__value__text}>{value} ({(value/total * 100).toFixed(2) + '%'})</p>
                    </div>
                </div>
            )}).slice(0,availableCharts)

        return (
            <div className={styles.chart__container}>
                <h3 className={styles.chart__container__title}>Letter Density</h3>
                <div className={styles.chart__components} >
                {showChart}
                </div>
                {availableCharts < Object.keys(letterCountSorted).length ?
                    <div className={styles.chart__container__see__more}>
                    <p onClick={handleShowMore} className={styles.chart__container__see__more__text}><span>See more</span> <img src={arrowDown}/></p></div>: <p></p>}

            </div>
        );
    }
}

export default Chart