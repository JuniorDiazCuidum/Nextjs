import Link from "next/link"
import styles from './Navigation.module.css'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
},{
  label: 'Posts',
  route: '/posts'
}]

export function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src="/bird-red.svg" alt="Logo" width={36} height={36} style={{borderRadius:'50%', background:'rgba(255,255,255,0.15)', padding:2}} />
          AngryBird Feed
        </div>
        <nav>
          <ul className={styles.Navigation}>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}