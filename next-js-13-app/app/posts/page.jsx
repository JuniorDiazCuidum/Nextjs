import Link from "next/link"
import { LikeButton } from "./[id]/LikeButton.jsx"
import styles from "./posts.module.css"

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
}

export default async function PostsPage({ params }) {
    const posts = await fetchPosts()

    return (
        <section className={styles.list}>
            <div className={styles.breadcrumb}>Home · Posts</div>
            {posts.slice(0, 5).map(post => (
                <article key={post.id} className={styles.post}>
                    <Link href={`/posts/${post.id}`} className={styles.titleLink}>
                        <h2 className={styles.title}>{post.title}</h2>
                    </Link>
                    <p className={styles.body}>{post.body}</p>
                    <LikeButton id={post.id} className={styles.likeButton} />
                </article>
            ))}
        </section>
    )
}
