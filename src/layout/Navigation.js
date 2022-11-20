import styles from './Navigation.module.scss'
import logo from "../images/logo_welbex.svg"
import useIsMobile from "../hooks/useIsMobile";


export default function Navigation(props) {
    return (
        <div className={styles.navbar}>
            <div className={styles.leftBar}>
                <div className={styles.logo}>
                    <a href="src/layout/Navigation">
                        <img src={logo} />
                    </a>
                    <p>крупный интегратор CRM в&nbsp;Росcии и&nbsp;ещё&nbsp;8&nbsp;странах</p>
                </div>
                {props.menuItems.map(item => (
                    <a key={item.navItem} className={styles.navItem} href={item.navHref}>{item.navItem}</a>
                ))}
            </div>

            <div className={styles.rightBar}>
                <a className={styles.navItem} href="src/layout/Navigation">{props.phone }</a>
                {props.socialItems.map(item => (
                    <a key={item.icon} className={styles.navItem} href={item.navHref}>
                        <img src={item.icon} alt=""/>
                    </a>
                ))}
            </div>
        </div>
    )
}