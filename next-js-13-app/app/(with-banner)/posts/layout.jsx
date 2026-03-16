export default function Layout({ children }) {
    return (
        <div>
            <marquee style={{ background: '#fff', color: 'purple' }}> Hola que tal </marquee>
            { children }
        </div >
    )
}