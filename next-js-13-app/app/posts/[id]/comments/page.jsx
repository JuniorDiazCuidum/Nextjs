import React from "react"
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
        <ul style={{ background: '#eee', fontSize: '10px'}}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <h4>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li>
            ))}
        </ul>
    )
}
