import { Navigation } from "./components/Navigation";

export const metadata = {
  title: 'Mi primera app con Next',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
