import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Layout from './components/layout/layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'oooigram',
  description: '일상을 기록하세요.',
  icons: {
    icon: '/camera.png',
  },
  openGraph: {
    title: 'oooigram',
    description: '일상을 기록하세요.',
    url: 'https://oooigram.vercel.app/',
    siteName: 'oooigram',
    images: [
      {
        url: 'https://oooigram.vercel.app/sumnail.png',
        width: 1200,
        height: 630,
        alt: 'oooigram 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
