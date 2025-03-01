// src/app/layout.tsx
import { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

// Font configuration
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

// Metadata for SEO
export const metadata: Metadata = {
  title: {
    template: '%s | FarmSync - Farm Management Solutions',
    default: 'FarmSync - Smart Farm Management for Kenya\'s Future',
  },
  description: 'FarmSync revolutionizes how farms operate with integrated technology solutions for dairy management and feed formulation.',
  keywords: [
    'farm management', 
    'agricultural technology', 
    'dairy management', 
    'feed formulation',
    'Kenya farming',
    'farm software',
    'livestock management'
  ],
  authors: [{ name: 'FarmSync' }],
  creator: 'FarmSync',
  publisher: 'FarmSync',
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL('https://farmsync.co.ke'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'FarmSync - Smart Farm Management for Kenya\'s Future',
    description: 'FarmSync revolutionizes how farms operate with integrated technology solutions for dairy management and feed formulation.',
    url: 'https://farmsync.co.ke',
    siteName: 'FarmSync',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FarmSync - Smart Farm Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FarmSync - Smart Farm Management for Kenya\'s Future',
    description: 'FarmSync revolutionizes how farms operate with integrated technology solutions for dairy management and feed formulation.',
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="flex min-h-screen flex-col bg-gray-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Analytics script would go here */}
      </body>
    </html>
  );
}