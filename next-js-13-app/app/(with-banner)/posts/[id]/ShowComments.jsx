'use client'

import { useState, useEffect } from 'react'
import styles from './comments/comments.module.css'

const BIRD_AVATARS = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXROZRdgt62i9mMtqXD2GEFYZWIsLgdD-aF6yzTzBiyA&s',
  'https://static.wikia.nocookie.net/heroe/images/5/55/Chuck_clasico_1_AB.png/revision/latest?cb=20210723031917&path-prefix=es',
  'https://static.wikia.nocookie.net/angrybirds/images/3/36/9V8YAkqV.png/revision/latest/scale-to-width-down/250?cb=20220430150804',
  'https://preview.redd.it/i-cant-be-the-only-one-who-thought-this-bird-was-a-boy-v0-grhktjdirqg91.jpg?width=640&crop=smart&auto=webp&s=5a294208f6918535ba6d951cbce2c4ef7fc35d0c',
  'https://static.wikia.nocookie.net/angrybirdsfanon/images/4/46/BluesToons.png/revision/latest?cb=20201019183123&path-prefix=es',
]

export default function ShowComments({ postId }) {
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(res => res.json())
      .then(data => setComments(data.slice(0, 5)))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [postId])

  return (
    <section className={styles.container}>
      <h3 className={styles.heading}>💬 Comentarios</h3>
      {loading ? (
        <p className={styles.loadingMsg}>🔄 Cargando comentarios...</p>
      ) : (
        <ul className={styles.commentsList}>
          {comments.map((c, i) => (
            <li key={c.id} className={styles.comment}>
              <img
                src={BIRD_AVATARS[i % 5]}
                alt="pájaro"
                className={styles.commentAvatar}
              />
              <div className={styles.commentContent}>
                <h4 className={styles.commentTitle}>{c.name.split(' ').slice(0, 4).join(' ')}</h4>
                <p className={styles.commentBody}>{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
