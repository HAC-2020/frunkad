import styles from '../styles/Layout.module.css';

function Layout({ children }) {
    return (<div className={styles.container}>
        {children}
    </div>);
}

export default Layout;