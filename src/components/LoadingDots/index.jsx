import styles from './LoadingDots.module.css'

const LoadingDots = () => {
    return (
        <>
            <span className={ `${styles.dot} ${styles.dot1}` }>.</span>
            <span className={ `${styles.dot} ${styles.dot2}` }>.</span>
            <span className={ `${styles.dot} ${styles.dot3}` }>.</span>
        </>
    )
}
export default LoadingDots