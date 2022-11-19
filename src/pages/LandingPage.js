import Container from "../layout/Container";
import Navigation from "../layout/Navigation";
import Content from "../landing-content/Content";
import telegram from "../images/telegram.svg"
import viber from "../images/viber.svg"
import whatsapp from "../images/whatsapp.svg"
import styles from "./LandingPage.module.scss"
import Footer from "../layout/Footer";
import Background from "../layout/Background";

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
    {name: "Партнёрская программа"},
    {name: "Вакансии"}
]
const footerMenuItems = [
    {name: "Расчёт стоимости"},
    {name: "Услуги"},
    {name: "Виджеты"},
    {name: "Интеграции"},
    {name: "Наши клиенты"},
    {name: "Кейсы"},
    {name: "Благодарственные письма"},
    {name: "Сертификаты"},
    {name: "Блог на Youtube"},
    {name: "Вопрос / Ответ"}
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