import styles from "./Background.module.scss"
export default function Background(){
    return (
        <div className={styles.elements}>
            <div className={styles.elements__noise}></div>
            <div className={styles.elements__purpleLight}>
            </div>
            <div className={styles.elements__purpleBall}>
            </div>
            <div className={styles.elements__redBall}>
            </div>
            <div className={styles.elements__redLight}>
            </div>
        </div>

    )
}