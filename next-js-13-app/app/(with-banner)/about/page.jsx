import styles from './about.module.css'

const birds = [
  { name: 'Red', role: 'El Líder', avatar: '/bird-red.svg', desc: 'Gruñón pero leal. Siempre el primero en defender el nido.' },
  { name: 'Chuck', role: 'El Veloz', avatar: '/bird-yellow.svg', desc: 'El más rápido de la bandada. Siempre en movimiento.' },
  { name: 'Bomb', role: 'La Bomba', avatar: '/bird-black.svg', desc: 'Explosivo cuando se enoja. Pero en el fondo es noble.' },
  { name: 'Matilda', role: 'La Pacífica', avatar: '/bird-white.svg', desc: 'Prefiere la paz, pero no le temas si la provocas.' },
  { name: 'Los Blues', role: 'El Trío', avatar: '/bird-blue.svg', desc: 'Jim, Jake y Jay: tres en uno, imparables juntos.' },
]

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <img src="/bird-red.svg" alt="Red" className={styles.heroAvatar} />
        <div>
          <h1 className={styles.heroName}>Red — El Líder</h1>
          <p className={styles.heroBio}>
            Soy el encargado de proteger nuestra isla y nuestros huevos de los cerdos verdes.
            Puede que no tenga poderes especiales, pero mi determinación no tiene igual.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}><strong>4.8k</strong><span>Seguidores</span></div>
            <div className={styles.stat}><strong>142</strong><span>Posts</span></div>
            <div className={styles.stat}><strong>3</strong><span>Siguiendo</span></div>
          </div>
        </div>
      </section>

      <h2 className={styles.sectionTitle}>🐦 La Bandada</h2>
      <div className={styles.grid}>
        {birds.map((b) => (
          <div key={b.name} className={styles.birdCard}>
            <img src={b.avatar} alt={b.name} className={styles.birdAvatar} />
            <div className={styles.birdName}>{b.name}</div>
            <div className={styles.birdRole}>{b.role}</div>
            <p className={styles.birdDesc}>{b.desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}