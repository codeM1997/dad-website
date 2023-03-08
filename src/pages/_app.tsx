import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Header from '@/components/Header';
export default function App({ Component, pageProps }: AppProps) {

  const theme = extendTheme({
    colors: {
      primary: {
        50: "#80c890",
        100: "#80c890",
        500: "#80c890", // you need this
      }
    }
  });
  return (<ChakraProvider theme={theme}>
    <div className='bg-retro-white'>
    <div className='container m-auto'>
      <Header />
      <Component {...pageProps} />
    </div>

  </div>
  </ChakraProvider> )
  
  
}
