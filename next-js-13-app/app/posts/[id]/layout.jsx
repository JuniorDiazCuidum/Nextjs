import Link from "next/link"

export default function CommentsLayout({ children }) {
    return (
        <>
            <nav className="breadcrumb"><Link href="/">Home</Link><span className="sep">•</span><Link href="/posts">Posts</Link><span className="sep">•</span><span>Comments</span></nav>
            <div>{children}</div>
        </>
    )
}