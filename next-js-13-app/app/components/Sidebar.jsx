"use client"
import styles from './Sidebar.module.css'

const SOCIAL_LINKS = [
  { label: 'Twitter / X', icon: '🐦‍⬛', color: '#000', href: 'https://twitter.com' },
  { label: 'YouTube', icon: '📺', color: '#FF0000', href: 'https://youtube.com' },
  { label: 'Instagram', icon: '📸', color: '#E1306C', href: 'https://instagram.com' },
  { label: 'TikTok', icon: '🎵', color: '#010101', href: 'https://tiktok.com' },
  { label: 'Facebook', icon: '👍', color: '#1877F2', href: 'https://facebook.com' },
]

export default function Sidebar() {
  return (
    <div className={styles.card}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXROZRdgt62i9mMtqXD2GEFYZWIsLgdD-aF6yzTzBiyA&s" alt="Red" className={styles.avatar} />
      <h3>Red</h3>
      <p className={styles.bio}>Líder de la bandada. Siempre alerta, siempre gruñón. Defensor de los huevos desde el primer día. 🥚</p>
      <div className={styles.stats}>
        <div>
          <strong>142</strong>
          <div className={styles.label}>Posts</div>
        </div>
        <div>
          <strong>4.8k</strong>
          <div className={styles.label}>Seguidores</div>
        </div>
        <div>
          <strong>3</strong>
          <div className={styles.label}>Siguiendo</div>
        </div>
      </div>

      <div className={styles.socialSection}>
        <p className={styles.socialTitle}>🌍 Síguenos en</p>
        <div className={styles.socialButtons}>
          {SOCIAL_LINKS.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              style={{ '--social-color': s.color }}
              title={s.label}
            >
              <span className={styles.socialIcon}>{s.icon}</span>
              <span className={styles.socialLabel}>{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
