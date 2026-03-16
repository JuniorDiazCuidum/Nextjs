"use client"
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={styles.card}>
      <img src="/bird-red.svg" alt="Red" className={styles.avatar} />
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
    </div>
  )
}
