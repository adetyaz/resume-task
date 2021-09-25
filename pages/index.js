import Head from 'next/head'
import About from '../components/about/about'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Porfolio from '../components/portfolio/portfolio'
import Profile from '../components/profile/profile'


export default function Home() {
  return (
    <>
      <Head>
        <title>Resume - Lasisi Adetayo</title>
        <meta name="description" content="A resume website for Lasisi Adetayo" />
        <link rel="icon" href="/images/i4g.png" />
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Profile /> */}
        <Porfolio />
      </main>
      <Footer />
    </>
  )
}
