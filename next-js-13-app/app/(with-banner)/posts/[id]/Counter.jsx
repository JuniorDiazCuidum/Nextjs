'use client'

import { useState } from 'react'
import { LikeButton } from './LikeButton.jsx'

export function Counter(){
    const [count, setCount] = useState(0)

    const handleToggle = (newLiked) => {
        setCount(prev => {
            const next = prev + (newLiked ? 1 : -1)
            return next < 0 ? 0 : next
        })
    }

    return (
        <div>
            <p>Likes: {count}</p>
            <LikeButton id="counter" onToggle={handleToggle} />
        </div>
    )
}