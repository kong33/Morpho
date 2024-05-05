import Link from 'next/link';

import styles from '@/components/Header/index.module.scss';

export default function Header({ logoText }: { logoText: string }) {
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <h1 className={styles.logoText}>{logoText}</h1>
      </Link>
    </header>
  );
}
