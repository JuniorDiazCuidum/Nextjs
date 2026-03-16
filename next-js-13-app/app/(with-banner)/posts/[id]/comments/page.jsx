import React from "react"
import Image from 'next/image'
import styles from './comments.module.css'

const fetchComments = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: { revalidate: 60 }
    }).then(res => res.json())
}

export default async function CommentsPage({ params }) {
    const { id } = await params
    const comments = await fetchComments(id)

    return (
        <section className={styles.container}>
            <ul className={styles.commentsList}>
                {comments.map(comment => (
                    <li key={comment.id} className={styles.comment}>
                        <div className={styles.avatar}>
                            <Image
                                width={50}
                                height={50}
                                alt={comment.name}
                                src={`https://avatars.dicebear.com/api/pixel-art-neutral/${encodeURIComponent(comment.email)}.svg`}
                            />
                        </div>

                        <div className={styles.content}>
                            <h3 className={styles.commentTitle}>{comment.name}</h3>
                            <p className={styles.commentBody}>{comment.body}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
