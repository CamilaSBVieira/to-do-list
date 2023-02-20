import logo from '../assets/images/logo.svg'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img
                className={styles.headerLogo}
                src={logo}
                alt='Logo'
            />
            <h1 className={styles.headerTitle}>to<span>do</span></h1>
        </header>
    )
}