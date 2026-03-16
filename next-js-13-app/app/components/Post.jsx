"use client"
import { useState } from 'react'
import styles from './Post.module.css'

const BIRD_AVATARS = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXROZRdgt62i9mMtqXD2GEFYZWIsLgdD-aF6yzTzBiyA&s',
  'https://static.wikia.nocookie.net/heroe/images/5/55/Chuck_clasico_1_AB.png/revision/latest?cb=20210723031917&path-prefix=es',
  'https://static.wikia.nocookie.net/angrybirds/images/3/36/9V8YAkqV.png/revision/latest/scale-to-width-down/250?cb=20220430150804',
  'https://preview.redd.it/i-cant-be-the-only-one-who-thought-this-bird-was-a-boy-v0-grhktjdirqg91.jpg?width=640&crop=smart&auto=webp&s=5a294208f6918535ba6d951cbce2c4ef7fc35d0c',
  'https://static.wikia.nocookie.net/angrybirdsfanon/images/4/46/BluesToons.png/revision/latest?cb=20201019183123&path-prefix=es',
]

const RED_AVATAR = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXROZRdgt62i9mMtqXD2GEFYZWIsLgdD-aF6yzTzBiyA&s'

const BIRD_NAMES = ['Red', 'Chuck', 'Bomb', 'Matilda', 'Los Blues']

const BIRD_DIALOGS = [
  [
    '¡Esos cerdos no pararán hasta que yo los detenga! 💢',
    '¡Nadie roba nuestros huevos y sale impune! 🔴',
    'Mi enojo es mi poder. ¡Y hoy estoy MUY enojado! 💢🔴',
    '¡Proteger el nido es lo más importante, siempre!',
    '¡Si los cerdos vienen, ya saben lo que les espera! 😤',
  ],
  [
    '¡Pasé tan rápido que ni se dieron cuenta! ⚡',
    'La velocidad es mi superpoder, ¡nadie me alcanza! 💨',
    '¡Blink y ya rompí el castillo entero! 💨⚡',
    'La clave es moverse antes de que piensen en defenderse.',
    '¡Weeeee! ¡Esto es lo más rápido que he ido nunca! ⚡😂',
  ],
  [
    'Intento calmarme pero... ¡KA-BOOOOM! 💥',
    'Respiro hondo y me relajo... y luego ¡BOOM! 💣',
    'Los cerdos me ponen tan nervioso que literalmente exploto.',
    '¡Hoy exploté tres veces. Fue un gran día! 💥',
    'Perdón por los daños colaterales... o no tanto. 😅',
  ],
  [
    'Prefiero la paz, pero mis huevos son sagrados. 🥚🌸',
    'Meditando se consigue todo. ¡Incluso derribar torres! 🌼',
    'La calma es mi arma más poderosa, y mi puntería también.',
    'Hoy hice yoga y luego derribé dos torres. ¡Buen día! 🧘‍♀️',
    'Paz, amor y... ¡FUERA DE MI NIDO! 🌺',
  ],
  [
    '¡Somos tres, somos imparables! 💙💙💙',
    'Jim fue por la izquierda, Jake por el centro, y Jay... también. 😂',
    'La división es nuestra mayor fortaleza. ¡Divide y vencerás!',
    '¡Tres pájaros por el precio de uno! Una oferta irresistible.',
    '¡Juntos somos uno, pero separados somos tres! 🔵🔵🔵',
  ],
]

const EMOJIS = ['😡', '💥', '💙', '😂', '🥚']

function CommentItem({ id, avatar, name, body }) {
  const [reactions, setReactions] = useState({})
  const [active, setActive] = useState(new Set())

  function react(emoji) {
    const isActive = active.has(emoji)
    setActive(prev => {
      const next = new Set(prev)
      if (isActive) next.delete(emoji)
      else next.add(emoji)
      return next
    })
    setReactions(prev => ({
      ...prev,
      [emoji]: Math.max(0, (prev[emoji] ?? 0) + (isActive ? -1 : 1))
    }))
  }

  return (
    <li className={styles.commentItem}>
      <img src={avatar} alt={name} className={styles.commentAvatar} />
      <div className={styles.commentContent}>
        <div className={styles.commentName}>{name}</div>
        <div className={styles.commentBody}>{body}</div>
        <div className={styles.emojiBar}>
          {EMOJIS.map(emoji => (
            <button
              key={emoji}
              className={`${styles.emojiBtn} ${active.has(emoji) ? styles.emojiActive : ''}`}
              onClick={() => react(emoji)}
            >
              {emoji}
              {reactions[emoji] > 0 && (
                <span className={styles.emojiCount}>{reactions[emoji]}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </li>
  )
}

export default function Post({ post }) {
  const [likes, setLikes] = useState(post.likes ?? 0)
  const [liked, setLiked] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [loadingComments, setLoadingComments] = useState(false)
  const [commentIds, setCommentIds] = useState([])
  const [userComments, setUserComments] = useState([])
  const [commentCount, setCommentCount] = useState(post.comments ?? 0)
  const [newComment, setNewComment] = useState('')

  function toggleLike() {
    setLiked(!liked)
    setLikes((s) => s + (liked ? -1 : 1))
  }

  function toggleComments() {
    if (!showComments && commentIds.length === 0) {
      setLoadingComments(true)
      fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(res => res.json())
        .then(data => setCommentIds(data.slice(0, 5).map(c => c.id)))
        .catch(() => setCommentIds([1, 2, 3, 4, 5]))
        .finally(() => setLoadingComments(false))
    }
    setShowComments(s => !s)
  }

  function submitComment(e) {
    e.preventDefault()
    const text = newComment.trim()
    if (!text) return
    setUserComments(prev => [{ id: Date.now(), body: text }, ...prev])
    setCommentCount(c => c + 1)
    setNewComment('')
  }

  return (
    <article className={styles.post}>
      <div className={styles.header}>
        <img src={post.author.avatar} alt={post.author.name} className={styles.avatar} />
        <div>
          <div className={styles.name}>
            {post.author.name}
            {post.author.role && (
              <span className={styles.role}>· {post.author.role}</span>
            )}
          </div>
          <div className={styles.meta}>{post.timestamp}</div>
        </div>
      </div>

      <div className={styles.content}>{post.content}</div>

      <div className={styles.footer}>
        <button
          className={`${styles.actionBtn} ${liked ? styles.liked : ''}`}
          onClick={toggleLike}
          aria-pressed={liked}
        >
          <span className={styles.btnIcon}>{liked ? '❤️' : '🤍'}</span>
          <span className={styles.btnCount}>{likes}</span>
          <span className={styles.btnLabel}>Me gusta</span>
        </button>
        <button
          className={`${styles.actionBtn} ${showComments ? styles.commentActive : ''}`}
          onClick={toggleComments}
        >
          <span className={styles.btnIcon}>💬</span>
          <span className={styles.btnCount}>{commentCount}</span>
          <span className={styles.btnLabel}>Comentarios</span>
        </button>
      </div>

      {showComments && (
        <div className={styles.commentsSection}>
          <div className={styles.commentsDivider} />

          {/* Input para escribir comentario */}
          <form className={styles.commentForm} onSubmit={submitComment}>
            <img src={RED_AVATAR} alt="Red" className={styles.commentAvatar} />
            <div className={styles.commentInputWrapper}>
              <input
                className={styles.commentInput}
                type="text"
                placeholder="Escribe un comentario..."
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
              />
              <button type="submit" className={styles.commentSubmit} disabled={!newComment.trim()}>
                Enviar
              </button>
            </div>
          </form>

          {/* Comentarios del usuario */}
          {userComments.length > 0 && (
            <ul className={styles.commentsList} style={{ marginBottom: 10 }}>
              {userComments.map(c => (
                <CommentItem key={c.id} id={c.id} avatar={RED_AVATAR} name="Red" body={c.body} />
              ))}
            </ul>
          )}

          {/* Comentarios de los pájaros */}
          {loadingComments ? (
            <p className={styles.loadingMsg}>🔄 Cargando comentarios...</p>
          ) : (
            <ul className={styles.commentsList}>
              {commentIds.map((cid, i) => (
                <CommentItem
                  key={cid}
                  id={cid}
                  avatar={BIRD_AVATARS[i % 5]}
                  name={BIRD_NAMES[i % 5]}
                  body={BIRD_DIALOGS[i % 5][i]}
                />
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  )
}
