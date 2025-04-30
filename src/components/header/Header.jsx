import ModeSwitch from './ModeSwitch.jsx';
import styles from './Header.module.css';
import logoLight from '../../assets/logo-light-theme.svg';
import logoDark from '../../assets/logo-dark-theme.svg';
import {ReactSVG} from "react-svg";

function Header() {
    return (<nav>
        <div className={styles.logo}>
            <ReactSVG src={logoLight} className={styles.logo_light}/>
            <ReactSVG src={logoDark} className={styles.logo_dark}/>
        </div>
        <div>
            <ModeSwitch/>
        </div>
    </nav>)
}

export default Header