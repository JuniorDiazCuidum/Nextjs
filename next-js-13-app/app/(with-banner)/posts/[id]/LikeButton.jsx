'use client'

import { useState } from "react"
import styles from './LikeButton.module.css'

export function LikeButton({ id, className }) {
    const [liked, setLiked] = useState(false)

    return (
        <button
            className={`${styles.button} ${className || ''} ${liked ? styles.liked : ''}`}
            onClick={() => setLiked(!liked)}
            aria-pressed={liked}
            aria-label={`like-${id}`}
        >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.07 2.09C11.09 5.01 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill={liked ? '#1f7bd4' : 'none'}
                    stroke={liked ? '#1f7bd4' : '#cfcfcf'}
                    strokeWidth="1.2"
                />
            </svg>
        </button>
    )
}