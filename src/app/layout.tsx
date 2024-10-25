import type { Metadata } from 'next';

import './globals.css';

import { font } from './config/fonts';
import { TopMenu } from '@/components';


export const metadata: Metadata = {
  title: "Plan Circuital",
  description: "Buscador de Circuito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={font.className}>
        <TopMenu />
        {children}
      </body>
    </html>
  );
}
