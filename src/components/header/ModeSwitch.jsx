import styles from "./ModeSwitch.module.css"
import moonIcon from '../../assets/icon-moon.svg'
import sunIcon from '../../assets/icon-sun.svg'
import {ReactSVG} from "react-svg";

function ModeSwitch() {
    return (
        <div className={styles.switch}>
            <ReactSVG src={moonIcon} className={styles.moon} />
            <ReactSVG src={sunIcon} className={styles.sun} />
    </div>)
}



export default ModeSwitch