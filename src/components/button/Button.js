import clsx from "clsx"
import styles from "./Button.module.css"

export default function Button (props){
    return <button className={clsx(styles.root, props.className)}>{props.children}</button>
}