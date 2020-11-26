import style from './layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={style.masterContainer}>
      <header>
        <h1 className={style.logoTxt}>NextStore</h1>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  )
}

export default Layout
