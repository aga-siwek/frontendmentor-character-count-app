import styles from "./ModeSwitch.module.css"
import moonIcon from '../../assets/icon-moon.svg'
import sunIcon from '../../assets/icon-sun.svg'
import {ReactSVG} from "react-svg";

function ModeSwitch({handleSwitch, isDark}) {
    return (
        <div className={styles.switch}>
            {isDark ?
                <ReactSVG
                    src={sunIcon}
                    className={styles.switch__icon}
                    onClick={handleSwitch}/> :
                <ReactSVG
                    src={moonIcon}
                    className={styles.switch__icon}
                    onClick={handleSwitch}/>}
        </div>)
}

export default ModeSwitch