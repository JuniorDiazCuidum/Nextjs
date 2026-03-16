import styles from './about.module.css'

const birds = [
  { name: 'Red', role: 'El Líder', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXROZRdgt62i9mMtqXD2GEFYZWIsLgdD-aF6yzTzBiyA&s', desc: 'Gruñón pero leal. Siempre el primero en defender el nido.' },
  { name: 'Chuck', role: 'El Veloz', avatar: 'https://static.wikia.nocookie.net/heroe/images/5/55/Chuck_clasico_1_AB.png/revision/latest?cb=20210723031917&path-prefix=es', desc: 'El más rápido de la bandada. Siempre en movimiento.' },
  { name: 'Bomb', role: 'La Bomba', avatar: 'https://static.wikia.nocookie.net/angrybirds/images/3/36/9V8YAkqV.png/revision/latest/scale-to-width-down/250?cb=20220430150804', desc: 'Explosivo cuando se enoja. Pero en el fondo es noble.' },
  { name: 'Matilda', role: 'La Pacífica', avatar: 'https://preview.redd.it/i-cant-be-the-only-one-who-thought-this-bird-was-a-boy-v0-grhktjdirqg91.jpg?width=640&crop=smart&auto=webp&s=5a294208f6918535ba6d951cbce2c4ef7fc35d0c', desc: 'Prefiere la paz, pero no le temas si la provocas.' },
  { name: 'Los Blues', role: 'El Trío', avatar: 'https://static.wikia.nocookie.net/angrybirdsfanon/images/4/46/BluesToons.png/revision/latest?cb=20201019183123&path-prefix=es', desc: 'Jim, Jake y Jay: tres en uno, imparables juntos.' },
]

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXROZRdgt62i9mMtqXD2GEFYZWIsLgdD-aF6yzTzBiyA&s" alt="Red" className={styles.heroAvatar} />
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