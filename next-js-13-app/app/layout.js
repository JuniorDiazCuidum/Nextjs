import '../styles/globals.css'
import { Navigation } from "./components/Navigation";
import { font } from './(with-banner)/font'

export const metadata = {
    title: 'Mi primera app con Next',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={font.className}>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
