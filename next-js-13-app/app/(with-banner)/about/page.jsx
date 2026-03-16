import Link from 'next/link'
import styles from './about.module.css'

const birds = [
  { name: 'Red', role: 'El Líder', slug: 'red', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXROZRdgt62i9mMtqXD2GEFYZWIsLgdD-aF6yzTzBiyA&s', desc: 'Gruñón pero leal. Siempre el primero en defender el nido.' },
  { name: 'Chuck', role: 'El Veloz', slug: 'chuck', avatar: 'https://static.wikia.nocookie.net/heroe/images/5/55/Chuck_clasico_1_AB.png/revision/latest?cb=20210723031917&path-prefix=es', desc: 'El más rápido de la bandada. Siempre en movimiento.' },
  { name: 'Bomb', role: 'La Bomba', slug: 'bomb', avatar: 'https://static.wikia.nocookie.net/angrybirds/images/3/36/9V8YAkqV.png/revision/latest/scale-to-width-down/250?cb=20220430150804', desc: 'Explosivo cuando se enoja. Pero en el fondo es noble.' },
  { name: 'Matilda', role: 'La Pacífica', slug: 'matilda', avatar: 'https://preview.redd.it/i-cant-be-the-only-one-who-thought-this-bird-was-a-boy-v0-grhktjdirqg91.jpg?width=640&crop=smart&auto=webp&s=5a294208f6918535ba6d951cbce2c4ef7fc35d0c', desc: 'Prefiere la paz, pero no le temas si la provocas.' },
  { name: 'Los Blues', role: 'El Trío', slug: 'los-blues', avatar: 'https://static.wikia.nocookie.net/angrybirdsfanon/images/4/46/BluesToons.png/revision/latest?cb=20201019183123&path-prefix=es', desc: 'Jim, Jake y Jay: tres en uno, imparables juntos.' },
]

const pigs = [
  { name: 'Cerdo', role: 'Soldado Cerdo', slug: 'cerdo', avatar: 'https://static.wikia.nocookie.net/angrybirds/images/b/ba/PigArt.png/revision/latest/scale-to-width/360?cb=20240416205931&path-prefix=es', desc: 'El soldado torpe del Rey. Verde, travieso y siempre en busca de huevos.' },
  { name: 'Rey Cerdo', role: 'El Gran Villano', slug: 'rey-cerdo', avatar: 'https://static.wikia.nocookie.net/angrybirds/images/7/76/Smoothcheeks_Chrome.png/revision/latest?cb=20250606224524&path-prefix=es', desc: 'El cerebro detrás de todos los robos. Obsesionado con los huevos.' },
]

const gameStats = [
  { value: '4.000M+', label: 'Descargas' },
  { value: '2009', label: 'Lanzamiento' },
  { value: '16+', label: 'Juegos' },
  { value: '79', label: 'Países #1' },
]

export default function AboutPage() {
  return (
    <main className={styles.page}>

      {/* ─── TÍTULO ─── */}
      <h1 className={styles.pageTitle}>About</h1>

      {/* ─── SOBRE EL JUEGO ─── */}
      <section className={styles.gameInfo}>
        <h2 className={styles.sectionTitle}>🎮 Sobre Angry Birds</h2>
        <p className={styles.gameDesc}>
          <strong>Angry Birds</strong> es la franquicia de videojuegos más descargada de la historia,
          creada por <strong>Rovio Entertainment</strong> en Finlandia. Desde su lanzamiento en
          <strong> 2009</strong> para iOS, la saga ha crecido a más de 16 juegos distintos, dos
          películas de animación, parques temáticos y merchandising global. La mecánica es simple:
          lanza pájaros con una honda para destruir las fortalezas de los cerdos y recuperar
          los huevos robados.
        </p>
        <div className={styles.gameStatsGrid}>
          {gameStats.map(s => (
            <div key={s.label} className={styles.gameStat}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── LA BANDADA ─── */}
      <h2 className={styles.sectionTitle}>🐦 La Bandada</h2>
      <p className={styles.subDesc}>Haz clic en un personaje para ver su perfil completo.</p>
      <div className={styles.grid}>
        {birds.map((b) => (
          <Link key={b.name} href={`/about/${b.slug}`} className={styles.birdCard}>
            <img src={b.avatar} alt={b.name} className={styles.birdAvatar} />
            <div className={styles.birdName}>{b.name}</div>
            <div className={styles.birdRole}>{b.role}</div>
            <p className={styles.birdDesc}>{b.desc}</p>
            <span className={styles.viewProfile}>Ver perfil →</span>
          </Link>
        ))}
      </div>

      {/* ─── LOS VILLANOS ─── */}
      <h2 className={styles.sectionTitle} style={{ marginTop: 40 }}>🐷 Los Villanos</h2>
      <div className={styles.grid}>
        {pigs.map((b) => (
          <Link key={b.name} href={`/about/${b.slug}`} className={`${styles.birdCard} ${styles.pigCard}`}>
            <img src={b.avatar} alt={b.name} className={styles.birdAvatar} />
            <div className={styles.birdName}>{b.name}</div>
            <div className={styles.birdRole}>{b.role}</div>
            <p className={styles.birdDesc}>{b.desc}</p>
            <span className={styles.viewProfile}>Ver perfil →</span>
          </Link>
        ))}
      </div>

    </main>
  )
}