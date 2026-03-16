import Post from './components/Post'
import Sidebar from './components/Sidebar'
import styles from './page.module.css'

const posts = [
  {
    id: '1',
    author: {
      name: 'Red',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXROZRdgt62i9mMtqXD2GEFYZWIsLgdD-aF6yzTzBiyA&s',
      role: 'El Líder',
    },
    content: '🎮 Angry Birds se lanzó en 2009 para iOS y cambió para siempre los juegos móviles. Más de 4.000 millones de descargas en todo el mundo, ¡somos el juego más descargado de la historia! 🏆🥚',
    timestamp: '1h',
    likes: 3200,
    comments: 87,
  },
  {
    id: '2',
    author: {
      name: 'Chuck',
      avatar: 'https://static.wikia.nocookie.net/heroe/images/5/55/Chuck_clasico_1_AB.png/revision/latest?cb=20210723031917&path-prefix=es',
      role: 'El Veloz',
    },
    content: '⚡ DATO RÁPIDO: ¿Sabías que hay más de 800 niveles repartidos en todos los juegos de Angry Birds? Angry Birds Reloaded, Angry Birds 2, Angry Birds Go... ¡La saga no para! ¿Cuál es tu versión favorita? 👇',
    timestamp: '3h',
    likes: 1540,
    comments: 63,
  },
  {
    id: '3',
    author: {
      name: 'Piggy',
      avatar: 'https://static.wikia.nocookie.net/angrybirds/images/b/ba/PigArt.png/revision/latest/scale-to-width/360?cb=20240416205931&path-prefix=es',
      role: 'Soldado Cerdo',
    },
    content: '🐷 Confesión de cerdo: nuestras estructuras de madera son las más fáciles de derribar. Las de piedra aguantan más. ¡Consejo gratis para que mejoren su puntería! ...Espera, ¿por qué dije eso? 😅',
    timestamp: '5h',
    likes: 892,
    comments: 41,
  },
  {
    id: '4',
    author: {
      name: 'Rey Cerdo',
      avatar: 'https://static.wikia.nocookie.net/angrybirds/images/7/76/Smoothcheeks_Chrome.png/revision/latest?cb=20250606224524&path-prefix=es',
      role: 'El Rey 👑',
    },
    content: '👑 COMUNICADO OFICIAL: Los huevos son MÍOs. Mis ingenieros han construido una fortaleza de 47 pisos en la Isla Cerdo. ¡Que vengan esos miserables pájaros! Tenemos catapultas, murallas de piedra y... ¿huevos revueltos para desayunar? 🍳😈',
    timestamp: '6h',
    likes: 2100,
    comments: 156,
  },
  {
    id: '5',
    author: {
      name: 'Matilda',
      avatar: 'https://preview.redd.it/i-cant-be-the-only-one-who-thought-this-bird-was-a-boy-v0-grhktjdirqg91.jpg?width=640&crop=smart&auto=webp&s=5a294208f6918535ba6d951cbce2c4ef7fc35d0c',
      role: 'La Pacífica',
    },
    content: '🌟 Angry Birds tiene su propio parque temático: "Angry Birds Land" en Finlandia (Särkänniemi). También hay películas — la primera en 2016 y la segunda en 2019. ¡De juego móvil a franquicia global! 🎬🎡',
    timestamp: '12h',
    likes: 4780,
    comments: 203,
  },
  {
    id: '6',
    author: {
      name: 'Bomb',
      avatar: 'https://static.wikia.nocookie.net/angrybirds/images/3/36/9V8YAkqV.png/revision/latest/scale-to-width-down/250?cb=20220430150804',
      role: 'La Bomba',
    },
    content: '💥 MECÁNICA SECRETA: Mi explosión destruye mejor el hielo y la piedra si choco primero y luego activo el poder. Los Terence (el hermano grande rojo) destrozan todo con su peso sin necesitar poderes especiales. ¡Conoced a vuestros pájaros! 🐦📊',
    timestamp: '1d',
    likes: 1230,
    comments: 58,
  },
  {
    id: '7',
    author: {
      name: 'Piggy',
      avatar: 'https://static.wikia.nocookie.net/angrybirds/images/b/ba/PigArt.png/revision/latest/scale-to-width/360?cb=20240416205931&path-prefix=es',
      role: 'Soldado Cerdo',
    },
    content: '🐽 Los cerdos sobrevivimos en los niveles dependiendo de nuestra armadura y tamaño. ¡Los cerdos con casco aguantan el doble! Dato curioso: los cerdos pequeños tienen menos HP pero son más difíciles de apuntar. ¡La estrategia importa! 🎯',
    timestamp: '1d',
    likes: 678,
    comments: 29,
  },
  {
    id: '8',
    author: {
      name: 'Los Blues',
      avatar: 'https://static.wikia.nocookie.net/angrybirdsfanon/images/4/46/BluesToons.png/revision/latest?cb=20201019183123&path-prefix=es',
      role: 'El Trío',
    },
    content: '💙 TRUCO PRO: Al lanzarnos y tocar la pantalla, nos dividimos en ¡TRES! Somos Jim, Jake y Jay. Perfectos para destruir estructuras de hielo en cadena. Un solo lanzamiento, triple daño. ¿Nos habéis usado bien? 😏',
    timestamp: '2d',
    likes: 2890,
    comments: 112,
  },
]

export default function HomePage() {
  return (
    <main className={styles.container}>
      <section className={styles.feed}>
        <h2>Home</h2>
        <div>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </section>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
    </main>
  )
}