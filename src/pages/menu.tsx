import { FormEventHandler } from 'react'
import styles from '../styles/menu.module.css'

export default function Menu() {
  const handleSubmit = (e: FormEventHandler) => {
    console.log(data)
  }

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Name' />

          <input type='text' name='email' placeholder='Email' />

          <input type='password' name='password' placeholder='Senha' />

          <button type='submit'>Cadastrar</button>
        </form>
      </div>
    </>
  )
}
