import Post from './components/Post'
import Sidebar from './components/Sidebar'
import styles from './page.module.css'

const posts = [
  {
    id: '1',
    author: { name: 'Red', avatar: '/bird-red.svg', role: 'El Líder' },
    content: '¡Cerdos, si roban nuestros huevos una vez más, los haré volar con todo! 🔴💢',
    timestamp: '2h',
    likes: 142,
    comments: 31,
  },
  {
    id: '2',
    author: { name: 'Chuck', avatar: '/bird-yellow.svg', role: 'El Veloz' },
    content: '¡Pasé tan rápido por el castillo que los cerdos ni me vieron! ⚡ ¿Alguien más bate su propio récord hoy?',
    timestamp: '4h',
    likes: 98,
    comments: 22,
  },
  {
    id: '3',
    author: { name: 'Bomb', avatar: '/bird-black.svg', role: 'La Bomba' },
    content: 'Intenta mantener la calma... pero cuando veo cerdos verdes... 💥💥💥',
    timestamp: '6h',
    likes: 76,
    comments: 18,
  },
  {
    id: '4',
    author: { name: 'Matilda', avatar: '/bird-white.svg', role: 'La Pacífica' },
    content: 'Paz y amor, pero que quede claro: nadie toca mi nido. 🥚🌼',
    timestamp: '1d',
    likes: 53,
    comments: 9,
  },
  {
    id: '5',
    author: { name: 'Los Blues', avatar: '/bird-blue.svg', role: 'El Trío' },
    content: '¡Nos dividimos en tres! ¿Quién necesita uno cuando puedes ser tres? 💙💙💙',
    timestamp: '2d',
    likes: 211,
    comments: 44,
  },
]

export default function HomePage() {
  return (
    <main className={styles.container}>
      <section className={styles.feed}>
        <h2>Inicio</h2>
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