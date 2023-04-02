import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import BannerImage from '../../public/img/pizza.jpeg'

const Home: React.FC = () => {
  return (
    <main className={styles.container}>
      <Image src={BannerImage} alt='bannePizza' />

      <div className={styles.title}>
        <h1>Pedro's Pizzeria</h1>

        <p>PIZZA TO FIT ANY TASTE</p>

        <Link href={'/menu'}>
          <button className={styles.btnOrder}>Order now</button>
        </Link>
      </div>
    </main>
  )
}

export default Home
