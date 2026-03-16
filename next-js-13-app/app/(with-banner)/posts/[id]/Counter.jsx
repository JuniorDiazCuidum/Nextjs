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
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 20px',
            background: 'var(--card-bg, #fff)',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            marginBottom: '12px',
            width: 'fit-content'
        }}>
            <LikeButton id="counter" onToggle={handleToggle} />
            <span style={{
                fontFamily: 'Bangers, cursive',
                fontSize: '22px',
                color: 'var(--ab-red, #E8302A)',
                letterSpacing: '1px'
            }}>
                {count} {count === 1 ? 'like' : 'likes'}
            </span>
        </div>
    )
}