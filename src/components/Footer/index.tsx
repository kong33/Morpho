import styles from '@/components/Footer/index.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.textWrapper}>
        <p>phone: 010-4288-0941</p>
        <p> @Copy Right : MIT</p>
      </div>
    </footer>
  );
}
