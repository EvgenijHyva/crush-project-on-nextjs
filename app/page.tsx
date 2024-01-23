import styles from './page.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.section}>
      <p><Link href='/meals'>Meals</Link></p>
      <p><Link href='/meals/share'>Share</Link></p>
      <p><Link href='/meals/MYSLUG'>Test slug</Link></p>

      <p><Link href="/community">Community</Link></p>
    </main>
  )
}
