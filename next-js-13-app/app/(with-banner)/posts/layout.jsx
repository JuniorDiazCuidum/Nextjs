export default function Layout({ children }) {
    const text = '🐷 ¡CUIDADO! LOS CERDOS VERDES RONDAN POR AHÍ 🐷 \u00a0\u00a0\u00a0 🐦 LANZA A TUS PÁJAROS Y RECUPERA LOS HUEVOS 🥚 \u00a0\u00a0\u00a0 🐷 ¡CUIDADO! LOS CERDOS VERDES RONDAN POR AHÍ 🐷 \u00a0\u00a0\u00a0 🐦 LANZA A TUS PÁJAROS Y RECUPERA LOS HUEVOS 🥚 \u00a0\u00a0\u00a0'

    return (
        <div>
            <div style={{
                background: 'linear-gradient(90deg, var(--ab-red), #ff7043)',
                color: '#fff',
                fontFamily: "'Bangers', sans-serif",
                fontSize: '17px',
                letterSpacing: '2px',
                padding: '8px 0',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
            }}>
                <span style={{
                    display: 'inline-block',
                    animation: 'bannerScroll 18s linear infinite',
                }}>
                    {text}{text}
                </span>
                <style>{`
                    @keyframes bannerScroll {
                        0%   { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}</style>
            </div>
            { children }
        </div>
    )
}