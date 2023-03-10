import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroBanner from '@/components/HeroBanner'
import HeroImageBanner from '@/components/HeroImageBanner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Dr Vipin Mittal's dental clinic`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageBanner/>
      {/* <HeroBanner/> */}
    </>
  )
}
