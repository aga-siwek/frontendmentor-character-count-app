import ModeSwitch from './ModeSwitch.jsx';
import styles from './Header.module.css';
import logoLight from '../../assets/logo-light-theme.svg';
import logoDark from '../../assets/logo-dark-theme.svg';
import {ReactSVG} from "react-svg";
import {useEffect} from "react";

function Header({isDark, handleSwitch}) {

    useEffect(() => {
        const htmlElement = document.documentElement;

        if (isDark) {
            htmlElement.classList.remove('light')
        } else {
            htmlElement.classList.add('light')
        }
    }, [isDark])

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                {isDark ? <ReactSVG src={logoDark} className={styles.logo_img}/> :
                    <ReactSVG src={logoLight} className={styles.logo_img}/>}
            </div>
            <div>
                <ModeSwitch handleSwitch={handleSwitch} isDark={isDark}/>
            </div>
        </nav>
    )
}

export default Header