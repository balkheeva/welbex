import Container from "../layout/Container";
import Navigation from "../layout/Navigation";
import Content from "../landing-content/Content";
import telegram from "../images/telegram.svg"
import viber from "../images/viber.svg"
import whatsapp from "../images/whatsapp.svg"
import styles from "./LandingPage.module.scss"
import Footer from "../layout/Footer";
import Background from "../layout/Background";
import noise from "../images/noise.png"

const menuItems = [
    {navItem: "Услуги", navHref: "#"},
    {navItem: "Виджеты", navHref: "#" },
    {navItem: "Интеграции", navHref: "#" },
    {navItem: "Кейсы",  navHref: "#" },
    {navItem: "Сертификаты", navHref: "#" },
]
const socialItems = [
    {navHref: "#", icon: telegram},
    {navHref: "#" , icon: viber},
    {navHref: "#" , icon: whatsapp}
]

const footerAboutUsItems = [
    {name: "Партнёрская программа", href: "#"},
    {name: "Вакансии", href: "#"}
]
const footerMenuItems = [
    {name: "Расчёт стоимости", href: "#"},
    {name: "Услуги", href: "#"},
    {name: "Виджеты", href: "#"},
    {name: "Интеграции", href: "#"},
    {name: "Наши клиенты", href: "#"},
    {name: "Кейсы", href: "#"},
    {name: "Благодарственные письма", href: "#"},
    {name: "Сертификаты", href: "#"},
    {name: "Блог на Youtube", href: "#"},
    {name: "Вопрос / Ответ", href: "#"}
]



export default function Welbex() {
    return <>
        <Background />
        <div className={styles.content}>
            <Container>
                <Navigation menuItems={menuItems} socialItems={socialItems} phone="+7 555 55-55"/>
                <Content />
                <Footer footerAboutUsItems={footerAboutUsItems} footerMenuItems={footerMenuItems} socialItems={socialItems} phone="+7 555 55-55"/>
            </Container>
        </div>

    </>
}