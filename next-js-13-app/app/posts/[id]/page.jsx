import styles from '../posts.module.css'
import ShowComments from './ShowComments'

const fetchPost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 60 } })
        .then(res => res.json())
}

export default async function PostPage({ params }) {
    const { id } = await params
    const post = await fetchPost(id)

    return (
        <section className={styles.list}>
            <div className={styles.breadcrumb}>Home · Posts</div>

            <article className={styles.post}>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.body}>{post.body}</p>
                <ShowComments postId={id} />
            </article>
        </section>
    )
}
