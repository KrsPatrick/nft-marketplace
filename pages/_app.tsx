import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Example from "../components/navbar/navbar.components"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Example />
    <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
