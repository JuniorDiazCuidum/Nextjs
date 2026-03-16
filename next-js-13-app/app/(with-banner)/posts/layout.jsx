export default function Layout({ children }) {
    return (
        <div>
            <div style={{
                background: 'linear-gradient(90deg, var(--ab-red), #ff7043)',
                color: '#fff',
                fontFamily: "'Bangers', sans-serif",
                fontSize: '17px',
                letterSpacing: '2px',
                padding: '8px 0',
                textAlign: 'center',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
            }}>
                🐷 ¡CUIDADO! LOS CERDOS VERDES RONDAN POR AHÍ 🐷 &nbsp;&nbsp;&nbsp;
                🐦 LANZA A TUS PÁJAROS Y RECUPERA LOS HUEVOS 🥚 &nbsp;&nbsp;&nbsp;
                🐷 ¡CUIDADO! LOS CERDOS VERDES RONDAN POR AHÍ 🐷
            </div>
            { children }
        </div>
    )
}