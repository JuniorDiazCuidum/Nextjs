'use client'

import { useState, useEffect } from 'react'
import styles from './comments/comments.module.css'

export default function ShowComments({ postId }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [comments, setComments] = useState([])

  useEffect(() => {
    if (!open) return
    if (comments.length) return
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [open, postId, comments.length])

  return (
    <div>
      <button className={styles.showButton} onClick={() => setOpen(v => !v)}>
        {open ? 'Ocultar comentarios' : 'Ver comentarios'}
      </button>

      {open && (
        <section id="comments" className={styles.container}>
          {loading ? (
            <p style={{ color: '#bfbfbf' }}>Cargando...</p>
          ) : (
            <ul className={styles.commentsList}>
              {comments.map(c => (
                <li key={c.id} className={styles.comment}>
                  <h3 className={styles.commentTitle}>{c.name}</h3>
                  <p className={styles.commentBody}>{c.body}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </div>
  )
}
