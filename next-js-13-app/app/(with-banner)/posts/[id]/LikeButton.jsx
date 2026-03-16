'use client'

import { useState } from "react"
import styles from './LikeButton.module.css'

export function LikeButton({ id, className, onToggle, initialLiked = false, initialCount = 0 }) {
    const [liked, setLiked] = useState(initialLiked)
    const [count, setCount] = useState(initialCount)

    const handleClick = () => {
        const newLiked = !liked
        setLiked(newLiked)
        setCount(prev => prev + (newLiked ? 1 : -1))
        if (typeof onToggle === 'function') onToggle(newLiked)
    }

    return (
        <button
            className={`${styles.button} ${className || ''} ${liked ? styles.liked : ''}`}
            onClick={handleClick}
            aria-pressed={liked}
            aria-label={`like-${id}`}
        >
            <span className={styles.emoji} aria-hidden="true">{liked ? '💙' : '🖤'}</span>
            <span className={styles.count}>{count}</span>
        </button>
    )
}