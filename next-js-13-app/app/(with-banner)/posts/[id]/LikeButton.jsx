'use client'

import { useState } from "react"
import styles from './LikeButton.module.css'

export function LikeButton({ id, className, onToggle, initialLiked = false }) {
    const [liked, setLiked] = useState(initialLiked)

    const handleClick = () => {
        const newLiked = !liked
        setLiked(newLiked)
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
        </button>
    )
}