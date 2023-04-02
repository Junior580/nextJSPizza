import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import pizza from '../../public/img/pizzaLogo.png'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header>
      <nav className={styles.container}>
        <Link href={'/'}>
          <Image src={pizza} alt='btc-image' />
        </Link>
        <div className={styles.containerList}>
          <ul>
            <Link href={'/'}>
              <li>Home</li>
            </Link>
            <Link href={'/menu'}>
              <li>Menu</li>
            </Link>
            <Link href={'/about'}>
              <li>About</li>
            </Link>
            <Link href={'/contact'}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  )
}
