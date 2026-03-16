"use client"
import { useState } from 'react'
import styles from './Post.module.css'

export default function Post({ post }) {
  const [likes, setLikes] = useState(post.likes ?? 0)
  const [liked, setLiked] = useState(false)

  function toggleLike() {
    setLiked(!liked)
    setLikes((s) => s + (liked ? -1 : 1))
  }

  return (
    <article className={styles.post}>
      <div className={styles.header}>
        <img src={post.author.avatar || '/bird-red.svg'} alt={post.author.name} className={styles.avatar} />
        <div>
          <div className={styles.name}>
            {post.author.name}
            {post.author.role && (
              <span style={{fontWeight:400, fontSize:12, color:'var(--muted)', marginLeft:8, fontFamily:'Nunito,sans-serif'}}>· {post.author.role}</span>
            )}
          </div>
          <div className={styles.meta}>{post.timestamp}</div>
        </div>
      </div>

      <div className={styles.content}>{post.content}</div>

      <div className={styles.actions}>
        <button className={styles.likeButton} onClick={toggleLike} aria-pressed={liked}>
          {liked ? '❤️' : '🤍'} {likes}
        </button>
        <div className={styles.comments}>💬 {post.comments}</div>
      </div>
    </article>
  )
}
