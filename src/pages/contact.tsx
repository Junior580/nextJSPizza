import styles from '../styles/contact.module.css'
import Image from 'next/image'
import pizzaLeft from '../../public/img/pizzaLeft.jpg'

const Contact: React.FC = () => {
  return (
    <>
      <main className={styles.container}>
        <Image src={pizzaLeft} alt='pizzaLeft' />

        <div className={styles.form}>
          <form action='POST'>
            <h1>Contact Us</h1>

            <label htmlFor='name' className={styles.formLabel}>
              {/* Full Name */}
              <input
                className={styles.formControl}
                type='text'
                name='name'
                placeholder='Enter full name...'
              />
            </label>

            <label htmlFor='email' className={styles.formLabel}>
              {/* Email */}
              <input
                className={styles.formControl}
                type='text'
                name='email'
                placeholder='Enter email...'
              />
            </label>

            <label className={styles.formLabel} htmlFor='message'>
              {/* Message */}
              <textarea
                className={styles.formControl}
                name='message'
                placeholder='Enter message...'
                rows={6}
                required
              ></textarea>
            </label>

            <button type='submit' className={styles.btnMessage}>
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  )
}

export default Contact
