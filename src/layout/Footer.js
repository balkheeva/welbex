import styles from "./Footer.module.scss"

export default function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__aboutUs}>
                <div className={styles.footer__title}>О компании</div>
                {props.footerAboutUsItems.map(item => (
                    <a key={item.name} href={item.href}className={styles.footer__item}>{item.name}</a>
                ))}
            </div>
            <div className={styles.footer__menu}>
                <div className={styles.footer__title}>Меню</div>
                {groupEls(props.footerMenuItems).map((group, i) => (
                    <div className={styles.footer__group} key={i}>
                        {group.map(item => (
                            <a key={item.name} href={item.href} className={styles.footer__item}>{item.name}</a>
                        ))}
                    </div>
                ))}
            </div>
            <div className={styles.footer__contacts}>
                <div className={styles.footer__title}>Контакты</div>
                <div className={styles.footer__contacts__item}>{props.phone}</div>
                <div className={styles.footer__icons}>
                    {props.socialItems.map(item => (
                        <img key={item.icon} src={item.icon} alt=""/>
                    ))}
                </div>
                <div className={styles.footer__contacts__item}>Москва, Путевой проезд 3с1, к 902</div>
                <div className={styles.footer__contacts__copyright}>
                    <div>©WELBEX 2022. Все права защищены.</div>
                    <div><a href="">Политика конфиденциальности</a></div>
                </div>
            </div>

        </div>
    )
}

function groupEls(els) {
    const groups = []
    els.forEach((el, index) => {
        const groupIndex = index < Math.ceil(els.length / 2) ? 0 : 1;
        groups[groupIndex] = groups[groupIndex] || [];
        groups[groupIndex].push(el);
    })
    return groups
}