import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from './components/navbar/Nav'
const poppins = Poppins({ subsets: ['latin'], weight: ['400']})
import Script from 'next/script'

export const metadata = {
  title: 'Kiriyako',
  description: 'hi.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <meta name="google-site-verification" content="JdOLYNfU2F0Kn8meIhccpZ-757-A9fAco-6MO5loKl0"/>
      </head>
      <body className={poppins.className}>
        <Script id="google-analytics" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-T4CM2RZNV4" />

        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T4CM2RZNV4');
          `}
        </Script>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
