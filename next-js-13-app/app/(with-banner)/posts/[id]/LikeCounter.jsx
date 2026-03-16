'use client'

export function LikeCounter({ id, className }) {
    const [liked, setLiked] = useState(false)

    return (
        <button
            className={`${styles.button} ${className || ''} ${liked ? styles.liked : ''}`}
            onClick={() => setLiked(!liked)}
            aria-pressed={liked}
            aria-label={`like-${id}`}
        >
            <svg>
                <path
                    fill={liked ? '#1f7bd4' : 'none'}
                    stroke={liked ? '#1f7bd4' : '#cfcfcf'}
                    strokeWidth="1.2"
                />
            </svg>
        </button>
    )
}