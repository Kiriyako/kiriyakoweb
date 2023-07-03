import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from './components/navbar/Nav'
const poppins = Poppins({ subsets: ['latin'], weight: ['400']})

export const metadata = {
  title: 'Kiriyako',
  description: 'hi.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
