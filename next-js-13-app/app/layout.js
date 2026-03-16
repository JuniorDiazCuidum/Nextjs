import '../styles/globals.css'
import { Navigation } from "./components/Navigation";

export const metadata = {
    title: 'AngryBird Feed 🐦',
    description: '¡La red social de los pájaros más enojados!',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
