// src/app/page.tsx
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import AboutMe from '@/components/sections/AboutMe'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  )
}