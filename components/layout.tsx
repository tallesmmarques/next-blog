import Link from 'next/link'
import style from './layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={style.masterContainer}>
      <header>
        <Link href="/">
          <h1 className={style.logoTxt}>NextStore</h1>
        </Link>
      </header>
      <div>{children}</div>
    </div>
  )
}

export default Layout
