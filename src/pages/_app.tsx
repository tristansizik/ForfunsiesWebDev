import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Roboto_Mono, Saira } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100','400'],
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const saira = Saira({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500'],
  // variable: '--font-saira',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={'${inter.variable} font-sans}'}>
      <Component {...pageProps} />    
    </main> 
  )
}
