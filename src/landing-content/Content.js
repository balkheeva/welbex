import styles from "./Content.module.scss"
import Button from "../components/button/Button";
import useIsMobile from "../hooks/useIsMobile";

const benefitItemsDesktop = [
    {title: "Виджеты", titleMob:"30\xa0виджетов", description: "30\xa0готовых решений"},
    {title: "Dashboard", titleMob:"Dashboard", description: "с показателями вашего бизнеса"},
    {title: "Skype Аудит", titleMob:"Skype Аудит", description: "отдела продаж и CRM системы"},
    {title: "35 дней", titleMob:"Месяц аmoCRM", description: "использования CRM"}
]

const button = {title: "Получить консультацию"}

export default function Content() {
    const isMobile = useIsMobile()
    return <>
        <div className={styles.content}>
            <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                <h1>Зарабатывайте больше <span className={styles.boldTitle}>с&nbsp;WELBEX</span></h1>
                <p className={styles.subtitle}>Развиваем и&nbsp;контролируем продажи за&nbsp;вас</p>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                <div className={styles.benefitTitle}>Вместе с <span
                    className={styles.benefitBoldTitle}>бесплатной</span> <span
                    className={styles.benefitBoldTitle__2}><br/>консультацией</span> мы дарим:
                </div>
                <div className={styles.benefits}>
                    {benefitItemsDesktop.map(item => (
                        <div className={styles.benefitItem} key={item.title}>
                            <span className={styles.benefitItemTitle}>{isMobile ? item.titleMob : item.title}</span>
                            {!isMobile && <span className={styles.benefitItemDesc}>{item.description}</span>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Button className={styles.consultBtn}>Получить консультацию</Button>
    </>
}