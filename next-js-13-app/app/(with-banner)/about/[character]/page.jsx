import Link from 'next/link'
import styles from './character.module.css'

const CHARACTERS = {
  red: {
    name: 'Red',
    role: 'El Líder 🔴',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXROZRdgt62i9mMtqXD2GEFYZWIsLgdD-aF6yzTzBiyA&s',
    accent: '#E8302A',
    power: '💢 Grito sónico que aturde a los cerdos cercanos',
    bio: 'Red es el líder indiscutible de la Bandada. Sin poderes especiales al principio, su determinación y valentía lo convierten en el corazón del equipo. Apareció en el primer Angry Birds en 2009 y se ha convertido en el icono de la saga entera.',
    stats: { 'Seguidores': '4.8k', 'Posts': '142', 'Batallas': '380', 'Huevos salvados': '1.204' },
    facts: [
      'Es el primer personaje jugable de toda la saga (2009)',
      'En Angry Birds 2 adquirió el poder del grito sónico',
      'Protagonizó las películas de Angry Birds (2016 y 2019)',
      'Su color rojo representa la rabia y la pasión por proteger',
      'Actúa como embajador de Bird Island ante cualquier amenaza',
    ],
    quotes: [
      '¡Nadie toca nuestros huevos mientras yo esté aquí!',
      'No necesito poderes especiales. ¡Tengo determinación!',
    ],
  },
  chuck: {
    name: 'Chuck',
    role: 'El Veloz ⚡',
    avatar: 'https://static.wikia.nocookie.net/heroe/images/5/55/Chuck_clasico_1_AB.png/revision/latest?cb=20210723031917&path-prefix=es',
    accent: '#D4AC00',
    power: '⚡ Aceleración súbita en línea recta al tocar la pantalla',
    bio: 'Chuck es el pájaro más rápido de la bandada. Amarillo como un rayo, acelera en pleno vuelo para romper estructuras de madera con facilidad. Habla muy rápido, piensa más rápido, y siempre está lleno de energía positiva.',
    stats: { 'Seguidores': '3.2k', 'Posts': '98', 'Batallas': '290', 'Huevos salvados': '876' },
    facts: [
      'Su poder de aceleración es el más útil contra estructuras de madera',
      'Aparece como personaje jugable desde el Angry Birds original',
      'En las películas es el mejor amigo de Red',
      'Su nombre completo es "Charles Chuck Birdie"',
      'Puede alcanzar velocidades de hasta 300 km/h según el lore oficial',
    ],
    quotes: [
      '¡Pasé tan rápido que ni se dieron cuenta! ⚡',
      '¿Rápido? Yo soy LA velocidad personificada.',
    ],
  },
  bomb: {
    name: 'Bomb',
    role: 'La Bomba 💥',
    avatar: 'https://static.wikia.nocookie.net/angrybirds/images/3/36/9V8YAkqV.png/revision/latest/scale-to-width-down/250?cb=20220430150804',
    accent: '#444444',
    power: '💥 Explosión que destruye piedra y hielo en un radio amplio',
    bio: 'Bomb es el pájaro más explosivo (literalmente) de la bandada. Negro como el carbón, explota cuando se asusta o se enoja. Es el más efectivo contra piedra y hielo. En el fondo es muy noble y calmado... hasta que lo provocan.',
    stats: { 'Seguidores': '2.1k', 'Posts': '76', 'Batallas': '310', 'Huevos salvados': '934' },
    facts: [
      'Su explosión es la más destructiva del equipo original',
      'Técnicamente explota por un mecanismo fisiológico, no por magia',
      'Es el más efectivo contra estructuras de piedra',
      'Su hermano "Fire Bomb" aparece en Angry Birds Space',
      'En las animaciones muestra una personalidad muy tranquila y zen',
    ],
    quotes: [
      'Intento calmarme pero... ¡KA-BOOOOM! 💥',
      'Perdón por los daños colaterales. Más o menos.',
    ],
  },
  matilda: {
    name: 'Matilda',
    role: 'La Pacífica 🌸',
    avatar: 'https://preview.redd.it/i-cant-be-the-only-one-who-thought-this-bird-was-a-boy-v0-grhktjdirqg91.jpg?width=640&crop=smart&auto=webp&s=5a294208f6918535ba6d951cbce2c4ef7fc35d0c',
    accent: '#4CAF50',
    power: '🥚 Lanza un huevo-bomba hacia abajo mientras continúa volando',
    bio: 'Matilda es la más calmada y maternal de la bandada. Blanca como la paz que predica, puede lanzar huevos explosivos hacia abajo mientras continúa el vuelo. Instruye a los demás en meditación y siempre busca resolver conflictos pacíficamente.',
    stats: { 'Seguidores': '1.9k', 'Posts': '53', 'Batallas': '198', 'Huevos salvados': '701' },
    facts: [
      'Su poder permite dos ataques en uno: ella misma + el huevo',
      'Es la única hembra del equipo principal original',
      'Tiene un jardín zen cuidadosamente podado en Bird Island',
      'Imparte talleres de meditación a los demás pájaros',
      'En Angry Birds 2, su huevo puede convertirse en una jaula de hielo',
    ],
    quotes: [
      'Prefiero la paz... pero no toques mis huevos. 🥚',
      'Un poco de meditación antes de derribar el castillo. 🧘',
    ],
  },
  'los-blues': {
    name: 'Los Blues',
    role: 'El Trío 💙💙💙',
    avatar: 'https://static.wikia.nocookie.net/angrybirdsfanon/images/4/46/BluesToons.png/revision/latest?cb=20201019183123&path-prefix=es',
    accent: '#4FA8D5',
    power: '🔵 Se dividen en 3 pájaros al tocar la pantalla en vuelo',
    bio: 'Jim, Jake y Jay son el trío inseparable de la bandada. Pequeños y azules, se ven inofensivos... hasta que se dividen en tres simultáneamente. Son los más efectivos contra estructuras de hielo y su energía es absolutamente contagiosa.',
    stats: { 'Seguidores': '5.6k', 'Posts': '211', 'Batallas': '445', 'Huevos salvados': '1.567' },
    facts: [
      'Son tres hermanos gemelos: Jim, Jake y Jay',
      'Su división es el primer poder especial que aparece en el juego',
      'Son los más efectivos contra estructuras de hielo',
      'Aparecen como los miembros más jóvenes de la bandada',
      'Se desbloquean en el Mundo 2 del Angry Birds original (2009)',
    ],
    quotes: [
      '¡Somos tres, somos imparables! 💙💙💙',
      'Uno para todos y tres para cada obstáculo que se cruce.',
    ],
  },
  cerdo: {
    name: 'Cerdo',
    role: 'Soldado Cerdo 🐷',
    avatar: 'https://static.wikia.nocookie.net/angrybirds/images/b/ba/PigArt.png/revision/latest/scale-to-width/360?cb=20240416205931&path-prefix=es',
    accent: '#5AA832',
    power: '🪖 Casco protector que duplica su resistencia al impacto',
    bio: 'El soldado raso del ejército del Rey Cerdo. Verde, torpe, y completamente dedicado a robar huevos. Hay miles de ellos en Pig Island y su única misión es proteger los huevos robados de los enfurecidos pájaros. Raramente tienen éxito.',
    stats: { 'Seguidores': '892', 'Posts': '41', 'Batallas': '678', '"Victorias"': 'Pocas 🐷' },
    facts: [
      'Son los antagonistas de toda la saga desde el primer juego',
      'Los cerdos con casco aguantan el doble de daño antes de explotar',
      'Se ríen malvadamente cuando un pájaro falla el disparo',
      'En Bad Piggies (2012) son los protagonistas jugables',
      'Tienen tecnología propia para construir vehículos artesanales',
    ],
    quotes: [
      '¡Oink! ¿Qué pájaros? Yo no vi a nadie... 👀',
      '¡Solo seguimos órdenes del Rey! ¡Culpadle a él!',
    ],
  },
  'rey-cerdo': {
    name: 'Rey Cerdo',
    role: 'El Gran Villano 👑',
    avatar: 'https://static.wikia.nocookie.net/angrybirds/images/7/76/Smoothcheeks_Chrome.png/revision/latest?cb=20250606224524&path-prefix=es',
    accent: '#8B6914',
    power: '👑 Corona dorada + mando sobre un ejército infinito de cerdos',
    bio: 'El Rey Cerdo (Leonard en las películas y Angry Birds 2) es el villano principal de la saga. Obsesionado con los huevos, ha construido innumerables fortalezas. Inteligente y arrogante, siempre subestima a los pájaros... y siempre paga el precio.',
    stats: { 'Seguidores': '2.1k', 'Posts': '156', 'Fortalezas': '200+', 'Huevos robados': '-1.847 🥚' },
    facts: [
      'Su nombre oficial es "Leonard" en Angry Birds 2 y las películas',
      'Es el antagonista principal desde el nivel 1 del juego original',
      'Tiene la corona y el casco más resistentes de todos los cerdos',
      'En las películas muestra una personalidad más compleja y cómica',
      'Ha ordenado la construcción de más de 200 fortalezas documentadas',
    ],
    quotes: [
      '¡JA! ¡Los huevos son MÍOS por derecho real! 👑',
      '¡GUARDIAS! ¡Construid otro castillo, pero esta vez de diamante!',
    ],
  },
}

export default async function CharacterPage({ params }) {
  const { character } = await params
  const char = CHARACTERS[character]

  if (!char) {
    return (
      <main style={{ maxWidth: 600, margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
        <p style={{ fontSize: 60 }}>🐦</p>
        <h1 style={{ fontFamily: 'Bangers, cursive', fontSize: 36, color: '#E8302A' }}>
          Personaje no encontrado
        </h1>
        <Link href="/about" style={{ color: '#E8302A', fontWeight: 700 }}>
          ← Volver a About
        </Link>
      </main>
    )
  }

  return (
    <main className={styles.page} style={{ '--char-color': char.accent }}>
      <Link href="/about" className={styles.back}>← Volver a La Bandada</Link>

      <div className={styles.profileCard}>
        <div className={styles.profileBanner} />
        <div className={styles.profileHeader}>
          <img src={char.avatar} alt={char.name} className={styles.profileAvatar} />
          <h1 className={styles.profileName}>{char.name}</h1>
          <p className={styles.profileRole}>{char.role}</p>
          <p className={styles.profileBio}>{char.bio}</p>
          <div className={styles.statsGrid}>
            {Object.entries(char.stats).map(([label, val]) => (
              <div key={label} className={styles.statBox}>
                <strong>{val}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>⚡ Poder Especial</h2>
        <div className={styles.powerBadge}>{char.power}</div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>📋 Datos Curiosos</h2>
        <ul className={styles.factsList}>
          {char.facts.map((f, i) => (
            <li key={i} className={styles.factItem}>{f}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>💬 Frases Célebres</h2>
        <div className={styles.quoteList}>
          {char.quotes.map((q, i) => (
            <blockquote key={i} className={styles.quote}>{q}</blockquote>
          ))}
        </div>
      </div>
    </main>
  )
}
